import { Link } from "react-router-dom";
const PythonServer = () => {
  return (
    <div className="w3-container">
      <ol>
        <li>Open the folder in terminal</li>
        <li>run: python3 -m http.server #python3</li>
        <li>
          <Link to="https://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local">
            stackoverflow
          </Link>
        </li>
      </ol>
    </div>
  );
};
export default PythonServer;
