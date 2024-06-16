import "../styles/CountryMap.css";
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import countryBounds from "./country_bounds.json"; // Import the JSON data
import axios from "axios";
import facebook_icon from "../assets/fb.png"
import instagram_icon from "../assets/inst.png"
import linkedin_icon from "../assets/linkedin.png"
import x_icon from "../assets/x.png"




const js_api_key = "AIzaSyCICm03qJccHWppsFraIO4Kteuii3ft61g";
const libraries = ["core", "places"];

function CountryMap({ countryData, selectedCountry }) {
  const { country } = useParams(); // Retrieve country parameter from URL
  const [businessLocations, setBusinessLocations] = useState([]);
  const [imageLoading, setImageLoading] = useState(true); // Separate state for image loading
  const [isMinimized, setIsMinimized] = useState(false); // State for minimizing container
  const [show_customer_window, setShow_customer_window] = useState(false);




  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: js_api_key,
    libraries,
  });

  const BaseURLs = {
    aws_server: "https://api.1inone.com/",
    local: "http://localhost:8000/",
  };


  useEffect(() => {
    const fetchBusinessLocations = async () => {
      try {
        const response = await axios.get(`${BaseURLs.aws_server}api/fetch-locations/?iso_code=${country}`);
        const { locations } = response.data;
        setBusinessLocations(locations);
        setShow_customer_window(true)

      } catch (error) {
        setShow_customer_window(false)
        console.error("Error fetching business locations:", error);
      }
    };

    if (country && isLoaded) {
      fetchBusinessLocations();
    }
  }, [country, isLoaded]);



  // ====================================  functions for opening customer  social link ===============================

  const handle_fb_click = () => {
    window.open(countryData[country]?.costumer_fb_link, "_blank", "noopener,noreferrer")
  }

  const handle_x_xlick = () => {
    window.open(countryData[country]?.costumer_x_link, "_blank", "noopener,noreferrer")

  }
  const handle_linkedin_click = () => {
    window.open(countryData[country]?.costumer_linkedin_link, "_blank", "noopener,noreferrer")

  }
  const handle_inst_click = () => {
    window.open(countryData[country]?.costumer_inst_link, "_blank", "noopener,noreferrer")
  }



  // =================================================================================================================


  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  const bounds = countryBounds[country];
  if (!bounds) {
    return <div>Error: Invalid country selected</div>;
  }

  const { north, south, east, west } = bounds;
  if (typeof north !== "number" || typeof south !== "number" || typeof east !== "number" || typeof west !== "number") {
    return <div>Error: Invalid bounds for the selected country</div>;
  }

  return (
    <div>
      {show_customer_window && (
        <div className={`consumer_container ${isMinimized ? "minimized" : ""}`}>
          {/* <button className="minimize-btn" onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? "Expand" : "Minimize"}
        </button> */}
          <div className="burger-icon">
            <label className="burger" htmlFor="burger">
              <input className="line"
                type="checkbox"
                id="burger"
                onClick={() => setIsMinimized(!isMinimized)}
                checked={!isMinimized}
                readOnly
              />
            </label>
          </div>

          {!isMinimized && (
            <>
              {imageLoading && (
                <div className="loading" style={{ maxHeight: "200px" }}>
                  <div className="d1"></div>
                  <div className="d2"></div>
                </div>
              )}
              <img
                src={countryData[country]?.image_url}
                alt="consumer website icon"
                className="consumer_logo"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
                style={{ display: imageLoading ? 'none' : 'block' }} 
              />
              <button
                className="btn"
                onClick={() => {
                  const websiteUrl = countryData[country]?.customer_website;
                  if (websiteUrl) {
                    window.open(websiteUrl, "_blank", "noopener,noreferrer");
                  } else {
                    console.warn("No customer website URL available");
                  }
                }}
              >
                Open Website
              </button>
              {!imageLoading && (
                <div className="costomer_social_links_container" >
                  {countryData[country]?.costumer_fb_link !== null && (
                    <img src={facebook_icon} alt="facebook icon" onClick={handle_fb_click} className="costomer_social_links" />
                  )}
                  {countryData[country]?.costumer_x_link !== null && (
                    <img src={x_icon} alt="facebook icon" onClick={handle_x_xlick} className="costomer_social_links" />
                  )}
                  {countryData[country]?.costumer_linkedin_link !== null && (
                    <img src={linkedin_icon} alt="facebook icon" onClick={handle_linkedin_click} className="costomer_social_links" />
                  )}
                  {countryData[country]?.costumer_inst_link !== null && (
                    <img src={instagram_icon} alt="facebook icon" onClick={handle_inst_click} className="costomer_social_links" />
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}

      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        options={{
          restriction: {
            latLngBounds: {
              north,
              south,
              east,
              west,
            },
            strictBounds: true,
          },
        }}
        onLoad={(map) => {
          const bounds = new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(south, west),
            new window.google.maps.LatLng(north, east)
          );
          map.fitBounds(bounds);
        }}
      >
        {businessLocations.map((location, index) => (
          <Marker key={index} position={{ lat: location.latitude, lng: location.longitude }} title={location.name} />
        ))}
      </GoogleMap>
    </div>
  );
}

export default CountryMap;
