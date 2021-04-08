import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  width: ${({ _width }) => (_width ? _width : "100%")};
  height: ${({ _height }) => (_height ? _height : "100%")};
  display: block; /* for the empty line... */
`;

const Path = styled.path`
  fill: ${({ fillColor }) => fillColor};
`;

/**
 * @author 109149
 * @time Thu 08 Apr 2021 16:49:09 +04
 *
 * @param {string} [width=100%] - Width of svg.
 * @param {string} [height=100%] - Height of svg.
 * @param {string} [fill=black] - Color of path.
 */
const Divider = ({ width = "100%", height = "100%", fill = "black" }) => {
  return (
    <SVG _width={width} _height={height} viewBox="0 0 208.25891 81.797447">
      <g id="layer1" transform="translate(-1.2696685,-214.9214)">
        <Path
          id="rect10"
          fillColor={fill}
          d="m 1.2696685,214.9214 c 9.0459305,9.41604 19.0712905,11.65401 33.2953305,18.52069 48.70436,23.51209 44.29139,-21.37051 80.596071,-18.1118 18.50107,1.66066 33.10224,23.98309 51.20858,8.70187 16.02347,-13.52334 25.31655,-6.89649 43.15893,-9.11076 v 81.79745 H 1.2696685 Z"
        />
      </g>
    </SVG>
  );
};

export default Divider;
