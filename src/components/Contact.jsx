import React from "react";
import "../styles/Contact.css";
import Logo from "../asset/logoo.png";
// import Cancel from "../asset/cancel.png";
import Cancel from "../asset/delete.png";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import Inst from "../asset/instagram.png";
import Face from "../asset/facebook.png";
import Linke from "../asset/linkedin.png";

const Contact = ({language}) => {
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
    var languageInfo = {
      statusInfoLanguage: "en",
    };

    switch (lang) {
      case "en":
        languageInfo.statusInfoLanguage = "Status";
        break;

      case "ka":
        languageInfo.statusInfoLanguage = "სტატუსი";
        break;

      case "ru":
        languageInfo.statusInfoLanguage = "статус";
        break;
    }
    return languageInfo;
  };




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
              <h1 className="title_contact">Contact Us</h1>
            </motion.div>
            <motion.div
              className="social_links"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Inst} alt="Instagram"></img>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Face} alt="Facebook"></img>
              </a>
              <a
                href="https://www.linkedin.com"
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
              This setup ensures that each text block animates down from the top
              sequentially, with a one-second delay between each. The title will
              appear last, after all other elements. This setup ensures that
              each text block animates down from the top sequentially, with a
              one-second delay between each. The title will appear last, after
              all other elements.
            </motion.p>
            <motion.div className="contact_info">
              <motion.p variants={textVariant("left", 0.2)}>
                . Email:<span>robakidzenino89@mail.com</span>
              </motion.p>
              <motion.p variants={textVariant("left", 0.3)}>
                . Phone:<span>577424310</span>
              </motion.p>
              <motion.p variants={textVariant("left", 0.4)}>
                . Address:<span>Mtatsminda, Vedzini #9</span>
              </motion.p>
            </motion.div>
            <motion.p variants={textVariant("left", 0.5)}>
              This setup ensures that each text block animates down from the top
              sequentially, with a one-second delay between each. The title will
              appear last, after all other elements. This setup ensures that
              each text block animates down from the top sequentially, with a
              one-second delay between each. The title will appear last, after
              all other elements.
            </motion.p>
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
