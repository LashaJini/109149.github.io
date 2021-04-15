import useFullyVisible from "./use-fully-visible";
import useObservable from "./use-observable";
import useEffectSkipFirstRender from "./use-effect-skip-first-render";
import useDarkMode from "./use-dark-mode";
import usePrefersDarkMode from "./use-prefers-dark-mode";
import useLocalStorage from "./use-local-storage";
import useEventListener from "./use-event-listener";
import useHowler from "./use-howler";
import useACDC from "./use-acdc";

const hooks = {
  useHowler,
  useACDC,
  usePrefersDarkMode,
  useLocalStorage,
  useEventListener,
  useDarkMode,
  useEffectSkipFirstRender,
  useObservable,
  useFullyVisible,
};

export default hooks;
export {
  useHowler,
  useACDC,
  usePrefersDarkMode,
  useLocalStorage,
  useEventListener,
  useDarkMode,
  useEffectSkipFirstRender,
  useObservable,
  useFullyVisible,
};
