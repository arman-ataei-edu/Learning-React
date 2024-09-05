import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  // its a container that gives you the same thing/object every single time
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    // whenever we run this we want to remove it again
    // we need some sort of clean up here

    // whenever you return something from a useEffect
    // it will run after the component has been unmounted from the dom
    // equivalent to componentWillUnMount
    // use this approach to remove elemet, remove eventListeners(extenranl eventListener), timer, jqueryComponent, ...

    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(
    <div className="w3-container">{children}</div>,
    elRef.current
  );
};

export default Modal;
