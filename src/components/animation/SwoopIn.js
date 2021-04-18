import React from "react";
import styled, { keyframes, css } from "styled-components";
import { AnimationContext } from "../";

const SwoopIn = ({
  from = "left",
  to = "right",
  children,
  duration,
  sine = false,
  animate = true,
}) => {
  const animation = React.useContext(AnimationContext);

  return (
    <Wrapper>
      <Div
        _duration={duration}
        _direction={`${from}-${to}`}
        _sine={false}
        _animate={animate}
        _animationEnabled={animation.animationEnabled}
      >
        {children}
      </Div>
    </Wrapper>
  );
};

function swoop(x, sign = "") {
  return `0% {
    ${x}: ${sign}1000px;
  }
  10% {
    ${x}: 70px;
  }
  20% {
    ${x}: -50px;
  }
  30% {
    ${x}: 45px;
  }
  40% {
    ${x}: -25px;
  }
  50% {
    ${x}: 20px;
  }
  60% {
    ${x}: -15px;
  }
  70% {
    ${x}: 10px;
  }
  80% {
    ${x}: -10px;
  }
  90% {
    ${x}: 5px;
  }
  100% {
    ${x}: 0;
  }`;
}

const swoopTopBot = keyframes`
  ${swoop("top", "-")}
`;
const swoopRightLeft = keyframes`
  ${swoop("right", "-")}
`;
const swoopBotTop = keyframes`
  ${swoop("top", "")}
`;
const swoopLeftRight = keyframes`
  ${swoop("right", "")}
`;

const swoopTopBotNoSine = keyframes`
  from {
    transform: translateY(-1000px);
  }
  to {
    transform: translateY(0);
  }
`;
const swoopRightLeftNoSine = keyframes`
  from {
    transform: translateX(1000px);
  }
  to {
    transform: translateX(0);
  }
`;
const swoopBotTopNoSine = keyframes`
  from {
    transform: translateY(1000px);
  }
  to {
    transform: translateY(0);
  }
`;
const swoopLeftRightNoSine = keyframes`
  from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translate(0);

  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      animation: ${({ _duration }) => (_duration ? _duration : 0.8)}s ease
        ${({ _animate, _direction, _sine }) => {
          if (_animate) {
            if (_sine) {
              switch (_direction) {
                case "top-bot":
                  return css`
                    ${swoopTopBot}
                  `;
                case "right-left":
                  return css`
                    ${swoopRightLeft}
                  `;
                case "bot-top":
                  return css`
                    ${swoopBotTop}
                  `;
                default:
                  return css`
                    ${swoopLeftRight}
                  `;
              }
            } else {
              switch (_direction) {
                case "top-bot":
                  return css`
                    ${swoopTopBotNoSine}
                  `;
                case "right-left":
                  return css`
                    ${swoopRightLeftNoSine}
                  `;
                case "bot-top":
                  return css`
                    ${swoopBotTopNoSine}
                  `;
                default:
                  return css`
                    ${swoopLeftRightNoSine}
                  `;
              }
            }
          }
        }};
    `}
`;

export default SwoopIn;
