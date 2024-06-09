import React from "react";
import "../styles/Contact.css";
import Logo from "../asset/logoo.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import Inst from "../asset/instagram.png";
import Face from "../asset/facebook.png";
import Linke from "../asset/linkedin.png";

const Contact = () => {
  const navigate = useNavigate();

  const handleLogoClickContact = () => {
    document.querySelector(".title").style.display = "none";
    document.querySelector(".paragraph_contact").style.display = "none";
    document.querySelector(".social_links").style.display = "none";
    const logo = document.querySelector(".logo_image_contact");
    logo.classList.add("grow-logo-cont");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="contact_container">
      <motion.h1
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="title"
      >
        Contact Us
      </motion.h1>
      <div className="title_and_paragraph_contact">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="logo_image_contact"
          onClick={handleLogoClickContact}
        >
          <img className="logo_img_cont" src={Logo} alt=""></img>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="paragraph_contact"
        >
          <p>
            This setup ensures that each text block animates down from the top
            sequentially, with a one-second delay between each. The title will
            appear last, after all other elements. This setup ensures that each
            text block animates down from the top sequentially, with a
            one-second delay between each. The title will appear last, after all
            other elements.
          </p>
          <div className="contact_info">
            <p>
              . Email:<span>robakidzenino89@mail.com</span>
            </p>
            <p>
              . Phone:<span>577424310</span>
            </p>
            <p>
              . Address:<span>Mtatsminda, Vedzini #9</span>
            </p>
          </div>
          <p>
            This setup ensures that each text block animates down from the top
            sequentially, with a one-second delay between each. The title will
            appear last, after all other elements. This setup ensures that each
            text block animates down from the top sequentially, with a
            one-second delay between each. The title will appear last, after all
            other elements.
          </p>
          {/* <div className="social_links">
            <a href="">
              <img src={Inst} alt=""></img>
            </a>
            <a href="">
              <img src={Face} alt=""></img>
            </a>
            <a href="">
              <img src={Linke} alt=""></img>
            </a>
          </div> */}
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="social_links"
      >
        <a href="">
          <img src={Inst} alt=""></img>
        </a>
        <a href="">
          <img src={Face} alt=""></img>
        </a>
        <a href="">
          <img src={Linke} alt=""></img>
        </a>
      </motion.div>
    </div>
  );
};
export default Contact;
