import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import countryBounds from "./country_bounds.json"; // Import the JSON data
import axios from "axios";

const js_api_key = "AIzaSyCICm03qJccHWppsFraIO4Kteuii3ft61g";

const libraries = ["core", "places"];

const CountryMap = () => {
  const { country } = useParams(); // Retrieve country parameter from URL
  const [businessLocations, setBusinessLocations] = useState([]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: js_api_key,
    libraries,
  });



  const BaseURLs = {
    forvarded: "https://7c109a58cfd0107a02c5e66cbd850b96.serveo.net/",
    local: "http://localhost:8000/",
  };



  useEffect(() => {
    const fetchBusinessLocations = async () => {
      try {
        const response = await axios.get(
          `${BaseURLs.forvarded}api/fetch-locations/?iso_code=${country}`

        );
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
  if (
    typeof north !== "number" ||
    typeof south !== "number" ||
    typeof east !== "number" ||
    typeof west !== "number"
  ) {
    return <div>Error: Invalid bounds for the selected country</div>;
  }

  return (
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
        <Marker
          key={index}
          position={{ lat: location.latitude, lng: location.longitude }}
          title={location.name}
        />
      ))}
    </GoogleMap>
  );
};

export default CountryMap;
