import React from "react";
import styled, { keyframes, css } from "styled-components";
import { AnimationContext } from "../";

const Fadeable = ({ children, delay = 100 }) => {
  const animation = React.useContext(AnimationContext);

  return (
    <>
      <Span
        _delay={delay}
        className="fadeable-element-span"
        _animationEnabled={animation.animationEnabled}
      >
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
  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      opacity: 0;
      animation: 3s ease ${fadein};
      animation-delay: ${({ _delay }) => (_delay ? _delay : 100)}ms;
      animation-fill-mode: forwards;
    `}
`;

export default Fadeable;
