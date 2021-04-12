import React from "react";
import styled from "styled-components";
import { Card, Footer, ThemeContext, MenuButtons, Logo, Divider } from "../";
import { bp, themes } from "../../constants";
import { useDarkMode } from "../../hooks";

const numberOfColumns = 12;

// TODO: do something about 5000px
const App = () => {
  const observableElementRef = React.useRef();
  const [observableElement, setObservableElement] = React.useState();
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();

  React.useEffect(() => {
    setObservableElement(observableElementRef.current);
  }, []);

  const toggleTheme = () => {
    setDarkModeEnabled((prev) => !prev); // TODO: useToggler
  };

  console.log("render");
  return (
    <ThemeContext.Provider
      value={{
        theme: darkModeEnabled ? themes.dark : themes.light,
        toggleTheme,
      }}
    >
      <div style={{ height: "5000px" }}>
        <Grid className="grid">
          <HeaderGridItem className="grid-item-header">
            <LogoGridItem className="logo-wrapper" col="1/2">
              <Logo width="200px" height="100px" />
            </LogoGridItem>
            <DividerGridItem ref={observableElementRef} row="2">
              <Divider />
            </DividerGridItem>
          </HeaderGridItem>

          <Whoami row="2">
            <h2>whoami</h2>
          </Whoami>
          <GridItem row="3">
            <p>
              I am a student, a dog owner. Writing this, was the most boring
              thing to do in this project.
            </p>
          </GridItem>

          <TitleGridItem row="4">
            <h2>Recent Projects</h2>
          </TitleGridItem>
          <GridItem row="5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </GridItem>
          <ProjectsItem className="project-cards-grid-item" row="6">
            <ProjectItem nth="1">
              <Card />
            </ProjectItem>
            <ProjectItem nth="2">
              <Card />
            </ProjectItem>
          </ProjectsItem>

          <TitleGridItem row="7">
            <h2>Tech Familiar with</h2>
          </TitleGridItem>
          <GridItem row="8">tech rotating globe</GridItem>

          <TitleGridItem row="9">
            <h2>What I'm into?</h2>
          </TitleGridItem>
          <GridItem row="10">
            <p>Rust, wasm, deno...</p>
          </GridItem>

          <GridItem row="11">
            <Footer logo={{ width: "200px", height: "100px" }} />
          </GridItem>
        </Grid>
        <MenuButtons observableElement={observableElement} />
      </div>
    </ThemeContext.Provider>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numberOfColumns}, 1fr);
  grid-gap: 5px;

  position: absolute;
  width: 100%;
`;

const GridItem = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : themes.vars.bgColorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: ${({ col }) => (col ? col : `span ${numberOfColumns}`)};
  grid-row: ${({ row }) => (row ? row : "1")};
  z-index: 2;
`;

const HeaderGridItem = styled(GridItem)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-auto-rows: 250px;
  grid-gap: 20px;
  align-items: start;
  // background: linear-gradient(#ccc, ${themes.vars.bgColorSecondary});
  background: ${themes.vars.bgColorSecondary};
  // background: linear-gradient(
  //   ${themes.vars.bgColorPrimary},
  //   ${themes.vars.bgColorSecondary}
  // );

  position: sticky;
  z-index: 1;

  @media (min-width: ${bp.xs}) {
    grid-auto-rows: 280px;
  }
  @media (min-width: ${bp.sm1}) {
    grid-auto-rows: 290px;
  }
  @media (min-width: ${bp.sm2}) {
    grid-auto-rows: 390px;
  }
  @media (min-width: ${bp.sm}) {
    grid-auto-rows: 480px;
  }
  @media (min-width: ${bp.md1}) {
    grid-auto-rows: 580px;
  }
  @media (min-width: ${bp.md}) {
    grid-auto-rows: 640px;
  }
  @media (min-width: ${bp.lg1}) {
    grid-auto-rows: 720px;
  }
  @media (min-width: ${bp.lg}) {
    grid-auto-rows: 860px;
  }
`;

const LogoGridItem = styled(GridItem)`
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const DividerGridItem = styled(GridItem)`
  background-color: transparent;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 200ms ease;
`;

const TitleGridItem = styled(GridItem)`
  color: ${themes.vars.titleColorPrimary};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.5rem;
`;

const Whoami = styled(TitleGridItem)`
  background: transparent;
  text-transform: none;
`;

const ProjectsItem = styled(GridItem)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  margin: 0 1rem;
`;
const ProjectItem = styled(GridItem)`
  @media (min-width: ${bp.xxs}) {
    grid-column: span 4;
    grid-row: ${({ nth }) => nth};
  }

  @media (min-width: ${bp.md1}) {
    grid-column: ${({ nth }) => (nth % 2 === 0 ? "3/5" : "1/3")};
    grid-row: ${({ nth }) => Math.floor((nth - 1) / 2 + 1)};
  }

  @media (min-width: ${bp.lg1}) {
    grid-column: ${({ nth }) => {
      switch (nth % 3) {
        case 0:
          return "4/5";
        case 1:
          return "2/4";
        case 2:
          return "1/2";
        default:
          return "span 3";
      }
    }};
    grid-row: ${({ nth }) => Math.floor((nth - 1) / 3 + 1)};
  }

  @media (min-width: ${bp.xl1}) {
    grid-column: ${({ nth }) => {
      switch (nth % 4) {
        case 0:
          return "4/5";
        case 1:
          return "3/4";
        case 2:
          return "2/3";
        case 3:
          return "1/2";
        default:
          return "span 4";
      }
    }};
    grid-row: ${({ nth }) => Math.floor((nth - 1) / 4 + 1)};
  }
`;

export default App;
