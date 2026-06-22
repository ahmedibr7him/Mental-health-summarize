import LinksPagsLarge from "./LinksPagsLarge";
import { assesst } from "../../../public/assesst";
import { useContext } from "react";
import { LinksContext } from "../../Context/LinksContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LinksPagsSmall from "./LinksPagsSmall";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../dark/Theme";
import MinLogin from "./MinLogin";
const Navbar = () => {

  const {OpenLinks, setOpenLinks,openLogin,setOpenLogin ,setLoading,loading} =useContext(LinksContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();
  const {i18n} =useTranslation();

  const toggleLang = () => {
  const newLang = i18n.language === "en" ? "ar" : "en";

  // تغيير اللغة
  i18n.changeLanguage(newLang);

  // تغيير الرابط
  const newPath = location.pathname.replace(/\/(en|ar)$/, `/${newLang}`);
  navigate(newPath);
};
   
  return (
    <>
    {openLogin && <div className="fixed  w-full min-h-full z-40" onClick={()=>setOpenLogin(false)}></div>}
     {OpenLinks&&<LinksPagsSmall/>}

    <div className="w-[95%] left-1/2 -translate-x-1/2 bg-white shadow-sm rounded-xl h-15  flex justify-between items-center lg:px-10 fixed top-2  z-45 sm:px-2 ">
        {/* logo */}
            <img src={assesst.logo} width={50} height={50}  alt="logo" className="object-contain" />
        {/* link pages */}
        <div className="w-110 h-full lg:block xs:hidden">
            <LinksPagsLarge/>

        </div >
        {/* signIn Ligin lang cart favouraite */}
        <div className="flex  sm:justify-end md:gap-10 sm:gap-4  items-center sm:w-60  justify-end  ">
           <button onClick={toggleLang} className="relative inline-flex shadow items-center w-25 h-10 justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white cursor-pointer group sm:w-20 sm:h-8 md:w-27 md:h-10">
    <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span className="relative w-full font-bold text-center text-primary transition-colors duration-300 ease-in-out group-hover:text-white">{i18n.language ==="ar"?"English":"العربيه"} </span>
           </button>
           {/* cart */}

           <button aria-label="moon" type="button"  onClick={()=>{window.scrollTo({top:0,behavior:"smooth"});toggleTheme()}} className="inline-flex  h-full w-fit font-bold text-secondary cursor-pointer rounded group sm:h-10 items-center justify-center md:h-10 ">
   {theme==="dark"? <i className="fa-solid fa-sun  text-secondary hover:-rotate-30 cursor-pointer lg:text-[25px] fa-solid fa-heart sm:text-[20px] md:text-xl hover:scale-125 transition-all duration-300"></i>:<i class="  fa-solid fa-moon text-secondary hover:-rotate-30 cursor-pointer lg:text-[25px] fa-solid fa-heart sm:text-[20px] md:text-xl hover:scale-125 transition-all duration-300"></i>}
    </button>


       {/* heart */}
       <button aria-label="user"  type="button" onClick={()=>setOpenLogin(prev=>!prev)}  className="bg-bg w-10 h-10 rounded-full shadow-sm cursor-pointer relative "><i className="text-secondary fa-regular text-[20px] fa-user sm:text-[17px] md:text-xl cursor-pointer "></i> {openLogin&&<MinLogin/>}</button>
       <button aria-label="staggered" type="button"  onClick={()=>setOpenLinks(prev => !prev)} className="xs:block lg:hidden"><i className="text-primary fa-solid fa-bars-staggered sm:text-[17px] md:text-xl"></i></button>
        </div>
    </div>
    </>
  )
}

export default Navbar
