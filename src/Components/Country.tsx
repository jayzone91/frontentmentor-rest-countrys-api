import { useState } from "react";
import { TCountry } from "../data";

export default function Country(country: TCountry) {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div className="countryEntry" onClick={handleClick}>
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <h2>{country.name}</h2>
      <div className="specs">
        <div className="spec">
          <span className="bold">Population:</span>
          {" " + country.population}
        </div>
        <div className="spec">
          <span className="bold">Region:</span>
          {" " + country.region}
        </div>
        <div className="spec">
          <span className="bold">Capital:</span>
          {" " + country.capital}
        </div>
      </div>
      {show ? <CountryModal {...country} /> : <></>}
    </div>
  );
}

function CountryModal(country: TCountry) {
  return (
    <div className="modal">
      <h1>{country.name}</h1>
    </div>
  );
}
