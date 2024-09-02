import { Link } from "react-router-dom";

const NewThings = () => {
  return (
    <div className="w3-container">
      <h2>useLocation</h2>
      <ol>
        <li>
          accessing the current location to re-render a component like navbar
        </li>
        <li>
          import &#123; useLocation &#125; from &quot; react-router-dom &quot;
        </li>
      </ol>
      <h2>HTML Entities</h2>
      <ol>
        <li>
          <Link to="https://www.w3schools.com/html/html_entities.asp">
            W3Schools
          </Link>
        </li>
        <li>
          <Link to="https://www.freeformatter.com/html-entities.html">
            List-1
          </Link>
        </li>
        <li>
          <Link to="https://www.toptal.com/designers/htmlarrows/symbols/">
            List-2
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default NewThings;
