import { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryMap from "./components/CountryMap";
import axios from "axios";
import Planets from "./components/planets";
import Rotate from "./asset/rotate.png";
import { Helmet } from "react-helmet-async";
// import LanguageJson from "./components/language.json";

function App() {
  const [language, setLanguage] = useState("en");
  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const handle_set_language = (lang) => {
    setLanguage(lang);
  };

  const handle_Set_Selected_Country = (country) => {
    setSelectedCountry(country);
  };

  const BaseURLs = {
    aws_server: "https://api.1inone.com/",
    local: "http://localhost:8000/",
  };

  const isMobile = () => {
    return /Mobi|Android|iPad|iPhone|Tablet|iPod/i.test(navigator.userAgent);
  };

  const updateOrientation = () => {
    const landscape = window.innerWidth > window.innerHeight;
    setIsLandscape(landscape);

    if (!landscape) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    setIsMobileDevice(isMobile());
    updateOrientation();

    window.addEventListener("resize", updateOrientation);
    window.addEventListener("orientationchange", updateOrientation);

    return () => {
      window.removeEventListener("resize", updateOrientation);
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, []);

  useEffect(() => {
    const fetchCountryImages = async () => {
      try {
        const response = await axios.get(
          `${BaseURLs.aws_server}api/countries/`
        );
        setCountryData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country images:", error);
      }
    };
    fetchCountryImages();
  }, []);

  if (isMobileDevice && !isLandscape) {
    return (
      <div className="rotate_cont">
        <img className="rotate_image" src={Rotate} alt="Rotate your device" />
        <h1>Please rotate your device...</h1>
      </div>
    );
  }

  if (!isLandscape) {
    return (
      <div className="rotate_cont">
        <img className="rotate_image" src={Rotate} alt="Rotate your device" />
        <h1>Please rotate your device...</h1>
      </div>
    );
  }

  return (
    <div id="main_app_container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Planets
                handle_set_language={handle_set_language}
                language={language}
              />
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Us - 1inone</title>
                  <meta
                    name="description"
                    content="Learn more about 1inone and our mission."
                  />
                </Helmet>
                <About language={language} />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact Us - 1inone</title>
                  <meta
                    name="description"
                    content="Get in touch with 1inone."
                  />
                </Helmet>
                <Contact language={language} />
              </>
            }
          />
          <Route
            path="/map"
            element={
              <>
                <Helmet>
                  <title>Map - 1inone</title>
                  <meta
                    name="description"
                    content="Explore the map to see our exclusive advertising partners."
                  />
                </Helmet>
                <Map
                  language={language}
                  countryData={countryData}
                  loading={loading}
                  handle_Set_Selected_Country={handle_Set_Selected_Country}
                  selectedCountry={selectedCountry}
                />
              </>
            }
          />
          <Route
            path="/country-map/:country"
            element={
              <>
                <Helmet>
                  <title>Country Map - 1inone</title>
                  <meta
                    name="description"
                    content={`Explore our advertising partners in ${selectedCountry}`}
                  />
                </Helmet>
                <CountryMap
                  selectedCountry={selectedCountry}
                  countryData={countryData}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
