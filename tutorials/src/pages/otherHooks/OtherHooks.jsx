import { useParams } from "react-router-dom";

import Content from "../../components/TableOfContents";

const OtherHooks = () => {
  const current = useParams();
  const baseUri = current.r1;
  console.log(current.r1);
  return (
    <div>
      <Content title={"useRef"} url={`${baseUri}/useRef`} number={1} />
      <Content title={"useReducer"} url={`${baseUri}/useReducer`} number={2} />
      <Content title={"useMemo"} url={`${baseUri}/useMemo`} number={3} />
      <Content title={"useCalback"} url={`${baseUri}/useCallback`} number={4} />
      <Content
        title={"useImperativeHandle"}
        url={`${baseUri}/useImperativeHandle`}
        number={5}
      />
      <Content
        title={"useLayoutEffect"}
        url={`${baseUri}/useLayoutEffect`}
        number={6}
      />
      <Content
        title={"useDebugValue"}
        url={`${baseUri}/useDebugValue`}
        number={7}
      />
      <Content
        title={"useDeferredValue"}
        url={`${baseUri}/useDeferredValue`}
        number={8}
      />
      <Content
        title={"useTransition"}
        url={`${baseUri}/useTransition`}
        number={9}
      />
      <Content title={"useId"} url={`${baseUri}/useId`} number={10} />
    </div>
  );
};

export default OtherHooks;
