import React from "react";
import SVG from "./SVG";
import styled, { keyframes, css } from "styled-components";
import { AnimationContext } from "../";

const Moon = ({ width, height, fill }) => {
  const animation = React.useContext(AnimationContext);

  return (
    <>
      <SVGExtended
        version="1.1"
        id="svg78"
        _width={width}
        _height={height}
        _fill={fill}
        _animationEnabled={animation.animationEnabled}
        viewBox="0 0 914.24103 1023.7199"
      >
        <g id="g86" transform="translate(-58.089546,-6.1205709)">
          <path
            d="M 544.33055,1029.2602 C 451.77335,1024.2005 365.88812,996.23445 289.547,946.29736 240.17376,914.00079 194.49073,871.01788 159.08308,823.54458 97.125189,740.47368 62.168129,641.15912 58.450119,537.64191 55.267499,449.03106 73.147449,366.16957 112.33309,287.93076 147.28231,218.15045 199.89102,155.52011 264.01079,107.35941 372.4176,25.934491 511.78545,-8.700918 647.83055,11.9733 c 16.5827,2.520015 22.124,4.162819 26.626,7.893769 9.7807,8.105412 10.8094,25.197248 2.0709,34.405676 -1.4833,1.563091 -6.5219,5.100767 -11.1969,7.861503 -56.9632,33.638564 -106.1413,82.425602 -140.2025,139.087512 -34.4611,57.32715 -53.7764,121.43632 -56.6911,188.16238 -3.7751,86.42078 18.4821,167.64986 65.363,238.54662 66.3931,100.40461 170.7535,164.46532 291.0306,178.64657 10.9195,1.28746 22.6169,1.77225 43,1.78211 29.3337,0.0142 40.0889,-0.79899 66.6803,-5.04154 13.1224,-2.09362 16.3739,-2.31498 19.9318,-1.35693 11.0871,2.98544 17.8879,11.96621 17.8879,23.62195 0,7.91154 -2.1066,11.69167 -14.6832,26.34784 -76.7115,89.39604 -184.5859,150.53954 -300.7439,170.46234 -35.4,6.0716 -78.7502,8.716 -112.5729,6.8671 z"
            id="path90"
          />
        </g>
      </SVGExtended>
    </>
  );
};

const doTheMoonThing = keyframes`
  0% {
    transform: rotate(90deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(12deg);
  }
  75% {
    transform: rotate(-9deg);
  }
  100% {
    transform: rotate(0);
  }
`;

const SVGExtended = styled(SVG)`
  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      animation: ${doTheMoonThing} 1s ease;
      animation-fill-mode: forwards;
    `}
`;

export default Moon;
