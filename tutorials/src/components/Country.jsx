import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../tools/ErrorBoundary";

const Country = ({ image, alt, name, population }) => {
  if (name === "Antarctica") {
    throw new Error("CountryName Antractica is the second in the list");
  }
  const { chapter } = useParams();
  const link = name.split(" ").join("-");
  return (
    <div className="w3-card w3-col m4 w3-margin" id="cont-country">
      <Link to={`/${chapter}/${link}`}>
        <img src={image || "#"} alt={alt || "image-alt"} />
        <div className="w3-container">
          <h3>
            <b>{name || "country name "}</b>
          </h3>
          <p>Population: {population || "population"}</p>
        </div>
      </Link>
    </div>
  );
};

function CountryErrorBoundary(props) {
  const errorComp = (
    <h2>
      While loading Country component with &#123;
      {Object.keys(props).map((key) => `${key}: ${props[key]}, `)}
      &#125;, We use to throw an error to learn how to catch errors with
      errorboundary.
      <Link to="/">Click here to go back to the home page.</Link>
    </h2>
  );
  return (
    <ErrorBoundary errorComponent={errorComp}>
      <Country {...props} />
    </ErrorBoundary>
  );
}

export default CountryErrorBoundary;
