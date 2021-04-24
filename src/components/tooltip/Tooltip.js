import React from "react";
import styled, { keyframes } from "styled-components";
import { themes } from "../../constants";

const Tooltip = ({
  text,
  width,
  height,
  position,
  fillColor,
  attachTo /* styled component must be positioned relative */,
}) => {
  return (
    <Div
      _width={width}
      height={height}
      _attachTo={attachTo}
      _fillColor={fillColor}
    >
      {text}
    </Div>
  );
};

const disappear = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 0.9rem;
  width: ${({ _width }) => (_width ? _width : "100%")};
  height: ${({ _height }) => (_height ? _height : "40px")};
  background: ${({ _fillColor }) =>
    _fillColor ? _fillColor : themes.vars.bgColorSecondary};
  border-radius: 5px;
  position: absolute;
  top: 0;
  opacity: 0;
  transform: translateY(-100%);
  user-select: none;
  z-index: -1;

  ${({ _attachTo }) => _attachTo}:hover ~ & {
    animation: 2500ms ${disappear};
    z-index: 100;
  }
`;

export default Tooltip;
