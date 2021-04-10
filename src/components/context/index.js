import React from "react";
import { themes } from "../../constants";

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
