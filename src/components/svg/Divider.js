import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants";
import SVG from "./SVG";
import { AnimationContext } from "../";

/**
 * @author 109149
 * @time Thu 08 Apr 2021 16:49:09 +04
 *
 * @param {string} [width=100%] - Width of svg.
 * @param {string} [height=100%] - Height of svg.
 * @param {string} [fill=themes.vars.bgColorPrimary] - Color of path.
 */
const Divider = ({
  width = "100%",
  height = "100%",
  fill = themes.vars.bgColorPrimary,
}) => {
  return <Divider5 width={width} height={height} fill={fill} />;
};

const SVGExtended = styled(SVG)`
  display: block; /* for the empty line... */
  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      transition: fill 1.2s ease-out;
    `}
`;

function Divider5({ width, height, fill }) {
  const animation = React.useContext(AnimationContext);

  return (
    <SVGExtended
      _width={width}
      _height={height}
      _fill={fill}
      _animationEnabled={animation.animationEnabled}
      viewBox="0 0 270.93335 108.46666" // 65
      version="1.1"
    >
      <g transform="matrix(1.3009447,0,0,3.4211344,-1.6517685,-735.27499)">
        <path d="m 1.2696685,214.9214 c 19.4110085,0.60497 16.1533995,4.21154 29.1463535,10.88656 38.534495,17.49535 48.527011,-12.48883 84.745048,-10.68867 18.4644,0.91774 33.10224,11.60992 51.20858,4.2125 16.02347,-6.54646 25.31655,-3.33851 43.15893,-4.41039 v 39.597 H 1.2696685 Z" />
      </g>
    </SVGExtended>
  );
}

export default Divider;
