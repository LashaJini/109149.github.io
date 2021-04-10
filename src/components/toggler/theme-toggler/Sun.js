import React from "react";
import styled from "styled-components";
import SVG from "./SVG";
import { themes } from "../../../constants";

const Path = styled.path`
  fill: ${({ _fill }) => (_fill ? _fill : themes.vars.textColorPrimary)};
  transition: all ease 200ms;
  cursor: pointer;
`;

const Sun = ({ width, height, fill }) => {
  return (
    <SVG
      _width={width}
      _height={height}
      _fill={fill}
      viewBox="0 0 89.40741 99.315796"
    >
      <g id="layer1" transform="translate(-41.535583,-90.645561)">
        <Path
          _fill={fill}
          id="middle"
          d="m 110.23929,139.96495 a 24,24 0 0 1 -24.000002,24 24,24 0 0 1 -24,-24 24,24 0 0 1 24,-24 24,24 0 0 1 24.000002,24 z"
        />
        <Path
          _fill={fill}
          id="top"
          d="m 93.584152,98.645561 a 8,8 0 0 1 -8,7.999999 8,8 0 0 1 -8,-7.999999 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          _fill={fill}
          id="left"
          d="m 57.535583,140.00258 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          _fill={fill}
          id="right"
          d="m 130.94299,137.48657 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          _fill={fill}
          id="bottom"
          d="m 94.894424,181.96136 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          _fill={fill}
          id="bottom-left"
          d="m 66.788666,169.82019 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          _fill={fill}
          id="bottom-right"
          d="m 121.6899,169.33398 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          _fill={fill}
          id="top-right"
          d="m 121.6899,112.1544 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          _fill={fill}
          id="top-left"
          d="m 66.788666,110.60944 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
      </g>
    </SVG>
  );
};

export default Sun;
