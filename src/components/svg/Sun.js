import React from "react";
import SVG from "./SVG";
import styled, { keyframes } from "styled-components";

const Sun = ({ width, height, fill }) => {
  return (
    <SVGExtended
      _width={width}
      _height={height}
      _fill={fill}
      viewBox="0 0 89.40741 99.315796"
    >
      <g id="layer1" transform="translate(-41.535583,-90.645561)">
        <path
          id="middle"
          d="m 110.23929,139.96495 a 24,24 0 0 1 -24.000002,24 24,24 0 0 1 -24,-24 24,24 0 0 1 24,-24 24,24 0 0 1 24.000002,24 z"
        />
        <path
          id="top"
          d="m 93.584152,98.645561 a 8,8 0 0 1 -8,7.999999 8,8 0 0 1 -8,-7.999999 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="top-right"
          d="m 121.6899,112.1544 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="right"
          d="m 131.94299,139.48657 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="bottom-right"
          d="m 121.6899,169.33398 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="bottom"
          d="m 94.894424,181.96136 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="bottom-left"
          d="m 66.788666,169.82019 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="left"
          d="m 57.535583,140.00258 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <path
          id="top-left"
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

  #middle {
    transform: scale(0);
    animation: ${scale} 1s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }

  #top {
    // opacity: 0;
    transform: translate(0) scale(0);
    animation: ${scale} 1s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }
  #top-right {
    // opacity: 0;
    transform: translate(0) scale(0);
    animation: ${scale} 1s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
  }
  #right {
    // opacity: 0;
    transform: translate(0) scale(0);
    animation: ${scale} 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
  #bottom-right {
    // opacity: 0;
    transform: translate(0) scale(0);
    animation: ${scale} 1s;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
  }
  #bottom {
    // opacity: 0;
    transform: translate(0) scale(0);
    animation: ${scale} 1s;
    animation-delay: 0.7s;
    animation-fill-mode: forwards;
  }
  #bottom-left {
    // opacity: 0;
    transform: translate(0) scale(0);
    animation: ${scale} 1s;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
  }
  #left {
    // opacity: 0;
    transform: translate(0) scale(0);
    animation: ${scale} 1s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards;
  }
  #top-left {
    // opacity: 0;
    transform: translate(0) scale(0);
    animation: ${scale} 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`;

export default Sun;
