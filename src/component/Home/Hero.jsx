import { motion } from "framer-motion"
import { assesst } from '../../../public/assesst'
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";

const Hero = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  return (
    <>
      <motion.div layoutId="underline" className="mt-10" />
      <main className='w-full min-h-screen flex flex-col justify-center items-center py-10 px-4'>
        
        {/* العنوان والوصف */}
        <div className='flex flex-col w-full '>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className='lg:text-[60px] font-bold text-shadow-2xs text-primary text-center sm:text-[25px] sm:mt-6.25 md:text-[40px]'
          >
            {t("I’m Your ")}<span className='text-secondary'>{t(" Mental Health")}</span>{t(" AI Assistant")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-text text-center font-bold text-shadow-2xs text-sm md:text-base"
          >
            {t("Advanced AI for Mental-Health Text Summarization")}
          </motion.p>
        </div>

        {/* الحاوية الرئيسية */}
        <div className='w-full flex flex-col xl:flex-row justify-between lg:h-full items-center flex-wrap sm:justify-center gap-25 sm:mt-15 lg:mt-0'>
          
          {/* الجانب الأيسر */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
            className="sm:hidden xl:block"
          >
            <p><i className="fa-solid fa-check-double text-2xl text-primary"></i></p>
            <p className='text-text w-70 text-[14px] font-bold text-shadow-2xs'>{t("Get clear, accurate, and supportive summaries for therapy notes, conversations, and mental-health content — powered by safe and empathetic AI.")}</p>
          </motion.div>

          {/* المركز */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className='relative m-auto xs:w-100'
          >
            {/* الدائرة تظهر في xl فقط */}
            <div className='lg:w-170 shadow-2xs lg:h-170 hidden xl:block bg-primary absolute left-1/2 -translate-x-1/2 top-20 rounded-full'></div>
            
            {/* الصورة تظهر في xl فقط */}
            <img src={assesst.hero} alt="hero" className='object-contain hidden xl:block sm:relative' width={500} height={500} />
            
            {/* حاوية الزر */}
            <div className='lg:absolute bottom-7 sm:relative sm:w-70 bg-white rounded-full lg:w-130 h-17 left-1/2 -translate-x-1/2 flex items-center justify-center gap-5'>
              <p className='flex items-center gap-3 text-primary text-[20px] font-bold'>{t("Try Demo")} <i className="fa-solid fa-caret-right text-[40px]"></i></p>
              <button 
                aria-label="start now" 
                onClick={() => navigate(`/summarize/${i18n.language}`)} 
                className="relative inline-flex shadow items-center lg:w-25 lg:h-10 xs:w-20 xs:h-10 justify-center overflow-hidden font-medium transition-all bg-primary text-white hover:text-primary hover:font-bold rounded hover:bg-white cursor-pointer sm:w-20 sm:h-8 md:w-27 md:h-10"
              >
                {t(" Start Now")}
              </button>
            </div>
          </motion.div>

          {/* الجانب الأيمن */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className='flex flex-col gap-4 text-end text-[14px] hidden xl:block'
          >
            <div>
              <p className='py-1 px-3 rounded-full bg-primary text-bg inline-block m-2 shadow-lg'>{t("Therapy Notes")}</p> 
              <p className='py-1 px-3 rounded-full bg-secondary shadow-lg text-bg inline-block'>{t("AI Summaries")}</p>
            </div>
            <div>
              <p className='py-1 px-3 rounded-full bg-primary shadow-lg text-bg inline-block'>{t("Mental-Health Support")}</p>
            </div>
            <div>
              <p className='py-1 px-3 rounded-full bg-secondary shadow-lg text-bg inline-block m-2'>{t("Secure Processing")}</p> 
              <p className='py-1 px-3 rounded-full bg-primary text-bg inline-block shadow-lg'>{t("NLP Model")}</p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default Hero