import React from "react";
import styled from "styled-components";
import { Linkable } from "../";

const Div = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  &:hover {
    svg {
      fill: rgb(235, 25, 110);
      transform: scale(1.5);
    }
  }

  div {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:before {
      transform: scale(0);
    }
  }

  div:before {
    content: "";
    width: 44px;
    height: 44px;
    display: block;
    border-radius: 100%;
    background: linear-gradient(45deg, #ff003c, #c648c8);
    box-shadow: 1px 1px 12px rgba(235, 25, 110, 1);
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

const AnimTechButton = ({ children, url }) => {
  return (
    <Div>
      <Linkable url={url}>
        <div>{children}</div>
      </Linkable>
    </Div>
  );
};

export default AnimTechButton;
