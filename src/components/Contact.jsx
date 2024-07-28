import React from "react";
import "../styles/Contact.css";
import Logo from "../asset/logoo.png";
// import Cancel from "../asset/cancel.png";
import Cancel from "../asset/delete.png";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import Inst from "../asset/instagram.png";
import Face from "../asset/facebook.png";
import Linke from "../asset/linkedin.png";
import Youtube from "../asset/youtube.png";

const Contact = ({ language }) => {
  const navigate = useNavigate();

  const handleLogoClickContact = () => {
    document.querySelector(".contacttext_paragraph").style.display = "none";
    document.querySelector(".close_icon_cont").style.display = "none";
    // document.querySelector(".close_icon").style.display = "none";
    const logo = document.querySelector(".logo_image_cont");
    logo.classList.add("grow-logo-cont");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const textVariant = (direction, delay) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  });

  const translateAboutText = (lang) => {
    const translations = {
      en: {
        contact: "Contact Us",
        txt1: "- Your way to global success.",
        txt2: "Become our partner by contacting us",
        email: ". e-mail:",
        phone: ". Phone: ",
        address: ". Address: ",
        tbilisi: "Tbilisi, Georgia",
      },
      ge: {
        contact: "კონტაქტი",
        txt1: "- თქვენი გზა გლობალური წარმატებისკენ. ",
        txt2: "გახდით ჩვენი პარტნიორი, დაგვიკავშირდით",
        email: ". ელექტრონული ფოსტა: ",
        phone: ". ტელეფონი: ",
        address: ". მისამართი: ",
        tbilisi: " თბილისი, საქართველო",
      },
      ru: {
        contact: "Контакт",
        txt1: "- Ваш путь к глобальному успеху. ",
        txt2: "Станьте нашим партнером, связавшись с нами",
        email: ". электронная почта:",
        phone: ". Телефон: ",
        address: ". Адрес:",
        tbilisi: "Тбилиси, Грузия",
      },
    };

    return translations[lang] || translations.en;
  };

  const translatedText = translateAboutText(language);
  return (
    <div className="contact_container">
      <div className="flex_container_contact">
        <Helmet>
          <title>Contact Us - 1inone</title>
          <meta name="description" content="Get in touch with 1inone." />
        </Helmet>
        <div className="contacttext_paragraph">
          <div className="contact_social_cont">
            <motion.div
              className="title_contact_cont"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="title_contact"> {translatedText.contact}</h1>
            </motion.div>
            <motion.div
              className="social_links"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.instagram.com/1inone2024?fbclid=IwZXh0bgNhZW0CMTAAAR3baXbz2T4gYOfGlOvdNZgIOzqrDihrWkadcHiNOmKEqnYpUOsv0C4cnZ4_aem_V0AFv3B1buKaVlPeCL50cA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Inst} alt="Instagram"></img>
              </a>
              <a
                href="https://www.youtube.com/@1_inone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Youtube} alt="Instagram"></img>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561087984261"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Face} alt="Facebook"></img>
              </a>
              <a
                href="https://www.linkedin.com/company/1inone/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linke} alt="LinkedIn"></img>
              </a>
            </motion.div>
          </div>
          <motion.div
            className="text_contact"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.p variants={textVariant("left", 0.1)}>
              <a
                className="oneinone"
                href="https://www.1inone.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                1inone.com
              </a>
              {translatedText.txt1}
            </motion.p>
            <motion.p variants={textVariant("left", 0.1)}>
              {translatedText.txt2}
            </motion.p>
            <motion.div className="contact_info">
              <motion.p variants={textVariant("left", 0.2)}>
                {translatedText.email}
                <span>oneinone900@gmail.com</span>
              </motion.p>
              <motion.p variants={textVariant("left", 0.3)}>
                {translatedText.phone}
                <span> +995 591 01 04 41</span>
              </motion.p>
              <motion.p variants={textVariant("left", 0.4)}>
                {translatedText.address}
                <span>{translatedText.tbilisi}</span>
              </motion.p>
            </motion.div>
            {/* <motion.p variants={textVariant("left", 0.5)}>
              This setup ensures that each text block animates down from the top
              sequentially, with a one-second delay between each. The title will
              appear last, after all other elements. This setup ensures that
              each text block animates down from the top sequentially, with a
              one-second delay between each. The title will appear last, after
              all other elements.
            </motion.p> */}
          </motion.div>
        </div>
        <motion.div
          className="closebutt_logo_cont"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="close_icon_cont">
            <img
              onClick={handleLogoClickContact}
              src={Cancel}
              alt="delete"
            ></img>
          </motion.div>
          <motion.div
            // variants={fadeIn("left", 0.1)}
            // initial="hidden"
            // whileInView="show"
            // viewport={{ once: false, amount: 0.3 }}
            className="logo_image_cont"
          >
            <img src={Logo} alt=""></img>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
