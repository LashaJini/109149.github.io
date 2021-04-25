import React from "react";
import {
  themes,
  soundEnabled,
  animationEnabled,
  musicEnabled,
} from "../../constants";

export const MusicContext = React.createContext({
  musicEnabled,
  toggleMusic: () => {},
});

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
