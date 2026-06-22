import { useTranslation } from 'react-i18next'
import { assesst } from '../../../public/assesst'
import { motion } from "framer-motion"

const ItWork = () => {
  const { t } = useTranslation()

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className='flex flex-col w-full items-center mb-16'
      >
        <h1 className='text-3xl md:text-5xl lg:text-[60px] font-bold text-primary text-center'>
          {t("How")} <span className='text-secondary'>{t("It Works")}</span>
        </h1>
        <p className='text-text text-center font-bold text-sm md:text-base mt-4'>
          {t("Follow these steps to get fast and accurate AI summaries")}
        </p>
      </motion.div>

      {/* الحاوية الرئيسية: تتحول من عمود واحد إلى ثلاثة أعمدة */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto'>
        
        {/* الخطوة الأولى */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className='flex justify-center'
        >
          <div className='bg-white shadow-xl rounded-3xl p-6 flex flex-col items-center gap-4 xl:-rotate-6 hover:rotate-0 transition-transform duration-300 w-full max-w-[350px]'>
            <img src={assesst.one} width={350} height={310} className='rounded-2xl object-contain' alt="step 1" />
            <h2 className='text-primary text-start text-lg font-bold'>{t("Go to the Summarization Page")}</h2>
            <p className='text-text text-sm'>{t("Access the summarization tool directly from the navigation bar. This is where you can upload your content and generate summaries instantly.")}</p>
          </div>
        </motion.div>

        {/* الخطوة الثانية */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className='flex justify-center'
        >
          <div className='bg-primary shadow-xl rounded-3xl p-6 flex flex-col items-center gap-4 w-full max-w-[350px]'>
            <img src={assesst.Two} width={350} height={310} className='rounded-2xl object-contain' alt="step 2" />
            <h2 className='text-white text-start text-lg font-bold'>{t("Upload Your Content")}</h2>
            <p className='text-white/90 text-sm'>{t("Access the summarization tool directly from the navigation bar. This is where you can upload your content and generate summaries instantly.")}</p>
          </div>
        </motion.div>

        {/* الخطوة الثالثة */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className='flex justify-center'
        >
          <div className='bg-white shadow-xl rounded-3xl p-6 flex flex-col items-center gap-4 xl:rotate-6 hover:rotate-0 transition-transform duration-300 w-full max-w-[350px]'>
            <img src={assesst.Three} width={350} height={310} className='rounded-2xl object-contain' alt="step 3" />
            <h2 className='text-primary text-start text-lg font-bold'>{t("Get Results")}</h2>
            <p className='text-text text-sm'>{t("Access the summarization tool directly from the navigation bar. This is where you can upload your content and generate summaries instantly.")}</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default ItWork