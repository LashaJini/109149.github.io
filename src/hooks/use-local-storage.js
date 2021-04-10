import React from "react";

/**
 * @author 109149
 * @time Sat 10 Apr 2021 15:44:06 +04
 *
 * Hook for handling local storage.
 *
 * @usage
 * const [name, setName] = useLocalStorage("some-key", "some-value");
 * // ...
 * setName("new-value");
 * // after re-render -> name = "new-value" & localStorage["some-key"] = "some-value";
 *
 * @param {string} key is localStorage object key.
 * @param {string} [initialValue] is starting value for current key.
 * @returns {tuple}
 */
const useLocalStorage = (key, initialValue) => {
  const [state, setState] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      // console.error(e);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      value = typeof value === "function" ? value(state) : value;
      setState(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // console.error(e);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
