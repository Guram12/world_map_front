import React from "react";
import Logo from "../asset/logoo.svg";
import "../styles/About.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    document.querySelector(".title").style.display = "none";
    document.querySelector(".paragraph").style.display = "none";
    const logo = document.querySelector(".logo_image");
    logo.classList.add("grow-logo");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="about_container">
      <motion.h1
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="title"
      >
        About Us
      </motion.h1>
      <div className="title_and_paragraph">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="paragraph"
        >
          <p>
            This setup will move the Contact Us element to the center of the
            screen and scale it up when clicked, then navigate to the contact
            page after the animation completes.
          </p>
          <div className="para_span">
            <p className="tit">Our mission</p>
            <span>
              This setup will move the Contact Us element to the center of the
              screen and scale it up when clicked, then navigate to the contact
              page after the animation completes.
            </span>
          </div>
          <div className="para_span">
            <p className="tit">Our mission</p>
            <span>
              This setup will move the Contact Us element to the center of the
              screen and scale it up when clicked, then navigate to the contact
              page after the animation completes.
            </span>
          </div>
          <div className="para_span">
            <p className="tit">Our mission</p>
            <span>
              . This setup will move the Contact Us element to the center of the
              to the contact page after the animation
            </span>
            <span>
              . This setup will move the Contact Us element to the center of the
              to the contact page after the animation
            </span>
            <span>
              . This setup will move the Contact Us element to the center of the
              to the contact page after the animation
            </span>
          </div>
          <div className="para_span">
            <p className="tit">Our mission</p>
            <span>
              . This setup will move the Contact Us element to the center of the
              to the contact page after the animation
            </span>
            <span>
              . This setup will move the Contact Us element to the center of the
              to the contact page after the animation
            </span>
            <span>
              . This setup will move the Contact Us element to the center of the
              to the contact page after the animation
            </span>
          </div>
          <div className="para_span">
            <p className="tit">Our mission</p>
            <span>
              This setup will move the Contact Us element to the center of the
              screen and scale it up when clicked, then navigate to the contact
              page after the animation completes.
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="logo_image"
          onClick={handleLogoClick}
        >
          <img src={Logo} alt=""></img>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
