import { useState, useEffect } from 'react'
import './App.css'
import Map from './components/Map'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryMap from './components/CountryMap';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from 'axios';


import Planets from './components/planets';





function App() {

  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);


  const handle_Set_Selected_Country = (country) => {
    setSelectedCountry(country)
  }


  const BaseURLs = {
    forvarded: "https://4f15a70ad9cc92b7506df5ca44a0ae2e.serveo.net/",
    local: "http://localhost:8000/"

  };



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



  return (
    <div id='main_app_container' >

      <Router>
        <Routes>
          <Route path="/" element={
            <Map
              countryData={countryData}
              loading={loading}
              handle_Set_Selected_Country={handle_Set_Selected_Country}
            />} />
          <Route path="/country-map/:country" element={<CountryMap selectedCountry={selectedCountry} />} />
        </Routes>
      </Router>

      
      {/* <div >
          <Planets />
      </div> */}

    </div>
  )
}

export default App
