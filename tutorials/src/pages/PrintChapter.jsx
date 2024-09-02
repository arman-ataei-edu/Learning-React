import { useParams } from "react-router-dom";
import UForm from "../components/UnControlledForm";
import Form from "../components/ControlledForm";
import PythonServer from "../components/PythonServer";
import NewThings from "../components/NewThings";
const PrintChapter = () => {
  const { chapter } = useParams();

  return (
    <div className="w3-container">
      <div>
        <h2 className="w3-center"> {chapter.split("-").join(" ")} </h2>
        {chapter === "Controlled-Form" && <Form />}
        {chapter === "Uncontrolled-Form" && <UForm />}
        {chapter === "Python-Server" && <PythonServer />}
        {chapter == "Others" && <NewThings />}
      </div>
    </div>
  );
};

export default PrintChapter;
