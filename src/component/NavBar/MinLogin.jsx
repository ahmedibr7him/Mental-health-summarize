import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/AuthSLice"; 

const MinLogin = () => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // سحب حالة المستخدم من الـ Store
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout()); // يقوم بمسح الجلسة من Supabase و Redux
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/home/${i18n.language}`);
  };

  return (
    <section className='w-32 bg-white shadow absolute rounded-[7px] -left-20 -bottom-17.5 overflow-hidden z-50'>
      <ul className="text-secondary flex flex-col w-full">
        
        {!user ? (
          /* في حالة عدم وجود مستخدم: عرض أزرار الدخول */
          <>
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <NavLink 
                to={`/login/${i18n.language}`} 
                className={({ isActive }) => `w-full h-8 transition-all duration-300 ${isActive ? "bg-primary text-bg" : "hover:bg-bg"} flex justify-center items-center`}
              >
                {t("Sign In")}
              </NavLink>
            </li>
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <NavLink 
                to={`/singup/${i18n.language}`} 
                className={({ isActive }) => `w-full h-8 transition-all duration-300 ${isActive ? "bg-primary text-bg" : "hover:bg-bg"} flex justify-center items-center`}
              >
                {t("Sign Up")}
              </NavLink>
            </li>
          </>
        ) : (
          /* في حالة وجود مستخدم: عرض زر الخروج فقط */
          <li>
            <button 
              onClick={handleLogout} 
              className="w-full h-8 transition-all duration-300 hover:bg-red-50 text-red-600 flex justify-center items-center cursor-pointer font-bold"
            >
              {t("LogOut")}
            </button>
          </li>
        )}

      </ul>
    </section>
  );
};

export default MinLogin;