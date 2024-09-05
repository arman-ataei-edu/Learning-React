import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchSearch from "../fetches/fetchSearch";
import Country from "../components/Country";
import ErrorBoundary from "../tools/ErrorBoundary";

const REGIONS = {
  Africa: "",
  Americas: "",
  Antarctic: "",
  Asia: "",
  Europe: "",
  Oceania: "",
};
var counter = 0;
const Form = () => {
  // throw new Error("lol error");
  counter += 1;

  const [languages, setLanguages] = useState([]);

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
  // const regionsLangs = results.data[1];

  console.log(counter);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const results = fetchSearch({ queryKey: [name, value] });

    results.then((res) => {
      const regionLanguages = res[1];
      setLanguages([...regionLanguages[value]].toSorted());
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const lang = formData.get("language");
    const region = formData.get("region");
    setLanguage(lang);
    setRegion(region);
  };

  return (
    <div className="w3-container">
      <form
        className="w3-panel w3-card-4 w3-padding-24"
        onSubmit={handleSubmit}
      >
        <p>
          Region:
          <select name="region" className="w3-select" onChange={handleChange}>
            <option></option>
            {REGIONS &&
              Object.keys(REGIONS).map((region) => (
                <option key={region}>{region}</option>
              ))}
          </select>
        </p>

        <p>
          Language:
          <select name="language" className="w3-select">
            <option disabled={REGIONS === ""}></option>
            {languages &&
              languages.map((lag) => <option key={lag}>{lag}</option>)}
          </select>
        </p>
        <button
          className="w3-button w3-black w3-padding w3-xlarge w3-padding-16"
          type="submit"
        >
          Search
        </button>
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
            return countries.map((country, indexC) => {
              if (indexC == 5) {
                // throw new Error("lol error");
              }
              return (
                <Country
                  name={country.name.common}
                  image={country.flags.png}
                  alt={country.name.common + "flag"}
                  population={country.population}
                  key={`${region}${indexC}`}
                />
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

// export default Form;

function FormErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Form {...props} />
    </ErrorBoundary>
  );
}
export default FormErrorBoundary;
