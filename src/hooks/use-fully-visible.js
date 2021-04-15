import React from "react";

const useFullyVisible = (element) => {
  const observer = React.useRef();
  const elementRef = React.useRef();
  const [fullyVisible, setFullyVisible] = React.useState(false);

  React.useEffect(() => {
    if (element && !fullyVisible) {
      elementRef.current = element;
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      };

      function handleIntersection(entries, observer) {
        if (entries[0].isIntersecting && entries[0].intersectionRatio === 1) {
          setFullyVisible(true);
        }
      }

      observer.current = new IntersectionObserver(handleIntersection, options);
      observer.current.observe(elementRef.current);
    }
  }, [element, fullyVisible]);

  return fullyVisible;
};

export default useFullyVisible;
