import React from "react";
import Logo from "../asset/logoo.png";
import "../styles/About.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { fadeIn } from "../Variants";
import { useNavigate } from "react-router-dom";
// import Cancel from "../asset/cancel.png";
import Cancel from "../asset/delete.png";

const About = ({ language }) => {
  const navigate = useNavigate();
  // const [isIOS, setIsIOS] = useState(false);

  // useEffect(() => {
  //   const isIOSDevice =
  //     /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  //   setIsIOS(isIOSDevice);
  // }, []);

  const handleCloseButtClick = () => {
    console.log("click");
    document.querySelector(".title").style.display = "none";
    document.querySelector(".paragraph").style.display = "none";
    document.querySelector(".close_icon").style.display = "none";
    const logo = document.querySelector(".logo_image");
    logo.classList.add("grow-logo");
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
    <div className="about_container">
      {/* <BackVideo src={BckVideo} /> */}
      {/* <video
        autoPlay
        loop
        muted
        controls={false}
        playsInline
        className="background-video"
      >
        <source src={BckVideo} type="video/mp4" />
      </video> */}
      {/* <Starfield /> */}
      <Helmet>
        <title>About Us - 1inone</title>
        <meta
          name="description"
          content="Learn more about 1inone and our mission."
        />
      </Helmet>
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
              <a
                className="oneinone"
                href="https://www.1inone.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                1inone.com
              </a>
              - is a modern, innovative advertising platform that offers a
              unique opportunity to make your brand a global leader, effectively
              develop your business.
            </motion.p>
            <div className="para_span">
              <motion.p className="tit fs" variants={textVariant("left", 0.2)}>
                OUR MISSION:
              </motion.p>
              <motion.p
                className="text_span"
                variants={textVariant("left", 0.3)}
              >
                We help companies achieve their goals faster and more
                efficiently, ensure global availability of their products and
                services, and present themselves to a wider audience. By
                cooperating with us, you will be able to attract customers and
                partners from any part of the world, expand the scope of your
                activities.
              </motion.p>
            </div>
            <div className="para_span">
              <motion.p className="tit fs" variants={textVariant("left", 0.2)}>
                How we work:
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">Selecting a country:</span>
                each company can select the country it wants from the world map.
                This capability gives them a strategic advantage in local
                markets.
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">Logo Placement: </span>
                We ensure that the company logo is overlaid on the map of the
                selected country. This increases brand visibility and helps
                increase awareness.
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">
                  Layout of branches and locations:
                </span>
                Our team works to ensure that the branches and locations of
                companies are accurately and completely displayed on the map.
                This makes it easier for users to find their preferred branch.
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">Providing information: </span>
                any visitor to the site can easily find different brands, and by
                clicking on the logo, get complete information about these
                companies and the addresses of their branches in the marked
                country.
              </motion.p>
              <motion.p
                className="text_span"
                variants={textVariant("left", 0.3)}
              >
                Our goal is to create a global network that will allow
                interested brands to establish themselves in the international
                market, increase global awareness, provide their products and
                services to a wide audience from any part of the world.
              </motion.p>
              <motion.p className="tit fs" variants={textVariant("left", 0.2)}>
                AUR VALUES:
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">Global vision:</span>
                Our platform enables companies to establish their place in the
                global market and discover a new way to achieve their goals.
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">Innovation: </span>
                We offer innovative, modern, unique advertising means to ensure
                effective development of your brand.
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">Reliability: </span>
                Our services are based on reliable and verified data to ensure
                that your branches and locations are accurately reflected on the
                platform.
              </motion.p>
              <motion.p variants={textVariant("left", 0.5)}>
                <span className="txt_about_span">Communication: </span>
                We create a bridge between the company and customers partners.
                Provide easy and effective communication.
              </motion.p>
              <motion.p variants={textVariant("left", 0.1)}>
                <a
                  className="oneinone"
                  href="https://www.1inone.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1inone.com
                </a>
                - your way to global success
              </motion.p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="closebutt_logo"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="close_icon"
            // initial={{ y: -100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ duration: 0.5 }}
          >
            <img onClick={handleCloseButtClick} src={Cancel} alt="delete"></img>
          </motion.div>
          <motion.div
            // variants={fadeIn("left", 0.3)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className="logo_image"
          >
            <img className="about_logo_styles" src={Logo} alt=""></img>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
