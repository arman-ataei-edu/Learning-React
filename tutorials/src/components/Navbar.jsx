import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  const tabs_ = location.pathname.split("/");

  var link = "";
  return (
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
  );
};

export default Navbar;
