import React from "react";
import styled from "styled-components";
import { useEffectSkipFirstRender } from "../../hooks";

const Jiggle = ({ children }) => {
  const spanRef = React.useRef();
  const timerRef = React.useRef();
  const [jiggling, setJiggling] = React.useState(false);

  function animate() {
    if (!jiggling) {
      setJiggling(true);
    }
  }

  useEffectSkipFirstRender(() => {
    let timerID;
    if (jiggling) {
      spanRef.current.classList.add("jiggle");
      timerID = setTimeout(() => {
        spanRef.current.classList.remove("jiggle");
        setJiggling(false);
      }, 1000);
      timerRef.current = timerID;
    }
    return () => clearTimeout(timerID);
  }, [jiggling]);

  return (
    <>
      <Span ref={spanRef} onMouseEnter={animate}>
        {children}
      </Span>
    </>
  );
};

const Span = styled.span`
  display: inline-block;
  text-align: center;
  height: 100%;
  font-weight: bold;
  transform: scale(1);
`;

export default Jiggle;
