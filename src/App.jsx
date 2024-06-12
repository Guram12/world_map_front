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

function App() {
  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isLandscape, setIsLandscape] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const handle_Set_Selected_Country = (country) => {
    setSelectedCountry(country);
  };

  const BaseURLs = {
    forvarded: "https://dd53f2660fc932794fd48c40bdffa03a.serveo.net/",
    local: "http://localhost:8000/",
  };

  const isMobile = () => {
    return /Mobi|Android|iPad|iPhone|Tablet|iPod/i.test(navigator.userAgent);
  };

  useEffect(() => {
    setIsMobileDevice(isMobile());

    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    if (isMobile()) {
      setIsLandscape(window.innerWidth > window.innerHeight);
      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);
    }

    return () => {
      if (isMobile()) {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const fetchCountryImages = async () => {
      try {
        const response = await axios.get(`${BaseURLs.forvarded}api/countries/`);
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

  return (
    <div id="main_app_container">
      <Router>
        <Routes>
          <Route path="/" element={<Planets />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/map"
            element={
              <Map
                countryData={countryData}
                loading={loading}
                handle_Set_Selected_Country={handle_Set_Selected_Country}
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
