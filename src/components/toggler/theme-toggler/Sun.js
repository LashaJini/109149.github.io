import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: black;
  cursor: pointer;
`;

const SVG = styled.svg`
  width: ${({ _width }) => (_width ? _width : "24px")};
  height: ${({ _height }) => (_height ? _height : "24px")};
`;

const Sun = ({ width, height, onClick }) => {
  return (
    <SVG
      _width={width}
      _height={height}
      viewBox="0 0 89.40741 99.315796"
      onClick={onClick}
    >
      <g id="layer1" transform="translate(-41.535583,-90.645561)">
        <Path
          id="middle"
          d="m 110.23929,139.96495 a 24,24 0 0 1 -24.000002,24 24,24 0 0 1 -24,-24 24,24 0 0 1 24,-24 24,24 0 0 1 24.000002,24 z"
        />
        <Path
          id="top"
          d="m 93.584152,98.645561 a 8,8 0 0 1 -8,7.999999 8,8 0 0 1 -8,-7.999999 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          id="left"
          d="m 57.535583,140.00258 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          id="right"
          d="m 130.94299,137.48657 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          id="bottom"
          d="m 94.894424,181.96136 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          id="bottom-left"
          d="m 66.788666,169.82019 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          id="bottom-right"
          d="m 121.6899,169.33398 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          id="top-right"
          d="m 121.6899,112.1544 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
        <Path
          id="top-left"
          d="m 66.788666,110.60944 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z"
        />
      </g>
    </SVG>
  );
};

export default Sun;
