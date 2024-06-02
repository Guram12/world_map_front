// src/components/CountryMap.jsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const CountryMap = ({ countryCode }) => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const fetchCountryGeoData = async () => {
      try {
        const response = await axios.get(`path/to/geojson/files/${countryCode}.geojson`);
        setGeoData(response.data);
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
      }
    };

    fetchCountryGeoData();
  }, [countryCode]);

  return (
    <MapContainer style={{ height: '500px', width: '100%' }} zoom={5} center={[20, 0]} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoData && (
        <GeoJSON
          data={geoData}
          style={() => ({
            color: '#4a83ec',
            weight: 2,
            fillColor: '#1a1d62',
            fillOpacity: 0.1,
          })}
        />
      )}
    </MapContainer>
  );
};

export default CountryMap;
