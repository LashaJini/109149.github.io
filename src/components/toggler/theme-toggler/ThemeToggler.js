import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";
import { useDarkMode } from "../../../hooks";
import { css } from "../../../constants";

// TODO: use context for theme instead of state.
const ThemeToggler = ({ width, height, fill, darkModeIsOne = false }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode(darkModeIsOne);
  const [svgFill, setSVGFill] = React.useState(
    fill || css.vars.textColorPrimary
  );

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  const hoverHandler = (color) => {
    setSVGFill(color);
  };

  return (
    <>
      <div onClick={toggleDarkMode}>
        {darkModeEnabled ? (
          <div
            onMouseEnter={() => hoverHandler(css.theme.light.textColorPrimary)}
            onMouseLeave={() => hoverHandler(css.theme.dark.textColorPrimary)}
          >
            <Sun fill={svgFill} width={width} height={height} />
          </div>
        ) : (
          <div
            onMouseEnter={() => hoverHandler(css.theme.dark.textColorPrimary)}
            onMouseLeave={() => hoverHandler(css.theme.light.textColorPrimary)}
          >
            <Moon fill={svgFill} width={width} height={height} />
          </div>
        )}
      </div>
    </>
  );
};

export default ThemeToggler;
