import React from "react";
import { useEventListener } from "./";

/**
 * @author 109149
 * @time Sat 10 Apr 2021 15:54:51 +04
 *
 * Hook for handling prefers-color-scheme media query.
 *
 * @returns {boolean}
 */
const usePrefersDarkMode = () => {
  let mql = window.matchMedia("(prefers-color-scheme: dark)");
  const [prefersDarkMode, setPrefersDarkMode] = React.useState(false);

  const handler = (e) => {
    setPrefersDarkMode(e.matches);
  };
  useEventListener("change", handler, mql);
  return prefersDarkMode;
};

export default usePrefersDarkMode;
