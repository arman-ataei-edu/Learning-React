import { useParams } from "react-router-dom";
import UForm from "../pages/UnControlledForm";
import Form from "../pages/ControlledForm";
import PythonServer from "../pages/PythonServer";
import NewThings from "../pages/NewThings";
import ClassComponents from "../pages/ClassComponents";

const PrintChapter = () => {
  const { chapter } = useParams();

  // images in classComponents

  let i = 0; //num default value
  let numOfImages = 5; //must be greater than i
  const images = [];
  while (i < numOfImages) {
    const url = `https://picsum.photos/800/600?random=${i + 1}`;
    images.push(url);
    i += 1;
  }

  return (
    <div className="w3-container">
      <div>
        <h2 className="w3-center"> {chapter.split("-").join(" ")} </h2>
        {chapter === "Controlled-Form" && <Form />}
        {chapter === "Uncontrolled-Form" && <UForm />}
        {chapter === "Python-Server" && <PythonServer />}
        {chapter == "Others" && <NewThings />}
        {chapter == "Class-Components" && <ClassComponents images={images} />}
      </div>
    </div>
  );
};

export default PrintChapter;
