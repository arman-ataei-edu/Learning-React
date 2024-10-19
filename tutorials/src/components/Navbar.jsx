import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

import FavCountryContext from "../scripts/FavCountryContext";

const Navbar = () => {
  const location = useLocation();

  const [favCountries, _] = useContext(FavCountryContext);
  const faveCountries = [...favCountries];
  useEffect(() => {}, [location.pathname]);
  // console.log(window.origin, "from  NavBar");
  const tabs_ = location.pathname.split("/");

  console.log(favCountries, "Navbar");
  var link = "";
  return (
    <div id="header">
      <header className="w3-bar w3-light-gray">
        <Link className="w3-bar-item w3-button w3-mobile w3-green" to={"/"}>
          Home
        </Link>
        {tabs_.map((tab) => {
          if (tab) {
            link += `/${tab}`;
            return (
              tab && (
                <Link
                  className="w3-bar-item w3-button w3-mobile"
                  key={tab + "link"}
                  to={link}
                >
                  {tab.split("-").join(" ")}
                </Link>
              )
            );
          }
        })}
      </header>
      {faveCountries.length != 0 && (
        <div id="favCountries">
          <span>Favourites:</span>
          {faveCountries.map(([country, link], index) => {
            return (
              <div key={index} className="w3-margin-left">
                <Link to={link}>
                  <img src={country.flags.png} alt={country.name.common} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
