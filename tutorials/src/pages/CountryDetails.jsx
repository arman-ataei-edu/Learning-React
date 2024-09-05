import { useState, useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import FavCountryContext from "../scripts/FavCountryContext";
import fetchData from "../fetches/fetchData";
import Modal from "./Modal";

const CountryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [_, setFavCountries] = useContext(FavCountryContext);

  const [showModal, setShowModal] = useState(false);

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
    <div className="w3-display-container" key={Math.random()}>
      <div className="w3-padding-top-32 w3-display-topmiddle w3-center">
        <img src={country.flags.png} alt={country.flags.alt} />
        <h1>{country.name.common}</h1>
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
        <button
          className="w3-button w3-green"
          onClick={() => {
            setShowModal(true);
            document.getElementById("modal").style.display = "block";
          }}
        >
          Add to favourites
        </button>
      </div>

      {showModal ? (
        <Modal>
          <div className="w3-modal-content w3-card-4">
            <div className="w3-modal-content w3-card-4">
              <header className="w3-container w3-teal w3-center">
                <h2>Do You want to add it to your Favourite?</h2>
              </header>
              <div className="w3-container w3-center w3-padding">
                <button
                  className="w3-button w3-red w3-margin w3-padding-16"
                  onClick={() => {
                    document.getElementById("modal").style.display = "none";
                    var url = location.pathname.split("/");
                    url.pop();
                    url = `${url.join("/")}`;
                    // console.log(url);
                    setFavCountries((prev) => {
                      return new Set(prev.add(country));
                    });
                    navigate(url);
                  }}
                >
                  Yes
                </button>
                <button
                  className="w3-button w3-green w3-padding-16"
                  onClick={() => {
                    setShowModal(false);
                    document.getElementById("modal").style.display = "none";
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default CountryDetails;
