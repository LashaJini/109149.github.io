import React from "react";
import styled from "styled-components";

// TODO: remove observer after intersected?
const Paragraph = ({ children }) => {
  const spanRef = React.useRef();
  const observer = React.useRef();
  const [fullyVisible, setFullyVisible] = React.useState(false);

  React.useEffect(() => {
    if (!fullyVisible) {
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
      observer.current.observe(spanRef.current);
    }
  }, [fullyVisible]);

  return <Div ref={spanRef}>{fullyVisible && children}</Div>;
};

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

export default Paragraph;
