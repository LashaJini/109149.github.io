import React from "react";
import styled, { keyframes } from "styled-components";

const Fadeable = ({ children, delay = 100 }) => {
  return (
    <>
      <Span _delay={delay} className="fadeable-element-span">
        {children}
      </Span>
    </>
  );
};

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Span = styled.span`
  opacity: 0;
  animation: 3s ease ${fadein};
  animation-delay: ${({ _delay }) => (_delay ? _delay : 100)}ms;
  animation-fill-mode: forwards;
`;

export default Fadeable;
