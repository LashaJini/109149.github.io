import { useLocalStorage } from "./";

const useAnimation = (mode) => {
  const [animationMode, setAnimationMode] = useLocalStorage(
    "109149-animation-mode",
    mode
  );

  return [animationMode, setAnimationMode];
};

export default useAnimation;
