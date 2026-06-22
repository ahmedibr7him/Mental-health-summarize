import {  NavLink } from "react-router-dom";
import { useContext } from "react";
import { LinksContext } from "../../Context/LinksContext";
import { useTranslation } from "react-i18next";
const LinksPagsSmall = () => {
    const {links ,setOpenLinks} =useContext(LinksContext);
    const {i18n,t}=useTranslation()
  return (
    <div className='w-full min-h-screen fixed bg-text  top-0 left-0 z-50 flex items-center justify-center text-white text-2xl font-bold'>

        <button aria-label="Back Menue" onClick={()=>setOpenLinks(prev=>!prev)} className='w-full bg-primaryc z-20  p-1 absolute top-0 left-0 h-16 flex items-center justify-start shadow-2xl bg-primary cursor-pointer text-white transition-all duration-700 rounded-bl-2xl rounded-tl-2xl pl-5 focus:text-primary focus:bg-text group-hover:bg-primary group-hover:text-text'>
            <p className='flex gap-3 items-center'><i className="fa-solid fa-angle-left"></i>{t("Back")}</p>
        </button>
        <div className="w-full overflow-hidden h-full top-0 left-0 z-0 flex items-center justify-center">
            <ul className="flex flex-col justify-center items-center relative gap-6 w-full h-full px-2">
            {
                links.map((link)=>{
                    return(
                        <li key={link.id} onClick={()=>setOpenLinks(prev=>!prev)} className="w-full flex justify-center items-center" ><NavLink to={`${link.Link}/${i18n.language}`} end={link.link === "/home"}  className={({isActive})=>`py-4 text-primary focus:bg-primary w-full rounded-2xl text-center focus:text-text ${isActive?`bg-primary text-white`:`text-primary `}`}>{t(link.name)}</NavLink></li>
                    )
                })
            }
            </ul>
        </div>
      
    </div>
  )
}

export default LinksPagsSmall
