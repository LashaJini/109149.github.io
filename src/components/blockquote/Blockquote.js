import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants";
import { AnimationContext } from "../";

const Blockquote = ({ children, width, left, borderColor }) => {
  const animation = React.useContext(AnimationContext);

  return (
    <>
      <Wrapper
        _width={width}
        _left={left}
        _borderColor={borderColor}
        className="blockquote-wrapper"
      >
        <Div
          _width={width}
          _left={left}
          _borderColor={borderColor}
          _animationEnabled={animation.animationEnabled}
        >
          {children}
        </Div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${({ _borderColor }) => (_borderColor ? _borderColor : "#e74848")};
  border-radius: 20px;
  padding: 11px;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 300px;
  // font-style: italic;
  // font-weight: bold;
  font-size: 1.1rem;
`;

const Div = styled.div`
  &:before {
    content: "";
    position: absolute;
    width: ${({ _width }) => (_width ? _width : 200)}px;
    height: 6px;
    top: -4px;
    left: ${({ _left }) => (_left ? `${_left}px` : "50%")};
    background: ${themes.vars.bgColorPrimary};
    transform: translateX(-45%);
    ${({ _animationEnabled }) =>
      _animationEnabled &&
      css`
        transition: background 1.2s ease-out;
      `}
    z-index: 2;
  }

  &:after {
    content: "";
    position: absolute;
    border: 2px solid
      ${({ _borderColor }) => (_borderColor ? _borderColor : "#e74848")};
    border-radius: 0 50px 0 0;
    width: ${({ _width }) => (_width ? _width : 200)}px;
    height: 30px;
    top: -32px;
    left: ${({ _left }) => (_left ? `${_left}px` : "50%")};
    transform: translateX(-45%);
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }
`;

export default Blockquote;
