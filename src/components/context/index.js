import React from "react";
import { themes, soundEnabled, animationEnabled } from "../../constants";

export const AnimationContext = React.createContext({
  animationEnabled,
  toggleAnimation: () => {},
});

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const SoundContext = React.createContext({
  soundEnabled,
  toggleSound: () => {},
});
