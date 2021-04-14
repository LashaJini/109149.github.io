import React from "react";
import styled from "styled-components";
import {
  // Particles,
  Title,
  Card,
  Footer,
  ThemeContext,
  MenuButtons,
  Logo,
  Divider,
  // DividerUpper,
} from "../";
import { bp, themes } from "../../constants";
import { useDarkMode } from "../../hooks";

const numberOfColumns = 12;

function updateRootHeight() {
  document.querySelector("#root").style.height = `${
    document.querySelector(".app-grid").scrollHeight
  }px`;
}

const App = () => {
  const observableElementRef = React.useRef();
  const [observableElement, setObservableElement] = React.useState();
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();

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

  console.log("render");
  return (
    <ThemeContext.Provider
      value={{
        theme: darkModeEnabled ? themes.dark : themes.light,
        toggleTheme,
      }}
    >
      <Grid className="app-grid">
        <HeaderGridItem className="grid-item-header">
          <LogoGridItem className="logo-wrapper" col="1/2">
            <Logo width="200px" height="100px" />
          </LogoGridItem>
          <DividerGridItem ref={observableElementRef} row="2">
            <Divider />
          </DividerGridItem>
        </HeaderGridItem>

        <Whoami row="2">
          <Title>whoami</Title>
        </Whoami>
        <GridItem row="3">
          <p>
            I am a student, a dog owner. Writing this, was the most boring thing
            to do in this project. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </GridItem>

        <TitleGridItem row="4">
          <Title>Recent Projects</Title>
        </TitleGridItem>
        <GridItem row="5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </GridItem>
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
        </ProjectsItem>

        <TitleGridItem row="7">
          <Title>tech familiar with</Title>
        </TitleGridItem>
        <GridItem row="8">
          tech rotating globe Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </GridItem>

        <TitleGridItem row="9">
          <Title>what i'm into?</Title>
        </TitleGridItem>
        <GridItem row="10">
          <p>
            Rust, wasm, deno... Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </GridItem>

        <GridItem row="11">
          <Footer logo={{ width: "200px", height: "100px" }} />
        </GridItem>
      </Grid>
      <MenuButtons observableElement={observableElement} />
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
  grid-auto-rows: 230px;
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
    grid-auto-rows: 340px;
  }
  @media (min-width: ${bp.sm}) {
    grid-auto-rows: 400px;
  }
  @media (min-width: ${bp.md1}) {
    grid-auto-rows: 480px;
  }
  @media (min-width: ${bp.md}) {
    grid-auto-rows: 520px;
  }
  @media (min-width: ${bp.lg1}) {
    grid-auto-rows: 600px;
  }
  @media (min-width: ${bp.lg}) {
    grid-auto-rows: 680px;
  }
  @media (min-width: ${bp.xl1}) {
    grid-auto-rows: 835px;
  }
  @media (min-width: ${bp.xl}) {
    grid-auto-rows: 900px;
  }
`;

const LogoGridItem = styled(GridItem)`
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const DividerGridItem = styled(GridItem)`
  background: transparent;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 200ms ease;
`;

// const DividerUpperGridItem = styled(GridItem)`
//   background: transparent;
//   position: absolute;
//   top: 10%;
//   right: -8%;
//   grid-column: 2;
//   z-index: 3;
// `;

// const ParticlesGridItem = styled(GridItem)`
//   background: transparent;
//   position: absolute;
//   bottom: 5%;
//   right: 0;
//   z-index: 2;
// `;

const TitleGridItem = styled(GridItem)`
  color: ${themes.vars.titleColorPrimary};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.5rem;
  user-select: none;
`;

const Whoami = styled(TitleGridItem)`
  background: transparent;
  text-transform: none;
`;

const ProjectsItem = styled(GridItem)`
  display: grid;
  grid-template-columns: 1fr 8fr 8fr 8fr 1fr;
  grid-gap: 1rem;
  margin: 0 1rem;
`;

const ProjectItem = styled(GridItem)`
  @media (min-width: ${bp.xxs}) {
    grid-column: span 5;
    grid-row: ${({ nth }) => nth};
  }

  @media (min-width: ${bp.lg1}) {
    grid-column: ${({ nth }) => {
      switch (nth % 3) {
        case 0:
          return "4/5";
        case 2:
          return "3/4";
        case 1:
          return "2/3";
        default:
          return "span 3";
      }
    }};
    grid-row: ${({ nth }) => Math.floor((nth - 1) / 3 + 1)};
  }
`;

export default App;
