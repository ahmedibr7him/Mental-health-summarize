import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LinksContext } from "../../Context/LinksContext";
import { useTranslation } from "react-i18next";
const LinksPagsLarge = () => {

  const {links}=useContext(LinksContext);
  const {i18n,t}=useTranslation()
    const componentLinks =()=>links.map((link)=>{
        return(            
                        <li key={link.id} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} ><NavLink to={`${link.Link}/${i18n.language}`} end={link.link === "/home"} className={({isActive})=>` rounded-md transition-all duration-300 ${isActive?"text-primary bg-bg  font-bold":"text-secondary"} h-10 flex items-center px-4 `}>{t(link.name)} </NavLink></li>
        )
    });


  return (
    <>
    <div className="h-full ">
          <ul className="flex items-center h-full w-full   relative z-10  p-x  border-primary rounded-2xl overflow-hidden justify-between">
      {componentLinks()}
      
        </ul>
        </div>
    </>
  )
}

export default LinksPagsLarge
