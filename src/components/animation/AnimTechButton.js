import React from "react";
import styled, { css } from "styled-components";
import { Linkable } from "../";
import { AnimationContext } from "../";

const Div = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      &:hover {
        svg {
          fill: hsl(0, 100%, 50%);
          transform: scale(1.5);
        }
        a > div:before {
          transform: scale(0);
        }
      }
    `}

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 100%;
    ${({ inset }) =>
      inset
        ? "box-shadow: inset 1px 1px 15px hsl(0, 100%, 50%);"
        : `background: linear-gradient(45deg, hsl(0, 100%, 50%), hsl(0, 100%, 70%));
      box-shadow: 1px 1px 15px hsl(0, 100%, 50%);`}
    transition: all 265ms ease-out;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  svg {
    z-index: 1;
    transition: all 265ms ease-out;
  }
`;

const AnimTechButton = ({ children, url, props /* inset */ }) => {
  const animation = React.useContext(AnimationContext);

  return (
    <Div
      _animationEnabled={animation.animationEnabled}
      className="hoverable"
      {...props}
    >
      <Linkable url={url}>
        <div>{children}</div>
      </Linkable>
    </Div>
  );
};

export default AnimTechButton;
