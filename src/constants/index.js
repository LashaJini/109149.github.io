/* css variables; MUST BE IN SYNC with src/index.scss:root */
const css = {
  theme: {
    light: {
      bgColorPrimary: "#ccc",
      bgColorSecondary: "#333333",
      bgColorSecondary1: "#212121",
      textColorPrimary: "black",
      textColorSecondary: "white",
      titleColorPrimary: "D00000",
    },
    dark: {
      bgColorPrimary: "#151515",
      bgColorSecondary: "#333333",
      bgColorSecondary1: "#212121",
      textColorPrimary: "white",
      textColorSecondary: "black",
      titleColorPrimary: "D00000",
    },
  },
};

/* sound is enabled by default */
const soundEnabled = true;
/* animation is enabled by default */
const animationEnabled = true;
/* music is disabled by default */
const musicEnabled = false;
/* old is disabled by default */
const oldEnabled = false;

const themes = {
  dark: "dark",
  light: "light",
  vars: {
    /* css variables; MUST BE IN SYNC with src/index.css:root */
    bgColorPrimary: "var(--bg-color-primary)",
    bgColorSecondary: "var(--bg-color-secondary)",
    bgColorSecondary1: "var(--bg-color-secondary-1)",
    textColorPrimary: "var(--text-color-primary)",
    textColorSecondary: "var(--text-color-secondary)",
    titleColorPrimary: "var(--title-color-primary)",
  },
};

/* breakpoints; SYNCED with bp.scss and index.scss */
const bp = {
  xxs: "0px" /* extra-extra-small */,
  xs: "320px" /* extra-small */,
  sm1: "360px" /* small-1 */,
  sm2: "440px" /* small-2 */,
  sm: "600px" /* small */,
  md1: "760px" /* medium-1 */,
  md: "960px" /* medium */,
  lg1: "1080px" /* large-1 */,
  lg: "1280px" /* large */,
  xl1: "1500px" /* extra-large-1 */,
  xl: "1920px" /* extra-large */,
};

/* acdc youtube video links */
const acdcYtUrls = {
  demonFireURL: "https://www.youtube.com/watch?v=uMh6kz8zN4I",
  thunderstruckURL: "https://www.youtube.com/watch?v=v2AC41dglnM",
  hellsBellsURL: "https://www.youtube.com/watch?v=etAIpkdhU9Q",
  noMansLandURL: "https://www.youtube.com/watch?v=l5MdhcX7Ro0",
  realizeURL: "https://www.youtube.com/watch?v=ga5qfM2-kog",
  shotInTheDarkURL: "https://www.youtube.com/watch?v=54LEywabkl4",
  wildReputationURL: "https://www.youtube.com/watch?v=PZE89NFYb04",
  backInBlackURL: "https://www.youtube.com/watch?v=pAgnJDJN4VA",
};

const networkUrls = {
  github: "https://github.com/109149/",
  stackoverflow: "https://stackoverflow.com/users/14414945/109149",
  reddit: "https://www.reddit.com/user/109149",
  twitter: "https://twitter.com/109149qwe",
  email: "mailto:109149qwe@gmail.com",
};

const rickRoll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1";

export {
  bp,
  acdcYtUrls,
  css,
  themes,
  rickRoll,
  networkUrls,
  soundEnabled,
  animationEnabled,
  musicEnabled,
  oldEnabled,
};
