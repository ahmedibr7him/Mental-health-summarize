import { motion } from "framer-motion"
import { assesst } from '../../../public/assesst'
import { useTranslation } from "react-i18next"

const AiModels = () => {
  const {t} =useTranslation()
  return (
    <>
      {/* Title */}
      <div className='flex flex-col w-full'>
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .5 }}
          className='text-center font-bold text-primary 
          text-[28px] md:text-[40px] lg:text-[60px]'
        >
          {t("AI")} <span className='text-secondary'>{t("Models")}</span>
        </motion.h1>
      </div>

      {/* Models Cards */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 my-10'>
        
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .5 }}
          className='flex items-center gap-4 bg-white rounded-3xl shadow-md 
          px-4 py-3 w-full max-w-[320px]'
        >
          <img src={assesst.weathper} alt="whisper" className='w-14 h-14 object-contain'/>
          <p className='text-xl md:text-2xl text-primary font-bold'>
            WHISPER
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .5 }}
          className='flex items-center gap-4 bg-white rounded-3xl shadow-md 
          px-4 py-3 w-full max-w-[320px]'
        >
          <img src={assesst.chat} alt="gpt" className='w-14 h-14 object-contain'/>
          <p className='text-xl md:text-2xl text-primary font-bold'>
            GPT-5.1
          </p>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center my-10'>
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .5 }}
          className='flex justify-center'
        >
          <img 
            src={assesst.about} 
            alt="about"  
            className='w-full max-w-112.5 object-contain rounded-3xl shadow-md'
          />
        </motion.div>

        {/* Text */}
        <motion.p 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .5 }}
          className='text-text text-sm md:text-base lg:text-lg leading-7 max-w-90 mx-auto lg:mx-0'
        >
         {t(" Psychotherapy sessions produce long, unstructured texts that rely on dialogue,  making them difficult to process with traditional natural language processing  techniques. Current summarization models struggle to understand the sequence   of sessions and emotional progression. This project focuses on building a  privacy-aware AI system that preserves context and clinical meaning.")}
        </motion.p>
      </div>
    </>
  )
}

export default AiModels