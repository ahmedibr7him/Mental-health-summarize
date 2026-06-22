import { useTranslation } from "react-i18next"

const Title = ({title,subTitle}) => {
  const{t}=useTranslation()
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-primary lg:text-5xl xs:text-2xl max-w-full font-extrabold">{t(title)}</h1>
      <p className="text-secondary xs:text-[14px] lg:text-[16px]">{t(subTitle)}</p>
      </div>
      </>
  )
}

export default Title
