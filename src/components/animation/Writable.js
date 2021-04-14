import React from "react";
import styled from "styled-components";

const Writable = ({
  children,
  animate = true,
  startTime = 1000,
  delay = 100,
}) => {
  const spanRef = React.useRef();

  React.useEffect(() => {
    let tmp;
    if (animate) {
      tmp = setTimeout(() => {
        spanRef.current.classList.add("full-opacity");
        spanRef.current.classList.remove("zero-opacity");
      }, startTime);
    }
    return () => clearTimeout(tmp);
  }, [animate, startTime]);

  return (
    <>
      <Span
        ref={spanRef}
        _delay={delay}
        className="writable-text-span zero-opacity"
      >
        {children}
      </Span>
    </>
  );
};

const Span = styled.span`
  transition: opacity 1s ease;
  transition-delay: ${({ _delay }) => (_delay ? _delay : 100)}ms;
`;

export default Writable;
