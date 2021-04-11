import React from "react";
import styled from "styled-components";
import { ThemeContext, MenuButtons, Logo, Divider } from "../";
import { bp, themes } from "../../constants";
import { useDarkMode } from "../../hooks";

const numberOfColumns = 12;
// let row = 1;

// TODO: row generator
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

          <GridItem row="2">
            <h2 style={{ color: "white" }}>Whoami</h2>
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
  grid-gap: 30px;

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
  background-color: ${themes.vars.bgColorSecondary};

  position: sticky;
  top: 0;
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
  background-color: ${themes.vars.bgColorSecondary};
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

export default App;
