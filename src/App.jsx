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
import LanguageJson from "./components/language.json";

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
      document.body.style.overflow = "hidden"; // Prevent scrolling when showing the rotate message
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling when the site is displayed
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

  useEffect(() => {
    console.log("selected country in app", selectedCountry);
  }, [selectedCountry]);

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/map"
            element={
              <Map
                language={language}
                countryData={countryData}
                loading={loading}
                handle_Set_Selected_Country={handle_Set_Selected_Country}
                selectedCountry={selectedCountry}
              />
            }
          />
          <Route
            path="/country-map/:country"
            element={
              <CountryMap
                selectedCountry={selectedCountry}
                countryData={countryData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
