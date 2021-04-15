import React from "react";
import styled, { keyframes } from "styled-components";

const Scaleable = ({ children, delay = 100 }) => {
  return (
    <>
      <Div _delay={delay} className="fadeable-element-span">
        {children}
      </Div>
    </>
  );
};

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const Div = styled.div`
  transform: scale(0);
  animation: 0.6s ${scale};
  animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
  animation-delay: ${({ _delay }) => (_delay ? _delay : 100)}ms;
  animation-fill-mode: forwards;
`;

export default Scaleable;
