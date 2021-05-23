import React from "react";
import {
  themes,
  soundEnabled,
  animationEnabled,
  musicEnabled,
  oldEnabled,
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

export const PortfolioContext = React.createContext({
  oldEnabled,
  togglePortfolio: () => {},
});

export const SoundContext = React.createContext({
  soundEnabled,
  toggleSound: () => {},
});
