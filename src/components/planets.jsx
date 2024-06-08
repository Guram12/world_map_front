import "../styles/planets.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../asset/logoo.svg";
import { motion } from "framer-motion";
import Starfield from "./Starfield"; // Adjust the import path accordingly

export default function Planets() {
  const navigate = useNavigate();

  const handleClick = () => {
    document.querySelector(".moon").style.display = "none";
    document.querySelector(".links").style.display = "none";
    document.querySelector(".link").style.display = "none";
    document.querySelector(".none").style.display = "none";
    document.querySelector(".planet_img").style.display = "none";
    const earth = document.querySelector(".earth");
    earth.classList.add("grow-earth");
    setTimeout(() => {
      navigate("/map");
    }, 2000);
  };

  const onclick = () => {
    setTimeout(() => {
      navigate("/about");
      navigate("/contact");
    }, 100);
  };

  return (
    <div className="main_planets_container">
      <Starfield />
      {/* <div className="logo">
        <img src={Logo} alt=""></img>
      </div> */}
      <div className="same_class">
        <motion.div
          className="column"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          exit={{ opacity: 0, x: "-100%", transition: { duration: 2 } }}
        >
          <div className="planet_img " onClick={onclick}>
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
                  About Us
                </textPath>
              </text>
            </svg>
          </div>
          <div className="links link_about"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 2 } }}
          className="moon_earth_container"
        >
          <div className="earth_bck_styles">
            <div className="earth" onClick={handleClick}>
              {/* <h1 id="clickable"></h1> */}
            </div>
          </div>
          <div className="moon_bck_styles">
            <div className="moon">
              <div className="logo-container">
                <img className="logo" src={Logo} alt=""></img>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="column"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          exit={{ opacity: 0, x: "100%", transition: { duration: 2 } }}
        >
          <div className="planet_img none" onClick={onclick}>
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
                  Contact Us{" "}
                </textPath>
              </text>
            </svg>
          </div>
          <div className="link link_contact"></div>
        </motion.div>
      </div>
    </div>
  );
}
