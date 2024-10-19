// import w3CodeColor from "../styles/w3codecolor";
import Highlight from "react-highlight";

const Code = ({ code, title, discription, children, lang }) => {
  // var modes = ["html", "js", "java", "css", "sql", "python", "kotlin"];

  // lang = lang + "High";
  // window.addEventListener("beforeunload", w3CodeColor());
  // document.addEventListener("load", w3CodeColor());
  // window.addEventListener("load", w3CodeColor);
  return (
    <div className="w3-padding-16 w3-panel w3-card w3-light-grey">
      <h4>{title}</h4>
      {discription && <div>{discription}</div>}

      <div className={"w3-code notranslate "}>
        <Highlight language={lang == "js" ? "javascript" : lang}>
          {code}
        </Highlight>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Code;
