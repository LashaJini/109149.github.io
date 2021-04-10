import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";
import { ThemeContext } from "../../";
import { themes } from "../../../constants";
import styled from "styled-components";

const ThemeToggler = ({ width, height, fill }) => {
  const [svgFill, setSVGFill] = React.useState(
    fill || themes.vars.textColorPrimary
  );

  const hoverHandler = (color) => {
    setSVGFill(color);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <Div
          onClick={toggleTheme}
          onMouseEnter={() => hoverHandler(themes.vars.textColorSecondary)}
          onMouseLeave={() => hoverHandler(themes.vars.textColorPrimary)}
        >
          {theme === themes.dark ? (
            <Sun fill={svgFill} width={width} height={height} />
          ) : (
            <Moon fill={svgFill} width={width} height={height} />
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
    background: var(--text-color-primary);
  }
`;

export default ThemeToggler;
