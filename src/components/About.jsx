import React from "react";
import Logo from "../asset/logoo.svg";
import "../styles/About.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { useNavigate } from "react-router-dom";
import Cancel from "../asset/cancel.png";
// import Cancel from "../asset/delete.png";
// import Bck_video from "../asset/bck_video.mp4";

const About = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    document.querySelector(".title").style.display = "none";
    document.querySelector(".paragraph").style.display = "none";
    // document.querySelector(".background_video").style.display = "none";
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
      {/* <video autoPlay loop muted className="background_video">
        <source src={Bck_video} type="video/mp4" />
      </video> */}
      <div className="flex_container">
        <div className="abouttext_paragraph">
          <motion.div
            className="titl_cont"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="title">About Us</h1>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="paragraph "
          >
            <motion.p variants={textVariant("left", 0.1)}>
              This setup will move the Contact Us element to the center of the
              screen and scale it up when clicked, then navigate to the contact
              page after the animation completes.
            </motion.p>

            <div className="para_span">
              <motion.p className="tit" variants={textVariant("left", 0.2)}>
                Our mission
              </motion.p>
              <motion.span variants={textVariant("left", 0.3)}>
                This setup will move the Contact Us element to the center of the
                screen and scale it up when clicked, then navigate to the
                contact page after the animation completes.
              </motion.span>
            </div>

            <div className="para_span">
              <motion.p className="tit" variants={textVariant("left", 0.4)}>
                Our mission
              </motion.p>
              <motion.span variants={textVariant("left", 0.5)}>
                This setup will move the Contact Us element to the center of the
                screen and scale it up when clicked, then navigate to the
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
                This setup will move the Contact Us element to the center of the
                screen and scale it up when clicked, then navigate to the
                contact page after the animation completes.
              </motion.span>
            </div>
          </motion.div>
        </div>
        <div className="closebutt_logo">
          <motion.div
            onClick={handleLogoClick}
            className="close_icon"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Cancel} alt="/"></img>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="logo_image"
          >
            <img src={Logo} alt=""></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
