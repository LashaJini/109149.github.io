import React from "react";
import styled from "styled-components";
import { themes } from "../../../constants";
import { BellSVG } from "../../svg";

const SoundToggler = ({ width, height, fill }) => {
  return (
    <Div>
      <BellSVG width={width} height={height} fill={fill} />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;

  &:hover {
    background: ${themes.vars.textColorPrimary};
    svg {
      fill: ${themes.vars.textColorSecondary};
    }
  }
`;

export default SoundToggler;
