import React from "react";
import SVG from "./SVG";
import styled, { keyframes, css } from "styled-components";

// TODO: sync with bell sound somehow
const Bell = ({ width, height, fill, mode }) => {
  return (
    <>
      <SVGExtended
        _width={width}
        _height={height}
        _fill={fill}
        _mode={mode}
        viewBox="0 0 153.23544 256.2492"
      >
        <g id="bell">
          <path d="m 77.975222,201.66079 c -22.388601,-1.20383 -44.812925,-7.08276 -52.275062,-13.70483 -3.943734,-3.49975 -4.038006,-3.72612 -2.798267,-6.71911 0.705629,-1.70354 4.105488,-5.80767 7.555242,-9.12029 5.173276,-4.96764 6.391479,-6.76838 6.952574,-10.27728 1.093052,-6.83557 3.924693,-12.06496 10.405102,-19.21583 C 57.948574,123.02527 61.774929,107.36938 62.934981,87.541022 63.521751,77.334959 64.138039,73.61562 65.769953,70.431786 68.338378,65.420836 74.111003,60.121576 79.75,57.598126 83.863362,55.757397 84,55.547537 84,51.070632 84,46.203889 86.111857,42 88.556704,42 c 0.828977,0 1.444887,-0.957681 1.447034,-2.25 0.0058,-3.52108 3.419832,-8.248583 7.279331,-10.080035 4.320671,-2.050291 8.689011,-2.126296 13.227151,-0.230141 3.31864,1.386615 7.4783,6.61476 7.48604,9.408966 0.002,0.741835 1.35374,2.609879 3.00374,4.15121 2.55138,2.383342 3,3.542189 3,7.749335 0,4.854902 0.079,4.982292 4.25,6.848791 5.64232,2.524935 11.41409,7.825296 13.97509,12.83366 1.64937,3.225554 2.26364,7.071637 2.96559,18.568214 1.59411,18.691 3.03015,40.84055 15.27579,53.8795 5.87765,6.1621 9.02368,12.07987 10.1429,19.07907 0.52136,3.26046 1.59558,5.1585 4.22067,7.45752 5.70603,4.99725 9.04668,8.87208 10.33917,11.99242 1.14991,2.77613 1.00323,3.11082 -2.86937,6.54745 -7.46214,6.62207 -29.88646,12.501 -52.27506,13.70483 -33.897008,1.2695 -33.431515,0.2517 -52.049558,0 z M 111,41.222506 C 111,36.623734 108.4571,34 104,34 99.542904,34 97,36.623734 97,41.222506 97,43.994641 97.013505,44 104,44 c 6.98649,0 7,-0.0054 7,-2.777494 z" />
        </g>
        <g id="stem">
          <rect
            width="8.4495249"
            height="17.7675161"
            x="74.778488"
            y="183.69652"
          />
          <circle cx="79.035934" cy="208.02022" r="10.2289791" />
        </g>
        <g id="waves">
          <g id="first">
            <path d="m 119.55374,34.326878 c 11.64703,4.938881 13.95776,11.59566 16.67131,19.056648 1.70544,4.689147 -5.68317,7.672801 -5.79231,5.067274 -0.42168,-10.067687 -7.57548,-14.894976 -16.67131,-19.056649 -4.20185,-1.9225 3.4396,-6.064935 5.79231,-5.067273 z" />

            <path
              id="path75"
              d="m 33.373487,34.733522 c -11.64703,4.938881 -13.95776,11.59566 -16.67131,19.056648 -1.70544,4.689147 5.68317,7.672801 5.79231,5.067274 0.42168,-10.067687 7.57548,-14.894976 16.67131,-19.056649 4.20185,-1.9225 -3.4396,-6.064935 -5.79231,-5.067273 z"
            />
          </g>
          <g id="middle">
            <path d="m 130.01303,18.174944 c 14.88674,6.137101 17.84021,14.408879 21.30856,23.679975 2.17982,5.826781 -7.26399,9.534298 -7.40349,6.296645 -0.53897,-12.510207 -9.68265,-18.508643 -21.30855,-23.679978 -5.37063,-2.388917 4.39635,-7.536347 7.40348,-6.296642 z" />
            <path
              id="path77"
              d="M 22.914197,18.581588 C 8.027456,24.718689 5.073986,32.990467 1.605636,42.261563 c -2.17982004,5.826781 7.26399,9.534298 7.40349,6.296645 0.53897,-12.510207 9.682651,-18.508643 21.308551,-23.679978 5.37063,-2.388917 -4.39635,-7.536347 -7.40348,-6.296642 z"
            />
          </g>
          <g id="last">
            <path
              id="path79"
              d="M 13.433867,0.68041443 C -9.4907542,9.53079 -14.038903,21.459606 -19.379933,34.829548 -22.736713,43.232409 -8.1938642,48.579057 -7.9790442,43.910004 -7.1490642,25.868907 6.931606,17.218501 24.834747,9.760866 33.105167,6.3157846 18.064647,-1.1073768 13.433867,0.68041443 Z"
            />
            <path
              id="path71"
              d="M 139.49337,0.27377003 C 162.41799,9.124146 166.96614,21.052962 172.30717,34.422904 175.66395,42.825765 161.1211,48.172413 160.90628,43.50336 160.0763,25.462263 145.99563,16.811857 128.09249,9.354222 c -8.27042,-3.4450818 6.7701,-10.8682431 11.40088,-9.08045197 z"
            />
          </g>
        </g>
        <g id="line">
          <rect
            width="12.784173"
            height="225.88828"
            x="111.88313"
            y="-46.85688"
            transform="translate(0, 14),rotate(32.972379)"
            ry="3.8920865"
          />
        </g>
      </SVGExtended>
    </>
  );
};

const ring = keyframes`
  0%{
    transform-origin: 50% 0;
    transform: translate(-26px) rotate(0);
  }
  25%{
    transform-origin: 50% 0;
    transform: translate(-26px) rotate(-15deg);
  }
  50%{
    transform-origin: 50% 0;
    transform: translate(-26px) rotate(12deg);
  }
  75%{
    transform-origin: 50% 0;
    transform: translate(-26px) rotate(-9deg);
  }
  100%{
    transform-origin: 50% 0;
    transform: translate(-26px) rotate(0);
  }
`;

const moveStem = keyframes`
  0% {
    transform: translate(0, 25px) rotate(0);
  }
  40% {
    transform: translate(0, 25px) rotate(19deg);
  }
  60% {
    transform: translate(0, 25px) rotate(-14deg);
  }
  70% {
    transform: translate(0, 25px) rotate(5deg);
  }
  100% {
    transform: translate(0, 25px) rotate(0);
  }
`;

const wave = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const waveReverse = keyframes`
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const hide = keyframes`
  0% {
    transform: translate(0, 20px);
  }
  10% {
    transform: translate(0, 30px);
  }
  60% {
    transform: translate(0, 30px);
  }
  100% {
    transform: translate(0, -20px);
  }
`;

// eslint-disable-next-line
const liftUpAndDown = keyframes`
  0% {
    transform: translate(-26px);
  }
  10% {
    transform: translate(-26px, -20px);
  }
  60% {
    transform: translate(-26px, -20px);
  }
  100% {
    transform: translate(-26px, 0);
  }
`;

const strike = keyframes`
  0% {
    opacity: 1;
    transform: translate(50px, -50px);
  }
  70% {
    opacity: 1;
    transform: translate(50px, -50px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const strikeReverse = keyframes`
  0% {
    opacity: 1;
    transform: translate(50px, -50px);
  }
  70% {
    opacity: 0;
    transform: translate(50px, -50px);
  }
  100% {
    opacity: 0;
    transform: translate(0);
  }
`;

// const waitForHellsBellsWav = 3.5;
const waitForHellsBellsWav = 0;
const SVGExtended = styled(SVG)`
  ${({ _mode }) =>
    _mode
      ? css`
          #stem {
            transform-origin: 50% 0;
            transform: translate(0, 25px) rotate(0);
            animation: ${moveStem} 2s ease;
            animation-delay: ${waitForHellsBellsWav}s;
            animation-fill-mode: forwards;
          }

          #bell {
            transform: translate(-26px);
            animation: ${ring} 2s;
            animation-delay: ${waitForHellsBellsWav + 0.9}s;
          }

          #first {
            opacity: 0;
            animation: ${wave} 2s;
            animation-delay: ${waitForHellsBellsWav + 1.25}s;
            animation-fill-mode: forwards;
          }
          #middle {
            opacity: 0;
            animation: ${wave} 2s;
            animation-delay: ${waitForHellsBellsWav + 1.45}s;
            animation-fill-mode: forwards;
          }
          #last {
            opacity: 0;
            animation: ${wave} 2s;
            animation-delay: ${waitForHellsBellsWav + 1.65}s;
            animation-fill-mode: forwards;
          }

          #line {
            opacity: 1;
            animation: ${strikeReverse} 0.2s ease;
            animation-delay: 1s;
            animation-fill-mode: forwards;
          }
        `
      : css`
          #stem {
            transform: translate(-11px, 20px);
            animation: ${hide} 2s;
            animation-fill-mode: forwards;
          }

          #bell {
            transform: translate(-26px);
            animation: ${liftUpAndDown} 2s;
            animation-fill-mode: forwards;
          }

          #line {
            opacity: 0;
            animation: ${strike} 0.2s ease;
            animation-delay: 2s;
            animation-fill-mode: forwards;
          }

          #first {
            animation: ${waveReverse} 2s;
            // animation-direction: reverse;
            animation-delay: ${waitForHellsBellsWav + 1.25}s;
            animation-fill-mode: forwards;
          }
          #middle {
            animation: ${waveReverse} 2s;
            // animation-direction: reverse;
            animation-delay: ${waitForHellsBellsWav + 1.05}s;
            animation-fill-mode: forwards;
          }
          #last {
            animation: ${waveReverse} 2s;
            // animation-direction: reverse;
            animation-delay: ${waitForHellsBellsWav + 0.85}s;
            animation-fill-mode: forwards;
          }
        `}
`;

export default Bell;
