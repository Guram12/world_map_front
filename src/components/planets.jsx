import "../styles/planets.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../asset/logoo.png";
import { motion, AnimatePresence } from "framer-motion";
import Starfield from "./Starfield";
import Gflag from "../asset/georgiaflag.png";
// import Lang from "../asset/lang.png";
import Lang1 from "../asset/lang1.png";
import Russ from "../asset/russ.png";
import EnglishFlag from "../asset/english.png";

export default function Planets({ handle_set_language, language }) {
  const navigate = useNavigate();
  const [showLanguageCont, setShowLanguageCont] = useState(false);
  const [languageName, setLanguageName] = useState("English");

  const handleLangImgClick = () => {
    setShowLanguageCont(!showLanguageCont);
  };
  const changeLanguage = (value) => {
    handle_set_language(value);
    setShowLanguageCont(false);
  };

  const handle_set_language_name = (event) => {
    if (language) {
      const names = { en: "English", ru: "Russian", ge: "Georgia" };
      return names[event];
    } else {
      return null;
    }
  };


  const handleEarthClick = () => {
    document.querySelector(".moon").style.display = "none";
    document.querySelector(".links").style.display = "none";
    document.querySelector(".link").style.display = "none";
    document.querySelector(".none").style.display = "none";
    document.querySelector(".select_language").style.display = "none";
    document.querySelector(".planet_img").style.display = "none";
    const earth = document.querySelector(".earth");
    earth.classList.add("grow-earth");
    setTimeout(() => {
      navigate("/map");
    }, 1000);
  };

  const handleContactClick = () => {
    document.querySelector(".moon").style.display = "none";
    document.querySelector(".links").style.display = "none";
    document.querySelector(".earth").style.display = "none";
    document.querySelector(".textt").style.display = "none";
    document.querySelector(".txt").style.display = "none";
    document.querySelector(".select_language").style.display = "none";
    const contact = document.querySelector(".link_contact");
    contact.classList.add("grow-contact");
    setTimeout(() => {
      navigate("/contact");
    }, 1000);
  };
  const handleAboutClick = () => {
    document.querySelector(".moon").style.display = "none";
    document.querySelector(".link_contact").style.display = "none";
    document.querySelector(".earth").style.display = "none";
    document.querySelector(".textt").style.display = "none";
    document.querySelector(".txt").style.display = "none";
    document.querySelector(".select_language").style.display = "none";

    document.querySelector(".logo_about").style.display = "none";
    const about = document.querySelector(".link_about");
    about.classList.add("grow-about");
    setTimeout(() => {
      navigate("/about");
    }, 1000);
  };
  const translateAboutText = (lang) => {
    const translations = {
      en: {
        aboutUs: "About Us",
        contact: "Contact Us",
      },
      ge: {
        aboutUs: "ჩვენს შესახებ",
        contact: "კონტაქტი",
      },
      ru: {
        aboutUs: "О нас",
        contact: "Контакт",
      },
    };

    return translations[lang] || translations.en;
  };

  const translatedText = translateAboutText(language);

  return (
    <div className="main_planets_container">
      <div className="select_language">
        <div className="lang_input" onClick={handleLangImgClick}>
          <p>{handle_set_language_name(language)}</p>
          <img className="lang_img" src={Lang1} alt="" />
        </div>
        <AnimatePresence>
          {showLanguageCont && (
            <motion.div
              className="language_cont"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                value="ge"
                className="Georgia flex"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => changeLanguage("ge")}
              >
                <p>Georgia</p>
                <img className="flag" src={Gflag} alt="" />
              </motion.div>
              <motion.div
                value="en"
                className="English flex"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => changeLanguage("en")}
              >
                <p>English</p>
                <img className="flag" src={EnglishFlag} alt="" />
              </motion.div>
              <motion.div
                value="ru"
                className="Russian flex"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => changeLanguage("ru")}
              >
                <p>Russian</p>
                <img className="flag" src={Russ} alt="" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Starfield />
      <div className="same_class">
        <motion.div
          className="column"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          exit={{ opacity: 0, x: "-100%", transition: { duration: 2 } }}
        >
          <div className="planet_img " onClick={handleContactClick}>
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="arc-text"
            >
              <defs>
                <path id="arc-path" d="M 10, 110 A 100, 100 0 0, 1 190, 110" />
              </defs>
              <text className="textt">
                <textPath
                  href="#arc-path"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {translatedText.aboutUs}
                </textPath>
              </text>
            </svg>
          </div>
          <div className="links link_about" onClick={handleAboutClick}>
            <img className="logo_about" src={Logo} alt="logo" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 2 } }}
          className="moon_earth_container"
        >
          <div className="earth_bck_styles">
            <div className="earth" onClick={handleEarthClick}></div>
          </div>
          <div className="moon_bck_styles">
            <div className="moon"></div>
          </div>
        </motion.div>
        <motion.div
          className="column"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          exit={{ opacity: 0, x: "100%", transition: { duration: 2 } }}
        >
          <div className="planet_img none ">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="arc-text"
            >
              <defs>
                <path id="arc-path" d="M 10, 110 A 100, 100 0 0, 1 190, 110" />
              </defs>
              <text className="textt txt">
                <textPath
                  href="#arc-path"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {translatedText.contact}
                </textPath>
              </text>
            </svg>
          </div>
          <div
            className="link link_contact hover"
            onClick={handleContactClick}
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
