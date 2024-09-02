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
      <h3>Github CodeSpace</h3>
      <ol>
        <li>PORTS > right-click > preview in editor > http://127.0.0.1:PortNumber/</li>
        <li>https does not work! copy the complete url</li>
        <li>Dont forget to git add/commit/push!</li>
      </ol>
    </div>
  );
};

export default NewThings;
