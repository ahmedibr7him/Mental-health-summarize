import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { assesst } from "../../public/assets"

const SplashScreen = ({ onFinish }) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true)
    }, 3000)

    const finish = setTimeout(() => {
      onFinish()
    }, 4000)

    return () => {
      clearTimeout(timer)
      clearTimeout(finish)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-9999 flex flex-col">

      {/* left */}
      <motion.div
        animate={animate ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1 }}
        className="h-1/2 w-full bg-primary flex items-center justify-center relative"
      >
            <motion.img
             initial={{ opacity: 0, y: -60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false }}
            src={assesst.logoUp} alt="logoUp" width={300} height={300} className="object-contain absolute bottom-0"/>
      </motion.div>

      {/* right */}
      <motion.div
        animate={animate ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1 }}
        className="h-1/2 w-full bg-primary flex items-center justify-center relative"
      >
            <motion.img
             initial={{ opacity: .3, y: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
            src={assesst.logoDowen} alt="logoDowen" width={300} height={300} className="object-contain absolute top-0" />
      </motion.div>

    </div>
  )
}

export default SplashScreen