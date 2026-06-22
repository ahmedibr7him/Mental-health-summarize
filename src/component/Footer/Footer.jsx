import { useTranslation } from "react-i18next";
import { assesst } from "../../../public/assets";
import { Link } from "react-router-dom";

export const Footer = () => {
  const connect = [
    { id: 1, path: "https://www.facebook.com/?locale=ar_AR", icon: "fa-facebook" },
    { id: 2, path: "https://www.linkedin.com/in/ahmed-ibrahim-366a072a4/", icon: "fa-linkedin" },
    { id: 3, path: "https://www.instagram.com/a7med_ibrahim900?igsh=MWhvMWIwYXliNmhqZA%3D%3D", icon: "fa-instagram" },
    { id: 4, path: "01550165755", icon: "fa-whatsapp" },
  ];

  const typeProduct = [
    { id: 1, name: "Speech To Text", link: "/speech" },
    { id: 2, name: "Upload File", link: "/upload-file" },
    { id: 3, name: "Upload Text", link: "/upload-text" },
  ];

  const quickLink = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Summarize", link: "/summarize" },
    { id: 3, name: "About", link: "/about" },
    { id: 4, name: "Contact", link: "/contact" },
  ];
  const{t} =useTranslation();

  return (
    <>
      <footer className="w-full bg-bg pt-14 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo + Description */}
          <div className="flex flex-col gap-5">
            <img src={assesst.logo} alt="logo" className="w-12" />
            <p className="text-slate-600 text-sm leading-6">
              {t("Empowering users with smart AI-powered services including speech-to-text and content processing tools.")}
            </p>

            <div className="flex items-center gap-4 mt-2">
              {connect.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Visit ${item.icon} page`}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-primary hover:text-white transition duration-300"
                >
                  <i className={`fa-brands ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">
              {t("Types of Services")}
            </h3>
            <ul className="flex flex-col gap-4">
              {typeProduct.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="text-secondary hover:text-primary transition"
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">
              {t("Quick Links")}
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLink.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="text-secondary hover:text-primary transition"
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">
              {t("Get Started")}
            </h3>

                      <button
                type="submit"
                className="w-60 rounded-2xl px-5 py-2 bg-primary text-bg shadow-md hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all duration-300"
              >
               {t("Summarization")}
                <i className="fa-regular fa-paper-plane ml-2 px-2"></i>
              </button>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-secondary py-4 text-center text-sm text-white">
        © 2025 All rights reserved | Made by MET
      </div>
    </>
  );
};