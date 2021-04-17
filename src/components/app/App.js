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
  MenuButtons,
  Logo,
  SwoopIn,
  Divider,
} from "../";
import { themes, soundEnabled } from "../../constants";
import { useDarkMode } from "../../hooks";
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
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
  const [sound, setSound] = React.useState(soundEnabled);
  const gridRef = React.useRef();
  const resizeObserver = React.useRef();

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
    setSound((prev) => !prev);
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
          soundEnabled: sound,
          toggleSound,
        }}
      >
        <Grid className="app-grid" ref={gridRef}>
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
                  I am a CE student, a <Colorable>dog owner</Colorable> and I am
                  bored.
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
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </SwoopIn>
            </Paragraph>
          </ParagraphGridItem>
          <ProjectsItem className="project-cards-grid-item" row="6">
            <ProjectItem nth="1">
              <Card />
            </ProjectItem>
            <ProjectItem nth="2">
              <Card />
            </ProjectItem>
            <ProjectItem nth="3">
              <Card />
            </ProjectItem>
            <ProjectItem nth="4">
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
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet.
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
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet.
              </SwoopIn>
            </Paragraph>
          </ParagraphGridItem>

          <GridItem row="11">
            <Footer logo={{ width: "200px", height: "100px" }} />
          </GridItem>
        </Grid>
        <MenuButtons observableElement={observableElement} />
      </SoundContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
