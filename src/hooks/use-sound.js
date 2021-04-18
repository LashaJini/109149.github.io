import { useLocalStorage } from "./";

const useSound = (mode) => {
  const [soundMode, setSoundMode] = useLocalStorage("109149-sound-mode", mode);

  return [soundMode, setSoundMode];
};

export default useSound;
