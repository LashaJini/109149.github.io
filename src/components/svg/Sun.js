import React from "react";
import SVG from "./SVG";
import styled, { keyframes, css } from "styled-components";
import { AnimationContext } from "../";

const Sun = ({ width, height, fill }) => {
  const animation = React.useContext(AnimationContext);

  return (
    <SVGExtended
      _width={width}
      _height={height}
      _fill={fill}
      _animationEnabled={animation.animationEnabled}
      viewBox="0 0 89.40741 99.315796"
    >
      <g id="layer1" transform="translate(-41.535583,-90.645561)">
        <path
          id="middle"
          className="sun-circle"
          d="m 110.23929,139.96495 a 24,24 0 0 1 -24.000002,24 24,24 0 0 1 -24,-24 24,24 0 0 1 24,-24 24,24 0 0 1 24.000002,24 z"
        />
        <path
          id="top"
          className="sun-circle"
          d="m 93.584152,98.645561 a 8,8 0 0 1 -8,7.999999 8,8 0 0 1 -8,-7.999999 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="top-right"
          className="sun-circle"
          d="m 121.6899,112.1544 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="right"
          className="sun-circle"
          d="m 131.94299,139.48657 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="bottom-right"
          className="sun-circle"
          d="m 121.6899,169.33398 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="bottom"
          className="sun-circle"
          d="m 94.894424,181.96136 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="bottom-left"
          className="sun-circle"
          d="m 66.788666,169.82019 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="left"
          className="sun-circle"
          d="m 57.535583,140.00258 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="top-left"
          className="sun-circle"
          d="m 66.788666,110.60944 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
      </g>
    </SVGExtended>
  );
};

const scale = keyframes`
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(.8);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const SVGExtended = styled(SVG)`
  #wtf {
    width: 30px;
    height: 30px;
  }

  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      .sun-circle {
        transform: translate(0) scale(0);
        animation: ${scale} 1s;
        animation-fill-mode: forwards;
      }
    `}

  #middle {
    animation-delay: 0.3s;
  }
  #top {
    animation-delay: 0.3s;
  }
  #top-right {
    animation-delay: 0.4s;
  }
  #right {
    animation-delay: 0.5s;
  }
  #bottom-right {
    animation-delay: 0.6s;
  }
  #bottom {
    animation-delay: 0.7s;
  }
  #bottom-left {
    animation-delay: 0.8s;
  }
  #left {
    animation-delay: 0.9s;
  }
  #top-left {
    animation-delay: 1s;
  }
`;

export default Sun;
