import Title from "../Title";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { motion } from "motion/react"
import { useTranslation } from "react-i18next";
const ContactItem = () => {
  const [phone, setPhone] = useState("");
  const {t} =useTranslation();

  const dataHelp = [
    { id: 1, title: "HotLine", count: "01550165755", icon: "fa-headset" },
    { id: 2, title: "SMS/WhatsApp", count: "01550165755", icon: "fa-comment-dots" },
    { id: 3, title: "Email", count: "ahmedibrahim5112004@gmail.com", icon: "fa-envelope" },
  ];

  const connect = [
    { id: 1, path: "", icone: "fa-facebook" },
    { id: 2, path: "", icone: "fa-linkedin" },
    { id: 3, path: "", icone: "fa-instagram" },
    { id: 4, path: "", icone: "fa-whatsapp" },
  ];

  return (
    <div className="flex flex-col gap-12  py-20 w-[90%] m-auto">
      
      {/* Title */}
      <motion.div
              initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false }}
      className="flex justify-center items-center py-5 bg-white rounded-2xl shadow-md">
        <Title title={"Contact Us"} />
      </motion.div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-white shadow-md rounded-2xl p-5">

        {/* Left Side - Form */}
        <motion.div
                initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false }}
         className="flex flex-col gap-5 w-full">

          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-primary font-bold">
              {t("Send A Message")}
            </h3>
            <p className="text-sm text-secondary">
              {t("We’d love to hear from you. Fill out the form and we’ll get back to you as soon as possible.")}
            </p>
          </div>

          <form className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">

            {/* First Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="text-primary font-bold">
                {t("First Name *")}
              </label>
              <input
                type="text"
                required
                id="firstName"
                placeholder={t("First Name")}
                className="bg-bg px-3 py-2 rounded-full shadow-md focus:shadow-primary outline-none text-secondary transition-all"
              />
            </div>

            {/* Second Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="secondName" className="text-primary font-bold">
                {t("Second Name *")}
              </label>
              <input
                type="text"
                required
                id="secondName"
                placeholder={t("Second Name")}
                className="bg-bg px-3 py-2 rounded-full shadow-md focus:shadow-primary outline-none text-secondary transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-primary font-bold">
               {t(" Email *")}
              </label>
              <input
                type="email"
                required
                id="email"
                placeholder={t("Email")}
                className="bg-bg px-3 py-2 rounded-full shadow-md focus:shadow-primary outline-none text-secondary transition-all"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-primary font-bold">
                {t("Phone Number *")}
              </label>
              <PhoneInput
               className="
  bg-bg px-3 text-secondary py-2 rounded-full shadow-md transition-all duration-200
  focus:shadow-primary
  focus-within:ring-2
  focus-within:ring-primary
  [&_.PhoneInputInput]:bg-transparent
  [&_.PhoneInputInput]:outline-none
  [&_.PhoneInputInput]:w-full
"
                value={phone}
                onChange={setPhone}
                international
                defaultCountry="EG"
                countryCallingCodeEditable={false}
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1 lg:col-span-2">
              <label htmlFor="message" className="text-primary font-bold">
                {t("Message")}
              </label>
              <textarea
                id="message"
                placeholder={t("Enter your message")}
                className="bg-bg px-3 py-2 rounded-lg shadow-md focus:shadow-primary outline-none text-secondary transition-all"
                rows="4"
              />
            </div>

            {/* Button */}
            <div className="w-full flex justify-end items-center lg:col-span-2">
              <button
                type="submit"
                className="w-full lg:w-auto rounded-2xl px-5 py-2 bg-primary text-bg shadow-md hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all duration-300"
              >
                {t("Send Message")}
                <i className="fa-regular fa-paper-plane ml-2"></i>
              </button>
            </div>

          </form>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
                initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false }}
        className="bg-primary py-10 rounded-3xl shadow-md flex items-center">
          <div className="w-[90%] m-auto flex flex-col gap-5">

            <p className="font-bold text-xl text-white">
              {t("Hi! We are always here to help you.")}
            </p>

            {dataHelp.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 items-center bg-white/20 rounded-2xl px-5 py-3"
              >
                <i className={`fa-solid ${item.icon} text-2xl text-white`}></i>
                <div>
                  <h3 className="font-bold text-white">
                    {t(item.title)}
                  </h3>
                  <p className="text-white md:text-[16px] xs:text-[10px]">
                    {item.count}
                  </p>
                </div>
              </div>
            ))}

            <div className="h-px bg-white/30 rounded-full"></div>

            <div className="flex flex-col gap-3">
              <p className="text-white font-bold">
                {t("Connect With Us :")}
              </p>
              <ul className="flex items-center gap-5">
                {connect.map((item) => (
                  <li key={item.id}>
                    <i
                      className={`fa-brands ${item.icone} text-2xl text-white cursor-pointer hover:scale-110 transition`}
                    ></i>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactItem;
