import React from "react";
import {
  Blockquote,
  Colorable,
  Typeable,
  Title,
  Paragraph,
  Card,
  Footer,
  ThemeContext,
  SoundContext,
  AnimationContext,
  MenuButtons,
  Logo,
  SwoopIn,
  Divider,
} from "../";
import {
  themes,
  soundEnabled as _soundEnabled,
  animationEnabled as _animationEnabled,
} from "../../constants";
import { useDarkMode, useAnimation, useSound } from "../../hooks";
import Grid from "./Grid";
import GridItem from "./GridItem";
import HeaderGridItem from "./HeaderGridItem";
import LogoGridItem from "./LogoGridItem";
import DividerGridItem from "./DividerGridItem";
import TitleGridItem from "./TitleGridItem";
import WhoamiGridItem from "./WhoamiGridItem";
import ParagraphGridItem from "./ParagraphGridItem";
import ProjectsItem from "./ProjectsItem";
import ProjectItem from "./ProjectItem";

function updateRootHeight() {
  document.querySelector("#root").style.height = `${
    document.querySelector(".app-grid").scrollHeight
  }px`;
}

const App = () => {
  const observableElementRef = React.useRef();
  const [observableElement, setObservableElement] = React.useState();
  // const [sound, setSound] = React.useState(soundEnabled);

  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
  const [animationEnabled, setAnimationEnabled] = useAnimation(
    _animationEnabled
  );
  const [soundEnabled, setSoundEnabled] = useSound(_soundEnabled);

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

  console.log("render");
  return (
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
          <Grid
            className="app-grid"
            ref={gridRef}
            _animationEnabled={animationEnabled}
          >
            <HeaderGridItem className="grid-item-header">
              <LogoGridItem className="logo-wrapper" col="1/2">
                <SwoopIn>
                  <Logo width="200px" height="100px" />
                </SwoopIn>
              </LogoGridItem>
              <DividerGridItem ref={observableElementRef} row="2">
                <Divider />
              </DividerGridItem>
            </HeaderGridItem>

            <WhoamiGridItem row="2">
              <Title># whoami</Title>
            </WhoamiGridItem>
            <ParagraphGridItem row="3">
              <Blockquote>
                <Paragraph>
                  <Typeable>
                    I am a CE student, a <Colorable>dog owner</Colorable> and I
                    am bored.
                  </Typeable>
                </Paragraph>
              </Blockquote>
            </ParagraphGridItem>

            <TitleGridItem row="4">
              <Title>Recent Projects</Title>
            </TitleGridItem>
            <ParagraphGridItem row="5">
              <Paragraph>
                <SwoopIn from="left" to="right">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </SwoopIn>
              </Paragraph>
            </ParagraphGridItem>
            <ProjectsItem className="project-cards-grid-item" row="6">
              <ProjectItem nth="1">
                <Card />
              </ProjectItem>
            </ProjectsItem>

            <TitleGridItem row="7">
              <Title>tech familiar with</Title>
            </TitleGridItem>
            <ParagraphGridItem row="8" className="OIOIOI">
              <Paragraph>
                <SwoopIn from="right" to="left">
                  tech rotating globe Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </SwoopIn>
              </Paragraph>
            </ParagraphGridItem>

            <TitleGridItem row="9">
              <Title>what i'm into?</Title>
            </TitleGridItem>
            <ParagraphGridItem row="10">
              <Paragraph>
                <SwoopIn from="left" to="right">
                  Rust, wasm, deno... Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </SwoopIn>
              </Paragraph>
            </ParagraphGridItem>

            <GridItem row="11">
              <Footer logo={{ width: "200px", height: "100px" }} />
            </GridItem>
          </Grid>
          <MenuButtons observableElement={observableElement} />
        </AnimationContext.Provider>
      </SoundContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
