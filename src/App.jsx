import { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryMap from "./components/CountryMap";
import axios from "axios";
import Planets from "./components/planets";

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
    forvarded: "https://4f15a70ad9cc92b7506df5ca44a0ae2e.serveo.net/",
    local: "http://localhost:8000/",
  };

  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  useEffect(() => {
    setIsMobileDevice(isMobile());

    const handleResize = () => {
      if (isMobile()) {
        setIsLandscape(window.innerWidth > window.innerHeight);
      }
    };

    if (isMobile()) {
      setIsLandscape(window.innerWidth > window.innerHeight);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (isMobile()) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const fetchCountryImages = async () => {
      try {
        const response = await axios.get(`${BaseURLs.local}api/countries/`);
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Please Rotate Your Device</h1>
          <p>
            This site is best viewed in landscape mode. Please rotate your
            device to continue.
          </p>
        </div>
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
            element={<CountryMap selectedCountry={selectedCountry} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
