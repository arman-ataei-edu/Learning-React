import Content from "../components/TableOfContents";

const Home = () => {
  return (
    <div>
      <Content title={"Controlled Form"} url={"Controlled-Form"} number={1} />
      <Content
        title={"Uncontrolled Form (Without Validation)"}
        url={"Uncontrolled-Form"}
        number={2}
      />
      <Content title={"Python Server"} url={"Python-Server"} number={3} />
      <Content title={"Others"} url={"Others"} number={4} />
      <Content title={"Class Components"} url={"Class-Components"} number={5} />
    </div>
  );
};
export default Home;
