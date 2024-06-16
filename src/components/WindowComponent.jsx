import "../styles/WindowComponent.css";


export default function WindowComponent({ selectedCountry, countryData , country_name_props }) {

  const getCountryCode = (code) => {
    if (code.includes('_')) {
      return code.split('_')[0];
    }
    if (code === null) {
      return null
    }
    return code;
  };

  const handle_Open_Map_Click = (arg) => {
    const countryMapUrl = `${window.location.origin}/country-map/${arg}`;
    window.open(countryMapUrl, "_blank", "noopener,noreferrer");
  }

  const countryCode = getCountryCode(selectedCountry);

  return (
    <div className="image_window">
      <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="flag image" style={{ width: "100px" }} />
      {/* <img src={countryData[countryCode]?.image_url} alt="costumer image" /> */}
      <p className="country_name" >{country_name_props}</p>

      <button onClick={() => handle_Open_Map_Click(selectedCountry)} className="open_map"  > Go to map </button>
    </div>
  );
}
