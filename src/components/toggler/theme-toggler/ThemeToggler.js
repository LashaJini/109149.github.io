import React from "react";
import { ThemeContext } from "../../";
import { themes } from "../../../constants";
import styled from "styled-components";
import { SunSVG, MoonSVG } from "../../svg";

const ThemeToggler = ({ width, height, fill }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <Div onClick={toggleTheme}>
          {theme === themes.dark ? (
            <SunSVG fill={fill} width={width} height={height} />
          ) : (
            <MoonSVG fill={fill} width={width} height={height} />
          )}
        </Div>
      )}
    </ThemeContext.Consumer>
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

export default ThemeToggler;
