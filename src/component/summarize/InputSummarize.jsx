import { useState } from "react";
import VoiceRecorder from "./VoiceRecorder";
import ItWork from "../Home/ItWork";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { therapyApi } from "../../Api/apiTesx";

const InputSummarize = () => {
  const [typeInput, setTypeInput] = useState("text");
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const [audioBlob, setAudioBlob] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [audioURL, setAudioURL] = useState(null);

  const { t } = useTranslation();

  const handleRecordComplete = (blob, url) => {
    setAudioBlob(blob);
    setAudioURL(url);
    setAudioFile(new File([blob], "recording.ogg", { type: "audio/ogg" }));
    setTypeInput("microphone");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let res = null;
      if (typeInput === "text") {
        if (!text.trim()) { setLoading(false); return; }
        res = await therapyApi.post("/analyze/text", { text });
      } else if (typeInput === "file" || typeInput === "microphone") {
        if (!audioFile) { alert("Choose audio file"); setLoading(false); return; }
        const formData = new FormData();
        formData.append("file", audioFile);
        res = await therapyApi.post("/analyze/audio", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      if (res?.data?.clinical_analysis) setAnalysis(res.data.clinical_analysis);
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="w-full flex flex-col items-center mt-20 px-4"
      >
        <form className="w-full max-w-2xl flex flex-col gap-4" onSubmit={handleSubmit}>
          
          <div className="flex flex-col md:flex-row gap-4 items-center w-full">
            <div className="flex-grow w-full">
              {typeInput === "text" && (
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={t("Enter text...")}
                  className="w-full h-12 p-4 rounded-2xl text-secondary bg-white shadow-lg outline-none hover:scale-[1.01] transition-all"
                />
              )}

              {typeInput === "file" && !audioURL && (
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setAudioFile(file);
                    if (file) setAudioURL(URL.createObjectURL(file));
                  }}
                  className="w-full h-12 p-2 rounded-2xl text-secondary bg-white shadow-lg outline-none"
                />
              )}

              {(typeInput === "microphone" || typeInput === "file") && audioURL && (
                <div className="w-full h-12 flex items-center justify-between gap-2 px-4 bg-white rounded-2xl shadow-lg">
                  <audio controls src={audioURL} className="w-full h-8" />
                  <button type="button" onClick={() => { setAudioURL(null); setAudioBlob(null); setAudioFile(null); }}>
                    <i className="fa-regular fa-circle-xmark text-secondary text-2xl"></i>
                  </button>
                </div>
              )}
            </div>

            <select
              value={typeInput}
              onChange={(e) => {
                setTypeInput(e.target.value);
                setAudioURL(null); setAudioBlob(null); setAudioFile(null);
              }}
              className="w-full md:w-40 h-12 px-3 rounded-2xl text-secondary bg-white shadow-lg outline-none"
            >
              <option value="text">{t("Text")}</option>
              <option value="file">{t("Upload File")}</option>
              <option value="microphone">{t("Microphone")}</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-50 h-10 rounded-3xl text-white bg-primary font-bold hover:bg-white hover:text-primary border border-primary transition-all cursor-pointer"
            >
              {loading ? "Loading..." : t("Analyze")}
            </button>
          </div>
        </form>

        <div className="mt-6 w-full max-w-2xl">
          <VoiceRecorder onRecordComplete={handleRecordComplete} />
        </div>
      </motion.div>

      {/* RESULT */}
      {analysis && (
        <motion.div className="w-full flex justify-center mt-10 px-4">
          <div className="w-full max-w-3xl w-full bg-white shadow-xl rounded-3xl p-6 space-y-5">
            <h2 className="text-3xl font-bold text-primary text-center">Clinical Analysis</h2>
            
            {/* عرض كافة التفاصيل */}
            {[
              { title: "Session Summary", value: analysis.session_summary },
              { title: "Suggested Diagnosis", value: analysis.suggested_diagnosis },
              { title: "Emotional State", value: analysis.emotional_state },
              { title: "Anxiety Level", value: `${analysis.anxiety_level} (${analysis.anxiety_score}/10)` },
              { title: "Risk Level", value: analysis.risk_level },
              { title: "Main Complaint", value: analysis.main_complaint },
              { title: "Therapist Focus", value: analysis.therapist_focus },
              { title: "Recommendations", value: analysis.recommendations },
              { title: "Risk Details", value: analysis.risk_details },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                <p className="text-secondary mt-1">{item.value}</p>
              </div>
            ))}

            <div>
              <h3 className="font-bold text-lg text-primary">Detected Symptoms</h3>
              <ul className="list-disc pl-5 mt-1 text-secondary">
                {analysis.detected_symptoms?.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      <ItWork />
    </>
  );
};

export default InputSummarize;