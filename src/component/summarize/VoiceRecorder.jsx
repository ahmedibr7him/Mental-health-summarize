import { useState, useRef } from "react";

const VoiceRecorder = ({ onRecordComplete }) => {

  const [recording, setRecording] = useState(false);

  const [time, setTime] = useState(0);

  const mediaRecorderRef = useRef(null);

  const audioChunksRef = useRef([]);

  const timerRef = useRef(null);

  const streamRef = useRef(null);

  const startRecording = async () => {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

      streamRef.current = stream;

      /* MEDIA RECORDER */
      const mediaRecorder =
        new MediaRecorder(stream);

      mediaRecorderRef.current =
        mediaRecorder;

      /* RESET CHUNKS */
      audioChunksRef.current = [];

      /* SAVE CHUNKS */
      mediaRecorder.ondataavailable = (
        event
      ) => {

        if (event.data.size > 0) {

          audioChunksRef.current.push(
            event.data
          );
        }
      };

      /* STOP RECORD */
      mediaRecorder.onstop = () => {

        /* CREATE BLOB */
        const audioBlob = new Blob(
          audioChunksRef.current,
          {
            type: "audio/webm",
          }
        );

        /* CREATE URL */
        const audioUrl =
          URL.createObjectURL(audioBlob);

        console.log(
          "FINAL AUDIO:",
          audioBlob
        );

        /* IMPORTANT */
        const audioFile = new File(
          [audioBlob],
          "recording.ogg",
          {
            type: "audio/ogg",
          }
        );

        /* SEND TO PARENT */
        onRecordComplete(
          audioBlob,
          audioUrl,
          audioFile
        );

        /* STOP MIC */
        stream
          .getTracks()
          .forEach((track) =>
            track.stop()
          );
      };

      /* START */
      mediaRecorder.start(100);

      setRecording(true);

      setTime(0);

      timerRef.current = setInterval(
        () => {
          setTime((prev) => prev + 1);
        },
        1000
      );

    } catch (error) {

      console.log(error);
    }
  };

  const stopRecording = () => {

    if (mediaRecorderRef.current) {

      mediaRecorderRef.current.stop();
    }

    clearInterval(timerRef.current);

    setRecording(false);
  };

  return (
    <div className="flex items-center gap-3">

      {!recording ? (

        <button
          type="button"
          onClick={startRecording}
          className="w-12 h-12 flex justify-center items-center transition-all duration-200 rounded-full bg-white shadow hover:scale-110 cursor-pointer"
        >
          <i className="text-2xl text-secondary fa-solid fa-microphone-lines"></i>
        </button>

      ) : (

        <>
          <span className="text-secondary font-bold">
            {time}s
          </span>

          <button
            type="button"
            onClick={stopRecording}
            className="bg-primary text-white px-3 py-1 rounded-xl"
          >
            Stop
          </button>
        </>

      )}

    </div>
  );
};

export default VoiceRecorder;