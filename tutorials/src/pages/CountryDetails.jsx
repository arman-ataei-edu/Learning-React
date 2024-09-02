import { useParams } from "react-router-dom";

import fetchData from "../fetches/fetchData";
import { useQuery } from "@tanstack/react-query";

const CountryDetails = () => {
  const { countryName } = useParams();
  //   console.log(chapter, countryName);
  const results = useQuery(
    ["details", "name", countryName.split("-").join(" ")],
    fetchData
  );
  if (results.isLoading) {
    return (
      <div className="w3-container">
        <h3>Loading ...</h3>
      </div>
    );
  }
  const country = results?.data[0] ?? [];
  const Langs = country.languages;

  const currencies = Object.keys(country?.currencies ?? []).map((currence) => {
    return [
      country.currencies[currence].name,
      country.currencies[currence].symbol,
    ];
  });

  return (
    <div className="w3-display-container " key={Math.random()}>
      <div className="w3-padding-top-32 w3-display-topmiddle w3-center">
        <img src={country.flags.png} alt={country.flags.alt} />
        <h1>{name}</h1>
        <div className="w3-left-align w3-padding-32">
          <p>
            Region: {country.region}, {country.subregion}
          </p>
          <p>
            {Langs && "Language(s):"}
            {Langs &&
              Object.keys(Langs).map((lang, index) => {
                if (index === Object.keys(Langs).length - 1) {
                  return (
                    <span key={`${lang}${name}${Math.random()}`}>
                      {" "}
                      {Langs[lang]}
                    </span>
                  );
                }
                return (
                  <span key={`${lang}${name}${Math.random()}`}>
                    {" "}
                    {Langs[lang]},
                  </span>
                );
              })}
          </p>

          <p>
            {currencies.length !== 0 && "Currencies: "}
            {currencies &&
              currencies.map((currence) => {
                return (
                  <>
                    {currence[0]}, {currence[1]}
                  </>
                );
              })}
          </p>
          <p>Start of Week: {country.startOfWeek}</p>
          <p>
            {country.idd.root &&
              `International Direct Dialing(IDD): ${country.idd.root}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
