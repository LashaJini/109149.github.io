/* css variables; MUST BE IN SYNC with src/index.css:root */
const css = {
  theme: {
    light: {
      bgColorPrimary: "#ccc",
      bgColorSecondary: "#333333",
      textColorPrimary: "black",
    },
    dark: {
      bgColorPrimary: "#151515",
      bgColorSecondary: "#333333",
      textColorPrimary: "white",
    },
  },
  vars: {
    bgColorPrimary: "var(--bg-color-primary)",
    bgColorSecondary: "var(--bg-color-secondary)",
    textColorPrimary: "var(--text-color-primary)",
  },
};

/* breakpoints */
const bp = {
  xxs: "0px" /* extra-extra-small */,
  xs: "320px" /* extra-small */,
  sm: "600px" /* small */,
  md: "960px" /* medium */,
  lg: "1280px" /* large */,
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

export { bp, acdcYtUrls, css };
