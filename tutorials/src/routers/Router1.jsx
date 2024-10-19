import { useParams } from "react-router-dom";
import UForm from "../pages/UnControlledForm";
import Form from "../pages/ControlledForm";
import PythonServer from "../pages/PythonServer";
import NewThings from "../pages/NewThings";
import ClassComponents from "../pages/ClassComponents";
import OtherHooks from "../pages/otherHooks/OtherHooks";
import WebPack from "../pages/WebPack";
import Vite from "../pages/Vite";
import Vercel from "../pages/Vercel"

const Router1 = () => {
  const { r1 } = useParams();

  // images in classComponents

  let i = 0; //num default value
  let numOfImages = 5; //must be greater than i
  const images = [];
  while (i < numOfImages) {
    const url = `https://picsum.photos/800/600?random=${i + 1}`;
    images.push(url);
    i += 1;
  }
  console.log(r1);
  return (
    <div className="w3-container">
      <div>
        <h2 className="w3-center"> {r1.split("-").join(" ")} </h2>
        {r1 === "Controlled-Form" && <Form />}
        {r1 === "Uncontrolled-Form" && <UForm />}
        {r1 === "Python-Server" && <PythonServer />}
        {r1 == "Others" && <NewThings />}
        {r1 == "Class-Components" && <ClassComponents images={images} />}
        {r1 == "Other-Hooks" && <OtherHooks />}
        {r1 == "WebPack" && <WebPack />}
        {r1 == "Vite" && <Vite />}
        {r1 == "Vercel" && <Vercel />}
      </div>
    </div>
  );
};

export default Router1;
