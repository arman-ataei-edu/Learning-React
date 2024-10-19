import { Link } from "react-router-dom";
import Code from "../components/Code";

const Vite = () => {
  return (
    <div className="w3-container">
      <ol>
        <li>
          <Code
            title={"Setting Up the Vite"}
            discription={"run the following in the terminal"}
            code={` npm init vite@latest`}
          />
        </li>
        <li>
          Follow this{" "}
          <Link
            to={
              "https://dev.to/dmnchzl/eslint-x-prettier-the-right-way-to-start-a-javascript-project-1hc1"
            }
            style={{
              textDecoration: "underline",
              padding: "5px",
              margin: "0px 10px 0px 10px",
            }}
            className="w3-red w3-hover-teal"
          >
            Link{" "}
          </Link>
          to learn about using vite+eslint+prettire
        </li>
      </ol>
    </div>
  );
};

export default Vite;
