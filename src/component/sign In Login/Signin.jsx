import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetStatus } from "../../Redux/Auth/AuthSLice"; 

const Signin = () => {
  const [showPassword, setShowPassword] = useState({ password: false });
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  
  // سحب البيانات من الـ Auth Slice
  const { loading, error, success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      alert(t("Registration Successful!"));
      dispatch(resetStatus());
      navigate(`/home/${i18n.language}`);
    }
  }, [success, navigate, dispatch, i18n.language, t]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // إرسال البيانات الموحدة لـ Supabase
    dispatch(registerUser({
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName // نمرر الاسم ليتم حفظه في metadata
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-bg p-4">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1000px] lg:h-[500px] my-20 rounded-3xl shadow-2xl bg-white flex flex-col lg:flex-row overflow-hidden"
      >
        
        {/* الجزء الخاص بالترحيب */}
        <div className="w-full lg:w-[35%] bg-primary p-10 flex flex-col items-center justify-center gap-6 text-center text-bg order-2 lg:order-1">
          <h3 className="text-3xl lg:text-4xl font-bold">{t("Welcome Back !")}</h3>
          <p className="font-medium text-sm lg:text-base opacity-90">
            {t("To keep connected with us please Login with your personal info")}
          </p>
          <button 
            onClick={() => navigate(`/login/${i18n.language}`)} 
            className="cursor-pointer rounded-full px-8 py-2 font-bold bg-bg text-primary shadow-lg hover:scale-105 transition-all"
          >
            {t("Sign In")}
          </button>
        </div>

        {/* الجزء الخاص بالفورم */}
        <div className="w-full lg:w-[65%] p-8 lg:p-12 flex flex-col justify-center items-center gap-6 order-1 lg:order-2">
          <h4 className="text-3xl lg:text-4xl font-bold text-primary">{t("Create Account")}</h4>
          
          {error && <p className="text-red-500 text-sm bg-red-50 p-2 rounded w-full text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-4">
            {/* Full Name */}
            <div className="relative w-full max-w-[350px]">
              <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-secondary"></i>
              <input 
                type="text" id="fullName" value={formData.fullName} onChange={handleChange} required 
                placeholder={t("Full Name")} 
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary bg-bg shadow-inner text-secondary"
              />
            </div>

            {/* Email */}
            <div className="relative w-full max-w-[350px]">
              <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-secondary"></i>
              <input 
                type="email" id="email" value={formData.email} onChange={handleChange} required 
                placeholder={t("Enter the Email")} 
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary bg-bg shadow-inner text-secondary"
              />
            </div>

            {/* Password */}
            <div className="relative w-full max-w-[350px]">
              <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-secondary"></i>
              <input 
                type={showPassword.password ? "text" : "password"} id="password" value={formData.password} onChange={handleChange} required 
                placeholder={t("Enter the PassWord")} 
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary bg-bg shadow-inner text-secondary"
              />
              <span onClick={() => setShowPassword(prev => ({ ...prev, password: !prev.password }))} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-secondary">
                {showPassword.password ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
              </span>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="mt-4 cursor-pointer rounded-full px-10 py-3 font-bold bg-primary text-bg shadow-xl hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? t("Loading...") : t("Sign Up")}
            </button>
          </form>
        </div>

      </motion.section>
    </div>
  );
};

export default Signin;