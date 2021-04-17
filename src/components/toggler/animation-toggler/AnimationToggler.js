import React from "react";
import styled from "styled-components";
import { themes } from "../../../constants";
import { ClapperBoardSVG } from "../../svg";
import { AnimationContext } from "../../";

const AnimationToggler = ({ width, height, fill }) => {
  return (
    <AnimationContext.Consumer>
      {({ animationEnabled, toggleAnimation }) => (
        <Div onClick={toggleAnimation}>
          <Toggler>
            <ClapperBoardSVG
              width={width}
              height={height}
              fill={fill}
              animationEnabled={animationEnabled}
            />
          </Toggler>
        </Div>
      )}
    </AnimationContext.Consumer>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Toggler = styled(Div)`
  border-radius: 100%;
  position: absolute;
  background: ${themes.vars.bgColorPrimary};
  z-index: 1;
  // transition: background 1200ms ease, fill 1200ms ease;
  transition: all 200ms ease-out;

  &:hover {
    background: ${themes.vars.textColorPrimary};
    svg {
      fill: ${themes.vars.textColorSecondary};
    }
  }
`;

export default AnimationToggler;
