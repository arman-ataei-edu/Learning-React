import { useParams } from "react-router-dom";

import CountryDetails from "../pages/CountryDetails";

const Router2 = () => {
  const current = useParams();
  console.log(current);

  switch (current.r1) {
    case "Other-Hooks":
      return (
        <div className="w3-container">
          {current.r2 == "useRef" && <h1>UseRef</h1>}
          {current.r2 == "useReducer" && <h1>UseReducer</h1>}
          {current.r2 == "useMemo" && <h1>UseMemo</h1>}
          {current.r2 == "useCallback" && <h1>UseCallback</h1>}
        </div>
      );
    case "Controlled-Form":
      return <CountryDetails />;
    default:
      return <h1>Router2</h1>;
  }
};

export default Router2;
