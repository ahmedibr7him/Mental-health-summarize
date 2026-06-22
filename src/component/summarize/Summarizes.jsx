import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Summarizes = () => {
  const {t} =useTranslation();
  return (
    <>
            <motion.div
            initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false }}
            className='flex flex-col w-full mt-15 '>
                  <h1 className='lg:text-[60px] font-bold text-shadow-2xs text-primary text-center sm:text-[25px] sm:mt-6.25  md:text-[40px]'>{t("Summarize")} <span className='text-secondary'>{t("mental health ")}</span>{t("content easily")}</h1>
        <p className='text-text text-center font-bold text-shadow-2xs sm:text-[10px] md:text-[14px]'>{t("Simplify psychological articles and studies into clear points that help you understand more deeply and deal with information without stress or fatigue.")}</p>
        </motion.div>

        
    </>
  )
}

export default Summarizes
