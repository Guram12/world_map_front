import "../styles/WindowComponent.css";
import { useEffect } from "react";



export default function WindowComponent({ selectedCountry, countryData }) {





  const getCountryCode = (code) => {
    if (code.includes('_')) {
      return code.split('_')[0];
    }
    if (code === null) {
      return null
    }
    return code;
  };

  // window.open(countryMapUrl, "_blank", "noopener,noreferrer");


  const handle_Open_Map_Click = (arg) => {
    const countryMapUrl = `${window.location.origin}/country-map/${arg}`;
    window.open(countryMapUrl, "_blank", "noopener,noreferrer");
  }


  useEffect(() => {
    console.log(countryData);
  }, [countryData]);

  const countryCode = getCountryCode(selectedCountry);

  return (
    <div className="image_window">
        <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="flag image"  style={{width: "100px"}}/>
      {/* <img src={countryData[countryCode]?.image_url} alt="costumer image" /> */}
      <button onClick={() => handle_Open_Map_Click(selectedCountry)} className="open_map"  > go to map   </button>
    </div>
  );
}
