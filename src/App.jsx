
import { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryMap from "./components/CountryMap";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from "axios";
import Planets from "./components/planets";


function App() {
  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handle_Set_Selected_Country = (country) => {
    setSelectedCountry(country);
  };


  const BaseURLs = {
    forvarded: "https://7c109a58cfd0107a02c5e66cbd850b96.serveo.net/",
    local: "http://localhost:8000/",
  };

  // useEffect(() => {
  //   console.log('selectedcountry from app ===>>>', selectedCountry)
  // }, [selectedCountry])


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

  return (
    <div id='main_app_container' >

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
              />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
