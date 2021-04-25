import React from "react";
import {
  MusicContext,
  ThemeContext,
  SoundContext,
  AnimationContext,
  MenuButtons,
} from "../";
import {
  themes,
  soundEnabled as _soundEnabled,
  animationEnabled as _animationEnabled,
  musicEnabled as _musicEnabled,
} from "../../constants";
import styled from "styled-components";
import { useDarkMode, useAnimation, useSound } from "../../hooks";
import Grid from "./Grid";

import HeaderGridItem from "./HeaderGridItem";
import WhoamiGriditem from "./WhoamiGriditem";
import RecentProjectsGridItem from "./RecentProjectsGridItem";
import ProjectsGridItem from "./ProjectsGridItem";
import TechFamiliarGridItem from "./TechFamiliarGridItem";
import IntoGridItem from "./IntoGridItem";
import FooterGridItem from "./FooterGridItem";

function updateRootHeight() {
  // document.querySelector("#root").style.height = `${
  //   document.querySelector(".app-grid").scrollHeight
  // }px`;
}

const Main = () => {
  const observableElementRef = React.useRef();
  const [observableElement, setObservableElement] = React.useState();
  // const [sound, setSound] = React.useState(soundEnabled);

  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
  const [animationEnabled, setAnimationEnabled] = useAnimation(
    _animationEnabled
  );
  const [soundEnabled, setSoundEnabled] = useSound(_soundEnabled);
  const [musicEnabled, setMusicEnabled] = useSound(_musicEnabled);

  const gridRef = React.useRef();
  const resizeObserver = React.useRef();

  React.useEffect(() => {
    if (animationEnabled) {
      document.body.style.setProperty(
        "transition",
        "background 1.2s ease-out, color 1.2s ease-out"
      );
    } else {
      document.body.style.removeProperty("transition");
    }
  }, [animationEnabled]);

  React.useEffect(() => {
    function handler(entries) {
      updateRootHeight();
    }
    resizeObserver.current = new ResizeObserver(handler);
    resizeObserver.current.observe(gridRef.current);
  }, []);

  React.useEffect(() => {
    setObservableElement(observableElementRef.current);
    updateRootHeight();
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", updateRootHeight);
    return () => window.removeEventListener("resize", updateRootHeight);
  }, []);

  const toggleTheme = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const toggleAnimation = () => {
    setAnimationEnabled((prev) => !prev);
  };

  const toggleMusic = (state) => {
    state ? setMusicEnabled(state) : setMusicEnabled((prev) => !prev);
  };

  return (
    <>
      <ThemeContext.Provider
        value={{
          theme: darkModeEnabled ? themes.dark : themes.light,
          toggleTheme,
        }}
      >
        <SoundContext.Provider
          value={{
            soundEnabled,
            toggleSound,
          }}
        >
          <AnimationContext.Provider
            value={{
              animationEnabled,
              toggleAnimation,
            }}
          >
            <MusicContext.Provider
              value={{
                musicEnabled,
                toggleMusic,
              }}
            >
              <Grid
                className="app-grid"
                ref={gridRef}
                _animationEnabled={animationEnabled}
              >
                <Div ref={observableElementRef}></Div>
                <HeaderGridItem className="grid-item-header" />
                <WhoamiGriditem />
                <RecentProjectsGridItem />
                <ProjectsGridItem className="project-cards-grid-item" />
                <TechFamiliarGridItem />
                <IntoGridItem />
                <FooterGridItem />
              </Grid>
              <MenuButtons observableElement={observableElement} />
            </MusicContext.Provider>
          </AnimationContext.Provider>
        </SoundContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

const Div = styled.div`
  position: absolute;
  height: 50vh;
  width: 100%;
`;

export default Main;
