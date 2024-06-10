import React from "react";
import Logo from "../asset/logoo.svg";
import "../styles/About.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { useNavigate } from "react-router-dom";
import Cancel from "../asset/cancel.png";

const About = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    document.querySelector(".title").style.display = "none";
    document.querySelector(".paragraph").style.display = "none";
    document.querySelector(".close_icon").style.display = "none";
    const logo = document.querySelector(".logo_image");
    logo.classList.add("grow-logo");
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
    <div className="about_container">
      {/* <motion.div
        onClick={handleLogoClick}
        className="close_icon"
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src={Cancel} alt="/"></img>
      </motion.div> */}
      <div className="title_and_paragraph">
        <motion.div
          onClick={handleLogoClick}
          className="close_icon"
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={Cancel} alt="/"></img>
        </motion.div>
        <div className="pr_log">
          <div className="title_pr">
            <motion.div
              className="top_side"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="title">About Us</h1>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="paragraph"
            >
              <motion.p variants={textVariant("left", 0.1)}>
                This setup will move the Contact Us element to the center of the
                screen and scale it up when clicked, then navigate to the
                contact page after the animation completes.
              </motion.p>

              <div className="para_span">
                <motion.p className="tit" variants={textVariant("left", 0.2)}>
                  Our mission
                </motion.p>
                <motion.span variants={textVariant("left", 0.3)}>
                  This setup will move the Contact Us element to the center of
                  the screen and scale it up when clicked, then navigate to the
                  contact page after the animation completes.
                </motion.span>
              </div>

              <div className="para_span">
                <motion.p className="tit" variants={textVariant("left", 0.4)}>
                  Our mission
                </motion.p>
                <motion.span variants={textVariant("left", 0.5)}>
                  This setup will move the Contact Us element to the center of
                  the screen and scale it up when clicked, then navigate to the
                  contact page after the animation completes.
                </motion.span>
              </div>

              <div className="para_span">
                <motion.p className="tit" variants={textVariant("left", 0.6)}>
                  Our mission
                </motion.p>
                <motion.span variants={textVariant("left", 0.7)}>
                  . This setup will move the Contact Us element to the center of
                  the to the contact page after the animation
                </motion.span>
                <motion.span variants={textVariant("left", 0.8)}>
                  . This setup will move the Contact Us element to the center of
                  the to the contact page after the animation
                </motion.span>
                <motion.span variants={textVariant("left", 0.9)}>
                  . This setup will move the Contact Us element to the center of
                  the to the contact page after the animation
                </motion.span>
              </div>

              <div className="para_span">
                <motion.p className="tit" variants={textVariant("left", 1.0)}>
                  Our mission
                </motion.p>
                <motion.span variants={textVariant("left", 1.1)}>
                  . This setup will move the Contact Us element to the center of
                  the to the contact page after the animation
                </motion.span>
                <motion.span variants={textVariant("left", 1.2)}>
                  . This setup will move the Contact Us element to the center of
                  the to the contact page after the animation
                </motion.span>
                <motion.span variants={textVariant("left", 1.3)}>
                  . This setup will move the Contact Us element to the center of
                  the to the contact page after the animation
                </motion.span>
              </div>

              <div className="para_span">
                <motion.p className="tit" variants={textVariant("left", 1.4)}>
                  Our mission
                </motion.p>
                <motion.span variants={textVariant("left", 1.5)}>
                  This setup will move the Contact Us element to the center of
                  the screen and scale it up when clicked, then navigate to the
                  contact page after the animation completes.
                </motion.span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="logo_image"
            // onClick={handleLogoClick}
          >
            <img src={Logo} alt=""></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
