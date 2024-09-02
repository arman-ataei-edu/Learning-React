import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../fetches/fetchSearch";

import Country from "./Country";

const UForm = () => {
  const [region, setRegion] = useState("");
  const [langugae, setLanguage] = useState("");

  const results = useQuery(["region", region, langugae], fetchSearch);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading ...</h2>
      </div>
    );
  }

  const regions = results.data[0];
  // const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
    const formData = new FormData(event.target);
    let lang = formData.get("language");
    let reg = formData.get("region");
    reg = reg.trim();
    lang = lang.trim();
    if (reg) {
      reg = reg[0].toUpperCase() + reg.slice(1);
      setRegion(reg.trim());
    } else {
      setRegion("");
    }
    if (lang) {
      lang = lang[0].toUpperCase() + lang.slice(1);
      setLanguage(lang.trim());
    } else {
      setLanguage("");
    }
  };
  return (
    <div className="w3-container">
      <form
        className="w3-panel w3-card-4 w3-padding-24"
        onSubmit={handleSubmit}
      >
        <p>
          <input
            id="search"
            name="region"
            className="w3-input w3-xlarge w3-padding"
            type="text"
            placeholder="Region"
          />
        </p>
        <p>
          <input
            id="search"
            name="language"
            className="w3-input w3-xlarge w3-padding"
            type="text"
            placeholder="Language"
          />
        </p>
        <p className="w3-center">
          <button
            className="w3-button w3-black w3-padding w3-xlarge w3-padding-16 "
            type="submit"
          >
            Search
          </button>
        </p>
      </form>
      <div className="w3-container">
        <h2 className="w3-center">
          {region && `Countries in ${region}`}{" "}
          {(!region && langugae && `Countries Speaking ${langugae}`) ||
            (langugae && `Speaking ${langugae}`)}
          {!region && !langugae && "All Countries"}
        </h2>
        <div className="countries w3-container">
          {Object.keys(regions).map((region) => {
            const countries = [...regions[region]];
            return countries.map((country, indexC) => (
              <Country
                name={country.name.common}
                image={country.flags.png}
                alt={country.name.common + "flag"}
                population={country.population}
                key={`${region}${indexC}`}
              />
            ));
          })}
        </div>
      </div>
    </div>
  );
};

export default UForm;
