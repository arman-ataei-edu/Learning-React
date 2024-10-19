import Content from "../components/TableOfContents";

const Home = () => {
  return (
    <div>
      <Content title={"Others"} url={"Others"} number={0} />
      <Content
        title={"Controlled Form (project)"}
        url={"Controlled-Form"}
        number={1}
      />
      <Content
        title={"Uncontrolled Form (project) (Without Validation)"}
        url={"Uncontrolled-Form"}
        number={2}
      />
      <Content title={"Python Server"} url={"Python-Server"} number={3} />
      <Content
        title={"Class Components (project)"}
        url={"Class-Components"}
        number={5}
      />
      <Content title={"Other Hooks"} url={"Other-Hooks"} number={6} />
      <Content title={"WebPack"} url={"WebPack"} number={7} />
      <Content title={"Vite"} url={"Vite"} number={8} />
      <Content title={"Tailwind"} url={"Tailwind"} number={9} />
      <Content title={"SCSS"} url={"SCSS"} number={10} />
      <Content title={"TypeSecript"} url={"TypeSecript"} number={11} />
      <Content
        title={"React Performance"}
        url={"React-Performance"}
        number={12}
      />
    </div>
  );
};
export default Home;
