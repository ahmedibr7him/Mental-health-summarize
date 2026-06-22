import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
const Feauter = () => {
    const dataOne=[
        {id:1,title:"Fast & Accurate Summaries",description:"Our AI model delivers precise summaries of mental-health–related texts in just seconds. Whether you’re working with long therapy notes, research papers, or patient conversations, the system extracts key insights while preserving the core meaning and emotional tone."},
        {id:2,title:"Supports Therapy & Research",description:"Ideal for mental-health professionals, university students, and researchers. The tool helps you quickly digest long text, extract clinical points, and understand patterns without spending hours reading dense material."}
    ]
     const dataTwo=[
        {id:1,title:"Empathetic & Safe AI",description:"Built specifically for sensitive topics, the AI is trained to recognize emotional context and respond with care. It avoids harmful interpretations and ensures that the summaries remain supportive, respectful, and aligned with mental-health communication standards."},
        {id:2,title:"Multilingual Understanding",description:"The AI understands and summarizes content in multiple languages, including English and Arabic. This makes it accessible to diverse users and useful for global research and cross-language studies."},
    ]
     const dataThree=[
        {id:1,title:"Secure & Confidential",description:"Your content is always processed securely. No data is stored or shared — everything happens in real time with strong privacy protection. This makes the tool suitable for therapists, clinics, and educational environments that require confidentiality."},
        {id:2,title:"Custom Summary Styles",description:"Choose between short, medium, or detailed summaries depending on your workflow. Whether you need a quick overview or an in-depth synthesized summary, the system adapts to your preferred level of detail."},
    ]

    const {t} =useTranslation()
  return (
    <>
            <motion.div
        initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false }}
            className='flex flex-col w-full '>
                  <h1 className='lg:text-[60px] font-bold text-shadow-2xs text-primary text-center sm:text-[25px] sm:mt-6.25  md:text-[40px]'>{t("feauter")}<span className='text-secondary'>{t("section")}</span></h1>
        <p className='text-text text-center font-bold text-shadow-2xs sm:text-[10px] md:text-[14px]'>{t("Powerful Features Built for Mental-Health Summarization")}</p>
        </motion.div>

        {/* parent */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-1  mt-10'>
            {/* one */}
            <div className=' grid grid-rows-2 lg:items-start sm:justify-center'>
                {dataOne?.map((item)=>(
                    <motion.div
                     initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 ,delay:.1 }}
  viewport={{ once: false }}
                    key={item.id} className='bg-white shadow-2xl lg:w-100 sm:w-80 md:w-120 mb-10 p-5 rounded-[40px_10px_10px_10px]'>
                        <h3 className='font-bold text-primary flex items-center gap-4 text-[18px]'><p className='w-4 shadow-2xs h-4 rounded-full inline-block bg-primary'></p>{t(item.title)}</h3>
                        <span className='text-text  p-1.5 sm:text-[14px] lg:text-[16px]'>{t(item.description)}</span>
                    </motion.div>
                ))}
            </div>
            {/* two */}
                        <div className=' grid grid-rows-2 lg:mt-15 items-center justify-center'>
                {dataTwo?.map((item)=>(
                    <motion.div
                     initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6,delay:.3 }}
  viewport={{ once: false }}
                    key={item.id} className='bg-white shadow-2xl lg:w-100 sm:w-80 mb-10 md:w-120 p-5 rounded-[35px_5px_5px_5px]'>
                        <h3 className='font-bold text-primary flex items-center gap-4 text-[18px]'><p className='w-5 h-5 rounded-full inline-block bg-primary'></p>{t(item.title)}</h3>
                        <span className='text-text  p-1.5 sm:text-[14px] lg:text-[16px]'>{t(item.description)}</span>
                    </motion.div>
                ))}
            </div>
            {/* three */}

                                   <div className='grid grid-rows-2 lg:mt-30 items-end sm:justify-center lg:justify-end'>
                {dataThree?.map((item)=>(
                    <motion.div
                    initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 ,delay:.5 }}
  viewport={{ once: false }}
                    key={item.id} className='bg-white shadow-2xl lg:w-100 sm:w-80 mb-10 p-5 md:w-120 rounded-[35px_5px_5px_5px]'>
                        <h3 className='font-bold text-primary flex items-center gap-4 text-[18px]'><p className='w-5 h-5 rounded-full inline-block bg-primary'></p>{t(item.title)}</h3>
                        <span className='text-text  p-1.5 sm:text-[14px] lg:text-[16px]'>{t(item.description)}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Feauter
