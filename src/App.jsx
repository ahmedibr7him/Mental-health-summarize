import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import supabase from "./supabase/supabase.jsx";
import { setUser } from "./Redux/Auth/AuthSLice";
import { LinksContext } from "../src/Context/LinksContext.jsx";

import LocaleLayout from "./I18n/LocaleLayOut/LocaleLayOut";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./component/sign In Login/Login";
import Summarize from "./pages/Summarize.jsx";
import SplashScreen from "./component/SplashScreen.jsx";

const App = () => {
    const { loading, setLoading } = useContext(LinksContext);
    const { i18n } = useTranslation();
    const dispatch = useDispatch();

    // 1. منطق التحقق من الجلسة (Session) عند فتح التطبيق
    useEffect(() => {
        // التحقق عند التحميل الأول
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                dispatch(setUser(session.user));
            }
        });

        // الاستماع لأي تغيير في حالة الدخول (Login/Logout)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            dispatch(setUser(session?.user || null));
        });

        return () => subscription.unsubscribe();
    }, [dispatch]);

    // 2. منطق الخطوط (Fonts)
    useEffect(() => {
        document.body.style.fontFamily =
            i18n.language === "ar"
                ? "var(--font-ar)"
                : "var(--font-en)";
    }, [i18n.language]);

    return (
        <>
            {loading && <SplashScreen onFinish={() => setLoading(false)} />}
            <div className="overflow-x-hidden bg-bg">
                <Routes>
                    <Route path="/" element={<Navigate to="/home/en" replace />} />
                    <Route path="/*" element={<LocaleLayout />}>
                        {/* استخدام شرط التحقق من الـ loading مع الـ Routing */}
                        {!loading && <Route path="home/:lang" element={<Home />} />}
                        <Route path="about/:lang" element={<About />} />
                        <Route path="summarize/:lang" element={<Summarize />} />
                        <Route path="contact/:lang" element={<Contact />} />
                        <Route path="singup/:lang" element={<SignUp />} />
                        <Route path="login/:lang" element={<Login />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
};

export default App;