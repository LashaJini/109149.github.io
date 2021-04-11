import React from "react";
import styled from "styled-components";
import { themes } from "../../../constants";
import { NetworkSVG } from "../../svg";

const NetworkToggler = ({ width, height, fill }) => {
  return (
    <Div>
      <NetworkSVG width={width} height={height} fill={fill} />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${themes.vars.textColorPrimary};
    svg {
      fill: ${themes.vars.textColorSecondary};
    }
  }
`;

export default NetworkToggler;
