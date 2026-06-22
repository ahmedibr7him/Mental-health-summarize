import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const AboutUs = () => {
  const {t}=useTranslation();
  return (
    <>
      <motion.div
       initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: .5 }}
      className='w-full shadow-2xl lg:h-70 sm:h-50 bg-secondary flex justify-center items-center lg:text-7xl sm:text-5xl font-bold text-white rounded-[0_0_50px_50px] '>
        <h1>{t("About Us")}</h1>
      </motion.div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1  sm:gap-5 my-15 '>
          <motion.h2 
           initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false }}
  transition={{ duration: .5 }} className='lg:text-[35px] sm:text-[25px] font-bold text-shadow-2xs text-primary'>{t("Our journey in developing artificial intelligence")}</motion.h2>
        <div className='p-1 items-stretch md:'>
          <motion.p 
           initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: .5 }}
          className='lg:text-[14px] sm:text-[12px] text-text lg:w-80 font-bold'>{t("Our system transforms long, time-consuming content into clear, structured insights within seconds. This helps users save time, stay focused, and gain a deeper understanding of important material without overwhelming information.")}
           </motion.p>
        </div>
        <div className='p-1 items-stretch '>
          <motion.p
           initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false }}
  transition={{ duration: .5 }}
          className='text-[14px] text-text sm:text-[12px] lg:w-80  font-bold'>{t("We prioritize user privacy and guarantee safe processing of all inputs without storing or sharing any data. This ensures complete confidentiality, making the platform suitable for therapists, researchers, students, and anyone working with sensitive material.")}</motion.p>
        </div>

      </div>
    </>
  )
}

export default AboutUs
