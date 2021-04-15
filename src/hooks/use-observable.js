import React from "react";

const defaultOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const useObservable = (
  observableElement,
  handler,
  condition = true,
  options = defaultOptions
) => {
  const observer = React.useRef();
  const observableElementRef = React.useRef();
  const handlerRef = React.useRef();

  React.useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  React.useEffect(() => {
    if (condition && observableElement) {
      observableElementRef.current = observableElement;

      observer.current = new IntersectionObserver(handlerRef.current, options);
      observer.current.observe(observableElementRef.current);
    }
  }, [condition, observableElement, options]);
};

export default useObservable;
