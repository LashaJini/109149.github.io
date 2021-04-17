import React from "react";
import { themes, soundEnabled } from "../../constants";

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const SoundContext = React.createContext({
  soundEnabled,
  toggleSound: () => {},
});
