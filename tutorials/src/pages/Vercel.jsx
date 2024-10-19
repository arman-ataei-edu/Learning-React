import { Link } from "react-router-dom";
import Code from "../components/Code";

const Vercel = () => {
  return (
    <div className="w3-container">
        <ol>
            <li>To build a react+vite project with Vercel do the following steps:
                <ol>
                    <li>Make sure that you choose the right build tools, in this case "Vite".</li>
                    <li>Make sure the root direcotory is set to the directory that serve the "package.jsno" and "vits.config.js" .</li>
                    <li>Chose the right build path as well as the build command in this case "./build" and <code>npp run build</code>.</li>
                </ol>
            </li>
            <li>Every time that you update your code, you must build the project again with Vercel and a new URL will be generated for the project, so make sure that you update the URL everywhere after building the project again.</li>
        </ol>
       
    </div>
  );
};

export default Vercel;
