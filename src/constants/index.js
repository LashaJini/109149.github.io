/* css variables; MUST BE IN SYNC with src/index.scss:root */
const css = {
  theme: {
    light: {
      bgColorPrimary: "#ccc",
      bgColorSecondary: "#333333",
      textColorPrimary: "black",
      textColorSecondary: "white",
    },
    dark: {
      bgColorPrimary: "#151515",
      bgColorSecondary: "#333333",
      textColorPrimary: "white",
      textColorSecondary: "black",
    },
  },
};

const themes = {
  dark: "dark",
  light: "light",
  vars: {
    /* css variables; MUST BE IN SYNC with src/index.css:root */
    bgColorPrimary: "var(--bg-color-primary)",
    bgColorSecondary: "var(--bg-color-secondary)",
    textColorPrimary: "var(--text-color-primary)",
    textColorSecondary: "var(--text-color-secondary)",
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

export { bp, acdcYtUrls, css, themes };
