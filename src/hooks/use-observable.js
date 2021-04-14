import React from "react";

const defaultOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const useObservable = (
  observableElement,
  handler,
  options = defaultOptions
) => {
  const observer = React.useRef();
  const observableElementRef = React.useRef();
  const handlerRef = React.useRef();

  React.useEffect(() => {
    if (observableElement) {
      observableElementRef.current = observableElement;
      handlerRef.current = handler;

      observer.current = new IntersectionObserver(handlerRef.current, options);
      observer.current.observe(observableElementRef.current);
    }
  }, [observableElement, handler, options]);
};

export default useObservable;
