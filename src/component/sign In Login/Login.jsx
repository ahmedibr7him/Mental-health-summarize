import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetStatus } from "../../Redux/Auth/AuthSLice"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState({ password: false });
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  
  // سحب البيانات من الـ Auth Slice
  // ملاحظة: أصبحنا نعتمد على user بدلاً من token
  const { loading, error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    // إذا وجد مستخدم في الـ state يعني أن تسجيل الدخول تم بنجاح
    if (user) {
      navigate(`/home/${i18n.language}`);
      dispatch(resetStatus());
    }
  }, [user, navigate, dispatch, i18n.language]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[95%] lg:w-[60%] min-h-[500px] m-auto my-20 rounded-2xl shadow-xl bg-white flex flex-col lg:flex-row relative overflow-hidden"
    >
      <div className="w-full lg:w-[65%] order-2 lg:order-1 p-8 flex flex-col justify-center items-center gap-5">
        <h4 className="text-3xl lg:text-4xl font-bold text-primary">{t("Login")}</h4>
        
        {/* رسالة الخطأ */}
        {error && <p className="text-red-500 text-xs bg-red-50 p-2 rounded">{typeof error === 'string' ? error : t("Login Error")}</p>}

        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-5">
          <div className="relative w-full max-w-[320px]">
            <i className="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-secondary"></i>
            <input 
              type="email" id="email" value={formData.email} onChange={handleChange} required 
              placeholder={t("Enter the Email")}
              className="w-full pl-10 pr-4 py-3 border-none bg-bg shadow-md rounded-lg outline-none focus:ring-2 focus:ring-primary text-secondary"
            />
          </div>

          <div className="relative w-full max-w-[320px]">
            <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-secondary"></i>
            <input 
              type={showPassword.password ? "text" : "password"} id="password" value={formData.password} onChange={handleChange} required 
              placeholder={t("Enter the PassWord")}
              className="w-full pl-10 pr-4 py-3 border-none bg-bg shadow-md rounded-lg outline-none focus:ring-2 focus:ring-primary text-secondary"
            />
            <span onClick={() => setShowPassword(prev => ({ ...prev, password: !prev.password }))} className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer text-secondary">
              {showPassword.password ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
            </span>
          </div>

          <button disabled={loading} type="submit" className="cursor-pointer rounded-2xl px-5 w-full max-w-[200px] font-bold py-3 bg-bg text-primary shadow-md hover:ring-2 hover:ring-primary transition-all duration-300 disabled:opacity-50">
            {loading ? t("Loading...") : t("Sign In")}
          </button>
        </form>
      </div>

      <div className="w-full lg:w-[35%] order-1 lg:order-2 bg-primary p-8 flex flex-col items-center justify-center gap-4 lg:gap-7 text-center text-bg">
        <h3 className="text-2xl lg:text-4xl font-bold">{t("Welcome Back !")}</h3>
        <button onClick={() => navigate(`/singup/${i18n.language}`)} className="cursor-pointer rounded-2xl px-5 w-full max-w-[180px] font-bold py-2 bg-bg text-primary shadow-md transition-all">
          {t("Sign Up")}
        </button>
      </div>
    </motion.section>
  );
};

export default Login;