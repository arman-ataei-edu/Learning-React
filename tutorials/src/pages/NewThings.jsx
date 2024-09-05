import { Link, useNavigate } from "react-router-dom";

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
        <li>const location = useLocation()</li>
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
      <h2>static methods in javaScript</h2>
      <ol>
        <li>
          call it directly on the class and not on the instances of the class,
          it does not create an attribute for the instances
        </li>
      </ol>
      <h2>Error Boundries</h2>
      <ol>
        <li>
          <Link to="https://react-v8.holt.courses/lessons/special-case-react-tools/error-boundaries">
            halt-react-course
          </Link>
        </li>
        <li>only for class components</li>
        <li>getDerivedStateFromError: works like useState</li>
        <li>componentdidmatch</li>
        <li>
          for details of implementation : src &gt; tools &gt; ErrorBoundary.jsx
        </li>
        <li>
          to use this go to : src &gt; pages &gt; Country.jsx and then go to the
          end of the file.
        </li>
        <li>
          in this tutorial the second country in the list is alway throw an
          error and in the classComponents if you chose an image with index
          greater than 2 you got an error.
        </li>
      </ol>
      <h1>TrackJS</h1>
      <ol>
        <li>what is it?</li>
        <li>hwo to use it?</li>
      </ol>
      <h1>NewRelic</h1>
      <ol>
        <li>what is it?</li>
        <li>hwo to use it?</li>
      </ol>
      <h2>Modal</h2>
      <ol>
        <li>rendering a component from deep within the tree</li>
        <li>add a new div.portal to the index.html</li>
        <li>create a Modal.jsx like this toturial</li>
        <li>wrap the component inside the Modal instance</li>
      </ol>
      <h2>useNavigate</h2>
      <ol>
        <li>navigate to a url onClick </li>
        <li>import {useNavigate} from "react-router-dom"</li>
        <li>const navigate = useNavigate()</li>
      </ol>
      <h2>Context</h2>
      <ol>
        <li>passing simple states to children</li>
        <li>create FavCountryContext.js</li>
        <li>
          wrap the entire components that must access the state inside the
          FavCountryContext
        </li>
      </ol>
      <h2>Meld (free alternative of Kaleidoscope)</h2>
      <ol>
        <li>
          follow
          <Link to="https://dev.to/abbazs/how-to-use-meld-as-a-difftool-for-git-5ai3">
            Link
          </Link>
          to learn how to install/configure and use meld
        </li>
        <li>see the differences of two files (code)</li>
        <li>sudo apt install meld</li>
        <li>meld fileA fileB</li>
        <li>eddit gitconfig</li>
      </ol>
    </div>
  );
};

export default NewThings;
