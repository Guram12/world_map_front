import React from "react";
import "../styles/Contact.css";
import Logo from "../asset/logoo.svg";
import Cancel from "../asset/cancel.png";
// import Cancel from "../asset/delete.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import Inst from "../asset/instagram.png";
import Face from "../asset/facebook.png";
import Linke from "../asset/linkedin.png";
// import Bck_video from "../asset/bck_video.mp4";

const Contact = () => {
  const navigate = useNavigate();

  const handleLogoClickContact = () => {
    document.querySelector(".title").style.display = "none";
    document.querySelector(".column_cont").style.display = "none";
    document.querySelector(".social_links").style.display = "none";
    // document.querySelector(".background_video").style.display = "none";
    document.querySelector(".close_icon").style.display = "none";
    const logo = document.querySelector(".logo_image_contact");
    logo.classList.add("grow-logo-cont");
    setTimeout(() => {
      navigate("/");
    }, 1000);
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
  return (
    <div className="contact_container">
      {/* <video autoPlay loop muted className="background_video">
        <source src={Bck_video} type="video/mp4" />
      </video> */}
      <motion.div
        onClick={handleLogoClickContact}
        className="close_icon"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={Cancel} alt="/"></img>
      </motion.div>
      {/* <div className="title_and_paragraph_contact"> */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="paragraph_contact"
      >
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="logo_image_contact"
        >
          <img className="logo_img_cont" src={Logo} alt=""></img>
        </motion.div>
        <div className="column_cont">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="title"
          >
            Contact Us
          </motion.h1>
          <div className="txxt">
            <motion.p variants={textVariant("right", 0.1)}>
              This setup ensures that each text block animates down from the top
              sequentially, with a one-second delay between each. The title will
              appear last, after all other elements. This setup ensures that
              each text block animates down from the top sequentially, with a
              one-second delay between each. The title will appear last, after
              all other elements.
            </motion.p>
            <motion.div className="contact_info">
              <motion.p variants={textVariant("right", 0.2)}>
                . Email:<span>robakidzenino89@mail.com</span>
              </motion.p>
              <motion.p variants={textVariant("right", 0.3)}>
                . Phone:<span>577424310</span>
              </motion.p>
              <motion.p variants={textVariant("right", 0.4)}>
                . Address:<span>Mtatsminda, Vedzini #9</span>
              </motion.p>
            </motion.div>
            <motion.p variants={textVariant("right", 0.5)}>
              This setup ensures that each text block animates down from the top
              sequentially, with a one-second delay between each. The title will
              appear last, after all other elements. This setup ensures that
              each text block animates down from the top sequentially, with a
              one-second delay between each. The title will appear last, after
              all other elements.
            </motion.p>
          </div>
          <div className="social_links">
            <a href="">
              <img src={Inst} alt=""></img>
            </a>
            <a href="">
              <img src={Face} alt=""></img>
            </a>
            <a href="">
              <img src={Linke} alt=""></img>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    // </div>
  );
};
export default Contact;
