import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Country = ({ image, alt, name, population }) => {
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

export default Country;
