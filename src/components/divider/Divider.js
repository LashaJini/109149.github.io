import React from "react";
import styled from "styled-components";
import { themes } from "../../constants";

const SVG = styled.svg`
  width: ${({ _width }) => (_width ? _width : "100%")};
  height: ${({ _height }) => (_height ? _height : "100%")};
  fill: ${({ _fill }) => (_fill ? _fill : themes.vars.bgColorPrimary)};
  display: block; /* for the empty line... */
`;

const Path = styled.path`
  fill: ${({ _fill }) => (_fill ? _fill : themes.vars.bgColorPrimary)};
`;

/**
 * @author 109149
 * @time Thu 08 Apr 2021 16:49:09 +04
 *
 * @param {string} [width=100%] - Width of svg.
 * @param {string} [height=100%] - Height of svg.
 * @param {string} [fill=black] - Color of path.
 */
const Divider = ({
  width = "100%",
  height = "100%",
  fill = themes.vars.bgColorPrimary,
}) => {
  return <Divider5 width={width} height={height} fill={fill} />;
};

// eslint-disable-next-line
function Divider5({ width, height, fill }) {
  return (
    <SVG
      _width={width}
      _height={height}
      _fill={fill}
      viewBox="0 0 270.93335 135.46666"
      version="1.1"
    >
      <g transform="matrix(1.3009447,0,0,3.4211344,-1.6517685,-735.27499)">
        <Path
          _fill={fill}
          d="m 1.2696685,214.9214 c 19.4110085,0.60497 16.1533995,4.21154 29.1463535,10.88656 38.534495,17.49535 48.527011,-12.48883 84.745048,-10.68867 18.4644,0.91774 33.10224,11.60992 51.20858,4.2125 16.02347,-6.54646 25.31655,-3.33851 43.15893,-4.41039 v 39.597 H 1.2696685 Z"
        />
      </g>
    </SVG>
  );
}

// eslint-disable-next-line
function Divider4({ width, height, fill }) {
  return (
    <SVG
      _width={width}
      _height={height}
      _fill={fill}
      viewBox="0 0 270.93335 67.733337"
      version="1.1"
    >
      <g transform="matrix(1.3009447,0,0,1.7105673,-1.6517685,-367.63752)">
        <Path
          _fill={fill}
          d="m 1.2696685,214.9214 c 19.4110085,0.60497 16.1533995,4.21154 29.1463535,10.88656 37.788238,19.41338 48.440367,-12.26614 84.745048,-10.68867 18.50107,0.80389 33.10224,11.60992 51.20858,4.2125 16.02347,-6.54646 25.31655,-3.33851 43.15893,-4.41039 v 39.597 H 1.2696685 Z"
        />
      </g>
    </SVG>
  );
}

// eslint-disable-next-line
function Divider3({ width, height, fill }) {
  return (
    <SVG
      _width={width}
      _height={height}
      _fill={fill}
      viewBox="0 0 338.66669 52.916668"
      version="1.1"
    >
      <g
        id="layer1"
        transform="matrix(1.6261809,0,0,1.3363807,-2.0647107,-287.21681)"
      >
        <Path d="m 1.2696685,214.9214 c 19.4110085,0.60497 16.1533995,4.21154 29.1463535,10.88656 37.788238,19.41338 48.440367,-12.26614 84.745048,-10.68867 18.50107,0.80389 33.10224,11.60992 51.20858,4.2125 16.02347,-6.54646 25.31655,-3.33851 43.15893,-4.41039 v 39.597 H 1.2696685 Z" />
      </g>
    </SVG>
  );
}

// eslint-disable-next-line
function Divider2({ width, height, fill }) {
  return (
    <SVG
      _width={width}
      _height={height}
      _fill={fill}
      viewBox="0 0 960.97405 20"
      version="1.1"
    >
      <g id="layer1" transform="translate(51.837475,-214.9214)">
        <Path
          _fill={fill}
          d="m -51.837475,214.9214 c 41.740854,2.30228 88.001111,2.84948 153.635435,4.52842 224.73771,5.74886 204.37483,-5.22522 371.8964,-4.42845 85.36991,0.40605 160.64168,8.73768 244.19024,5.00132 73.93746,-3.30655 108.92148,-4.55989 191.25199,-5.10129 v 20 H -51.837475 Z"
        />
      </g>
    </SVG>
  );
}

// eslint-disable-next-line
function Divider1({ width, height, fill }) {
  return (
    <SVG
      _width={width}
      _height={height}
      _fill={fill}
      viewBox="0 0 208.25891 81.797447"
    >
      <g id="layer1" transform="translate(-1.2696685,-214.9214)">
        <Path
          id="rect10"
          _fill={fill}
          d="m 1.2696685,214.9214 c 9.0459305,9.41604 19.0712905,11.65401 33.2953305,18.52069 48.70436,23.51209 44.29139,-21.37051 80.596071,-18.1118 18.50107,1.66066 33.10224,23.98309 51.20858,8.70187 16.02347,-13.52334 25.31655,-6.89649 43.15893,-9.11076 v 81.79745 H 1.2696685 Z"
        />
      </g>
    </SVG>
  );
}

export default Divider;
