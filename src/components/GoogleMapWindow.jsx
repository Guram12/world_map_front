// CountryMap.js
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import countryBounds from "./country_bounds.json"; // Import the JSON data
import axios from "axios";

const js_api_key = "AIzaSyCICm03qJccHWppsFraIO4Kteuii3ft61g";

const libraries = ["core", "places"];

const CountryMap = ({ country }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: js_api_key,
    libraries,
  });

  const [businessLocations, setBusinessLocations] = useState([]);

  useEffect(() => {
    const fetchBusinessLocations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/fetch-locations/?iso_code=${country}`
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
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100vh" }}
      options={{
        restriction: {
          latLngBounds: {
            north: countryBounds[country]?.north,
            south: countryBounds[country]?.south,
            east: countryBounds[country]?.east,
            west: countryBounds[country]?.west,
          },
          strictBounds: true,
        },
      }}
      onLoad={(map) => {
        const bounds = new window.google.maps.LatLngBounds(
          new window.google.maps.LatLng(
            countryBounds[country].south,
            countryBounds[country].west
          ),
          new window.google.maps.LatLng(
            countryBounds[country].north,
            countryBounds[country].east
          )
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