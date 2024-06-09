import "../styles/CountryMap.css";
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import countryBounds from "./country_bounds.json"; // Import the JSON data
import axios from "axios";

const js_api_key = "AIzaSyCICm03qJccHWppsFraIO4Kteuii3ft61g";
const libraries = ["core", "places"];

function CountryMap({ countryData, selectedCountry }) {
  const { country } = useParams(); // Retrieve country parameter from URL
  const [businessLocations, setBusinessLocations] = useState([]);
  const [image_url, setImage_url] = useState({});
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true); // Separate state for image loading

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: js_api_key,
    libraries,
  });

  const BaseURLs = {
    forvarded: "https://cc5a6931275f239dcca8797ef88f0ead.serveo.net/",
    local: "http://localhost:8000/",
  };

  useEffect(() => {
    const fetchCountryImages = async () => {
      try {
        const response = await axios.get(`${BaseURLs.forvarded}api/countries/`);
        setImage_url(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country images:", error);
      }
    };
    fetchCountryImages();
  }, []);

  useEffect(() => {
    console.log("Country data image from map", image_url[country]?.customer_website);
  }, [country, image_url]);

  useEffect(() => {
    const fetchBusinessLocations = async () => {
      try {
        const response = await axios.get(`${BaseURLs.forvarded}api/fetch-locations/?iso_code=${country}`);
        const { locations } = response.data;
        setBusinessLocations(locations);
      } catch (error) {
        console.error("Error fetching business locations:", error);
      }
    };

    if (country && isLoaded) {
      fetchBusinessLocations();
    }
  }, [country, isLoaded]);

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
      <div className="consumer_container">
        {imageLoading && (
          <div className="loading">
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
          style={{ display: imageLoading ? 'none' : 'block' }} // Hide the image until it's fully loaded
        />
        <button
          className="btn"
          onClick={() => {
            const websiteUrl = image_url[country]?.customer_website;
            if (websiteUrl) {
              window.open(websiteUrl, "_blank", "noopener,noreferrer");
            } else {
              console.warn("No customer website URL available");
            }
          }}
        >
          Open Website
        </button>
      </div>
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
