import { Link, useNavigate } from "react-router-dom";
import Code from "../components/Code";

const NewThings = () => {
  return (
    <div className="w3-container">
      <h2>Hooks (general facts)</h2>
      <ol>
        <li>call them in top most level of your component</li>
        <li>can't be called inside a callback function</li>
      </ol>
      <h2>useLocation</h2>
      <ol>
        <li>
          accessing the current location to re-render a component like navbar
        </li>
        <li>
          <Code code={`import { useLocation } from  "react-router-dom"`} />
        </li>
        <li>
          <Code code={`const location = useLocation()`} />
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
        <li>
          <Code code={`import {useNavigate} from "react-router-dom"`} />
        </li>
        <li>
          <Code code={`const navigate = useNavigate()`} />
        </li>
      </ol>
      <h2>Context</h2>
      <ol>
        <li>passing simple states to children</li>
        <li>create FavCountryContext.js</li>
        <li>
          <Code
            title={"Creating Global State"}
            discription={
              "in App.js (or wherever you wnat to share the global state):"
            }
            code={"const favCountries = useState(new Set());"}
          ></Code>
        </li>
        <li>
          <br />
          <Code
            title={"specifying where you want to access the global state"}
            discription={
              " wrap the entire components that must access the state inside the following tags:"
            }
            code={`<FavCountryContext.provider value = { favCountries } > <FavCountryContext.provider >`}
          ></Code>
        </li>
        <li>
          wherever you want to access the global state import both "useContext"
          and FavCountryContext and create a useContext like <br />
          <div className="w3-padding-16">
            <div className="w3-code w3-light-gray">
              const [_, setFavCountries] = useContext(FavCountryContext);
            </div>
          </div>
          or
          <Code>
            {" "}
            const [favCountries, setFavCountries] =
            useContext(FavCountryContext);
          </Code>
        </li>
        <li>its possible to read and write a global state</li>
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

      <h2>useState</h2>
      <ol>
        <li>
          <Code>import &#123; useState &#125; from "react"</Code>{" "}
        </li>
        <li>
          it is equivalent to &quot; this.state &quot;
          <Code>const [state, setState] = useState("")</Code>
        </li>
        <li>if changed, rerenders the component</li>
        <li>dont call it inside a loop or conditional statements</li>
        <li>
          {" "}
          the setState function is asynchronous. So if we try to read the state
          immediately after updating it, we would get the previous value of the
          state, without the update.{" "}
          <Link to="https://www.freecodecamp.org/news/how-to-manage-state-in-a-react-app/">
            referece
          </Link>
        </li>
        <li>
          The correct way of reading state after the update would be using the
          useEffect hook.
          <Code>useEffect(() => console.log(state), [state])</Code>
        </li>
      </ol>
      <h2>useEffect</h2>
      <ol>
        <li>handling sideEffects in react components</li>
        <li>
          pass nothing as dependency results in running the callback every time
          the component renders
        </li>
        <li>
          passing an empty array as dependncy results in running the callback
          only the first time that the component renders
        </li>
        <li>
          returning a callback inside the callback will run the callback when
          the component willUnmount
        </li>
      </ol>
      <h2>useRef</h2>
      <ol>
        <li>
          follow the react official websit{" "}
          <Link to="https://react.dev/reference/react/useRef">useRef</Link> and{" "}
          <Link to="https://react.dev/learn/referencing-values-with-refs">
            this link
          </Link>
          .
        </li>
        <li>
          When you want a component to “remember” some information, but you
          don’t want that information to trigger new renders, you can use a ref.
        </li>
        <li>
          When a piece of information is used for rendering, keep it in state.
          When a piece of information is only needed by event handlers and
          changing it doesn’t require a re-render, using a ref may be more
          efficient.
        </li>
        <li>
          If your component needs to store some value, but it doesn’t impact the
          rendering logic, choose refs.
        </li>
        <li>
          as good example see{" "}
          <Link to="https://react-v8.holt.courses/lessons/hooks-in-depth/useref">
            holt
          </Link>
        </li>
      </ol>
      <h2>children</h2>
      <ol>
        <li>
          it is a reserved keyword in react (composition or inheritance in
          react)
        </li>
        <li>
          <Link to="https://legacy.reactjs.org/docs/composition-vs-inheritance.html">
            react-documentation
          </Link>
        </li>
        <li>
          <Link to="https://stackoverflow.com/questions/64118702/use-of-children-in-a-react-component">
            stack-exchange
          </Link>
        </li>
      </ol>
      <h2>highlight.js and react-highlight</h2>
      <ol>
        <li>
          <Code
            title={"installation"}
            discription={"run the following commands on terminal:"}
            code={"npm install highlight.js react-highlight --save"}
          />
        </li>
        <li>
          <ol>
            refereces:
            <li>
              <Link to="https://www.npmjs.com/package/highlight.js">
                highlight.js
              </Link>
              (npm package)
            </li>
            <li>
              <Link to="https://www.npmjs.com/package/react-highlight">
                react-highlight
              </Link>{" "}
              (npm package)
            </li>
            <li>
              <Link to="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md">
                supported languages
              </Link>
            </li>
            <li>
              <Link to="https://medium.com/@hizacharylee/simplify-syntax-highlighting-with-highlight-js-b65af3bdc509">
                Learn How to use Highlight.js everywhere
              </Link>
            </li>
            <li>
              <Link to=""></Link>
            </li>
          </ol>
        </li>
      </ol>
      <h2>stackblitz</h2>
      <ol>
        <li>this is a good website with vite support</li>
      </ol>
      <h2>codesandbox</h2>
      <ol>
        <li>this is another good website </li>
      </ol>
      <h2>Updating node and npm to the latest version</h2>
      <ol>
        <li>
          <Code
            title={"update npm"}
            discription={""}
            lang={"javascript"}
            code={`sudo npm install npm@latest -g`}
          />
        </li>
        <li>
          <Code
            title={"update node"}
            discription={""}
            lang={"javascript"}
            code={`sudo npm install n -g`}
          />
        </li>
        <li>
          <Link
            to={
              "https://stackoverflow.com/questions/6237295/how-can-i-update-node-js-and-npm-to-their-latest-versions"
            }
          >
            stackOverflow
          </Link>
        </li>
      </ol>
      <h2>Terminal</h2>
      <ol>
        <li>
          <Code
            title={"removing a folder with contents"}
            discription={""}
            code={`rm -rf trunk`}
          />
        </li>
      </ol>
    </div>
  );
};

export default NewThings;
