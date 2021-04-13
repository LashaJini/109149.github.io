import React from "react";
import styled from "styled-components";
import { Linkable } from "../";
import { acdcYtUrls } from "../../constants";
import { useACDC } from "../../hooks";
import acdcWavs from "../../static/sound";

const {
  demonFireURL,
  thunderstruckURL,
  noMansLandURL,
  realizeURL,
  shotInTheDarkURL,
  wildReputationURL,
  backInBlackURL,
} = acdcYtUrls;

// 109149 svg
const Logo = ({ width = "400px", height = "200px" }) => {
  const { play } = useACDC(acdcWavs);

  return (
    <>
      <SVG id="logo-svg" viewBox="-22 0 240 60" _width={width} _height={height}>
        <radialGradient id="radial-gradient">
          <stop offset="10%" stopColor="#63000a" />
          <stop offset="95%" stopColor="#b80013" />
        </radialGradient>
        <LogoScene id="logo-scene" aria-label="109🗲149">
          <g
            id="first_1_wrapper"
            transform="translate(-67.605284,-100.84629)"
            onMouseEnter={play.demonFire}
            className="hoverable"
          >
            <Linkable url={demonFireURL}>
              <OuterStrokeLayer>
                <path
                  d="m 81.69381,157.67453 -7.924796,-7.99253 3.522132,-3.58986 v -28.65119 l -3.522132,3.6576 -6.16373,-6.096 14.088526,-14.08852 4.402664,4.47039 v 40.70772 l 3.589865,3.58986 z"
                  id="first_1"
                />
              </OuterStrokeLayer>
              <FillLayer>
                <use href="#first_1" />
              </FillLayer>
              <InnerStrokeLayer>
                <use href="#first_1" />
              </InnerStrokeLayer>
              <MainStrokeLayer>
                <use href="#first_1" />
              </MainStrokeLayer>
            </Linkable>
          </g>
          <g
            id="first_0_wrapper"
            transform="translate(-67.605284,-100.84629)"
            onMouseEnter={play.noMansLand}
          >
            <Linkable url={noMansLandURL}>
              <OuterStrokeLayer>
                <path
                  d="m 108.24514,117.71188 -7.11199,-7.11199 v 32.71518 l 2.30293,2.2352 4.80906,-4.80906 z m -4.33493,39.96265 -11.582393,-11.58239 v -33.05385 l 12.259723,-12.192 12.46293,12.46293 v 31.36052 z"
                  id="first_0"
                />
              </OuterStrokeLayer>
              <FillLayer>
                <use href="#first_0" />
              </FillLayer>
              <InnerStrokeLayer>
                <use href="#first_0" />
              </InnerStrokeLayer>
              <MainStrokeLayer>
                <use href="#first_0" />
              </MainStrokeLayer>
            </Linkable>
          </g>
          <g
            id="first_9_wrapper"
            transform="translate(-67.605284,-100.84629)"
            onMouseEnter={play.backInBlack}
          >
            <Linkable url={backInBlackURL}>
              <OuterStrokeLayer>
                <path
                  d="m 137.08346,110.59989 -8.80533,8.66986 v 1.8288 l 8.80533,8.66986 z m -3.2512,47.07464 -13.07252,-13.00479 6.36693,-6.2992 7.17973,7.17973 2.30293,-2.2352 v -2.2352 l -16.18826,-16.18826 v -11.17599 l 12.93706,-12.59839 12.05653,11.92106 v 33.05385 z"
                  id="first_9"
                />
              </OuterStrokeLayer>
              <FillLayer>
                <use href="#first_9" />
              </FillLayer>
              <InnerStrokeLayer>
                <use href="#first_9" />
              </InnerStrokeLayer>
              <MainStrokeLayer>
                <use href="#first_9" />
              </MainStrokeLayer>
            </Linkable>
          </g>
          <g
            id="lightning_wrapper"
            transform="translate(-67.605284,-100.84629)"
            onMouseEnter={play.thunderstruck}
          >
            <Linkable url={thunderstruckURL}>
              <OuterStrokeLayer>
                <path
                  d="m 148.36721,154.21349 c 0,0.31658 -0.39548,-0.15829 -0.39548,-0.47486 0,-0.15829 0.0264,-0.25327 0.0791,-0.28492 l 5.11204,-18.30704 -4.88687,-0.34022 c -0.15819,-0.0633 -0.23729,-0.20578 -0.23729,-0.42737 0,-0.22161 0.0527,-0.34824 0.15819,-0.3799 l 9.93291,-23.51322 c 0.0527,-0.0318 8.95544,0.11381 9.03453,0.11381 0.0791,0 -0.0791,-0.0633 0,0 0.10546,0.0633 0,-0.15828 0,0 0,0.12663 0.1944,-0.17818 0.1153,-0.0832 l -5.91967,14.55035 5.77032,-0.12207 c 0.18456,0.0633 0.27683,0.17411 0.27683,0.33239 0,0.2216 -0.0659,0.3799 -0.19773,0.47487 l -18.64444,28.36639 c -0.0527,0.0633 -0.19773,0.18994 -0.19773,0.095 z"
                  id="lightning"
                />
              </OuterStrokeLayer>
              <FillLayer>
                <use href="#lightning" />
              </FillLayer>
              <InnerStrokeLayer>
                <use href="#lightning" />
              </InnerStrokeLayer>
              <MainStrokeLayer>
                <use href="#lightning" />
              </MainStrokeLayer>
            </Linkable>
          </g>
          <g
            id="second_1_wrapper"
            transform="translate(-67.605284,-100.84629)"
            onMouseEnter={play.realize}
          >
            <Linkable url={realizeURL}>
              <OuterStrokeLayer>
                <path
                  d="m 183.03283,157.67453 -7.9248,-7.99253 3.52213,-3.58986 v -28.65119 l -3.52213,3.6576 -6.16373,-6.096 14.08853,-14.08852 4.40266,4.47039 v 40.70772 l 3.58987,3.58986 z"
                  id="second_1"
                />
              </OuterStrokeLayer>
              <FillLayer>
                <use href="#second_1" />
              </FillLayer>
              <InnerStrokeLayer>
                <use href="#second_1" />
              </InnerStrokeLayer>
              <MainStrokeLayer>
                <use href="#second_1" />
              </MainStrokeLayer>
            </Linkable>
          </g>
          <g
            id="first_4_wrapper"
            transform="translate(-67.605284,-100.84629)"
            onMouseEnter={play.shotInTheDark}
          >
            <Linkable url={shotInTheDarkURL}>
              <OuterStrokeLayer>
                <path
                  d="m 208.90379,113.91882 -8.9408,20.99732 h 8.9408 z m 8.80533,29.59945 v 2.57387 l 3.58986,3.58986 -7.99253,7.99253 -7.92479,-7.99253 3.52213,-3.58986 v -2.57387 H 193.4766 l -4.2672,-8.60213 15.44319,-34.00211 h 12.05653 l 4.19946,4.19946 -4.19946,3.99626 v 25.80639 h 8.60213 z"
                  id="first_4"
                />
              </OuterStrokeLayer>
              <FillLayer>
                <use href="#first_4" />
              </FillLayer>
              <InnerStrokeLayer>
                <use href="#first_4" />
              </InnerStrokeLayer>
              <MainStrokeLayer>
                <use href="#first_4" />
              </MainStrokeLayer>
            </Linkable>
          </g>
          <g
            id="second_9_wrapper"
            transform="translate(-67.605284,-100.84629)"
            onMouseEnter={play.wildReputation}
          >
            <Linkable url={wildReputationURL}>
              <OuterStrokeLayer>
                <path
                  d="m 242.75362,110.59989 -8.80533,8.66986 v 1.8288 l 8.80533,8.66986 z m -3.2512,47.07464 -13.07252,-13.00479 6.36693,-6.2992 7.17973,7.17973 2.30293,-2.2352 v -2.2352 l -16.18826,-16.18826 v -11.17599 l 12.93706,-12.59839 12.05653,11.92106 v 33.05385 z"
                  id="second_9"
                />
              </OuterStrokeLayer>
              <FillLayer>
                <use href="#second_9" />
              </FillLayer>
              <InnerStrokeLayer>
                <use href="#second_9" />
              </InnerStrokeLayer>
              <MainStrokeLayer>
                <use href="#second_9" />
              </MainStrokeLayer>
            </Linkable>
          </g>
        </LogoScene>
      </SVG>
    </>
  );
};

const SVG = styled.svg`
  width: ${({ _width }) => (_width ? _width : "400px")};
  height: ${({ _height }) => (_height ? _height : "200px")};
`;

const LogoScene = styled.g``;

const OuterStrokeLayer = styled.g`
  stroke: #63000a;
  stroke-width: 4px;
`;

const FillLayer = styled.g`
  fill: url("#radial-gradient");
`;

const InnerStrokeLayer = styled.g`
  stroke: black;
  fill: url("#radial-gradient");
  stroke-width: 2px;
  transition: all 1s;
  filter: drop-shadow(0 0 5px rgba(255, 186, 3, 0.6));

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }
`;

const MainStrokeLayer = styled.g`
  stroke: rgb(255, 237, 107);
  stroke-dasharray: 17 1;
  stroke-width: 2px;
  fill: none;
  transition: all 1s;
  filter: drop-shadow(0 0 5px rgba(255, 186, 3, 0.6));

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }
`;

export default Logo;
