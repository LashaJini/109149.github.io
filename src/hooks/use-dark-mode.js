import React from "react";
import { useLocalStorage, usePrefersDarkMode } from "./";

/**
 * @author 109149
 * @time Sat 10 Apr 2021 15:56:37 +04
 *
 * Hook for handling dark mode. Prefers localStorage value over system value.
 *
 * @param {*} mode is initial value.
 * @returns {tuple}
 */
const useDarkMode = (mode, inject = false) => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useLocalStorage(
    "109149-dark-mode",
    mode
  );
  const prefersDarkMode = usePrefersDarkMode();
  const enabled = inject || (isDarkModeEnabled ?? prefersDarkMode);

  React.useEffect(() => {
    const body = document.body;
    if (enabled) body.setAttribute("data-theme", "dark");
    else body.setAttribute("data-theme", "light");
  }, [enabled]);

  return [enabled, setIsDarkModeEnabled];
};

export default useDarkMode;
