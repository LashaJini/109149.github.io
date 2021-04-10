import React from "react";
import styled from "styled-components";
import { themes } from "../../../constants";

const SoundToggler = ({ width, height, fill }) => {
  const [svgFill, setSVGFill] = React.useState(
    fill || themes.vars.textColorPrimary
  );

  const hoverHandler = (color) => {
    setSVGFill(color);
  };

  return (
    <Div
      onMouseEnter={() => hoverHandler(themes.vars.textColorSecondary)}
      onMouseLeave={() => hoverHandler(themes.vars.textColorPrimary)}
    >
      <SVG
        _width={width}
        _height={height}
        _fill={svgFill}
        viewBox="0 0 163.59877 205.72449"
      >
        <g id="g223" transform="translate(-22.198264,-28.072751)">
          <Path
            _fill={svgFill}
            d="m 77.975222,201.66079 c -22.388601,-1.20383 -44.812925,-7.08276 -52.275062,-13.70483 -3.943734,-3.49975 -4.038006,-3.72612 -2.798267,-6.71911 0.705629,-1.70354 4.105488,-5.80767 7.555242,-9.12029 5.173276,-4.96764 6.391479,-6.76838 6.952574,-10.27728 1.093052,-6.83557 3.924693,-12.06496 10.405102,-19.21583 C 57.948574,123.02527 61.774929,107.36938 62.934981,87.541022 63.521751,77.334959 64.138039,73.61562 65.769953,70.431786 68.338378,65.420836 74.111003,60.121576 79.75,57.598126 83.863362,55.757397 84,55.547537 84,51.070632 84,46.203889 86.111857,42 88.556704,42 c 0.828977,0 1.444887,-0.957681 1.447034,-2.25 0.0058,-3.52108 3.419832,-8.248583 7.279331,-10.080035 4.320671,-2.050291 8.689011,-2.126296 13.227151,-0.230141 3.31864,1.386615 7.4783,6.61476 7.48604,9.408966 0.002,0.741835 1.35374,2.609879 3.00374,4.15121 2.55138,2.383342 3,3.542189 3,7.749335 0,4.854902 0.079,4.982292 4.25,6.848791 5.64232,2.524935 11.41409,7.825296 13.97509,12.83366 1.64937,3.225554 2.26364,7.071637 2.96559,18.568214 1.59411,18.691 3.03015,40.84055 15.27579,53.8795 5.87765,6.1621 9.02368,12.07987 10.1429,19.07907 0.52136,3.26046 1.59558,5.1585 4.22067,7.45752 5.70603,4.99725 9.04668,8.87208 10.33917,11.99242 1.14991,2.77613 1.00323,3.11082 -2.86937,6.54745 -7.46214,6.62207 -29.88646,12.501 -52.27506,13.70483 -33.897008,1.2695 -33.431515,0.2517 -52.049558,0 z M 111,41.222506 C 111,36.623734 108.4571,34 104,34 99.542904,34 97,36.623734 97,41.222506 97,43.994641 97.013505,44 104,44 c 6.98649,0 7,-0.0054 7,-2.777494 z"
            id="bell"
          />
          <Path
            _fill={svgFill}
            id="stem"
            d="m 99.835968,202.43245 h 9.444332 v 9.51787 h -9.444332 z"
          />
          <Path
            _fill={svgFill}
            id="ball"
            d="m 119.42496,218.79724 a 25,15 0 0 1 -15,15 15,15 0 0 1 -15,-15 15,15 0 0 1 15,-15 15,15 0 0 1 15,15 z"
          />
        </g>
      </SVG>
    </Div>
  );
};

const Path = styled.path`
  fill: ${({ _fill }) => (_fill ? _fill : themes.vars.textColorPrimary)};
`;

const SVG = styled.svg`
  width: ${({ _width }) => (_width ? _width : "24px")};
  height: ${({ _height }) => (_height ? _height : "24px")};
  fill: ${({ _fill }) => (_fill ? _fill : themes.vars.textColorPrimary)};
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  border-radius: 100%;
  &:hover {
    background: var(--text-color-primary);
  }
`;

export default SoundToggler;
