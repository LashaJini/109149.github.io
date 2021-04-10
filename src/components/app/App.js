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
          </HeaderGridItem>

          <GridItem row="2" ref={observableElementRef}></GridItem>

          <DividerGridItem className="grid-item-divider" row="3">
            <Divider fill="var(--bg-color-primary)" />
          </DividerGridItem>
        </Grid>
        <MenuButtons observableElement={observableElement} />
      </div>
    </ThemeContext.Provider>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numberOfColumns}, 1fr);
  grid-gap: 20px;

  position: absolute;
  width: 100%;
`;

const GridItem = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--bg-color-secondary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: ${({ col }) => (col ? col : `span ${numberOfColumns}`)};
  grid-row: ${({ row }) => (row ? row : "1")};
`;

const HeaderGridItem = styled(GridItem)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-auto-rows: 300px;
  grid-gap: 20px;
  align-items: start;
  background-color: var(--bg-color-secondary);

  position: sticky;
  top: 0;
  z-index: 1;
`;

const LogoGridItem = styled(GridItem)`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const MenuGridItem = styled(GridItem)`
  height: 100px;

  position: sticky;
  top: 0;
  z-index: 1;
`;

const DividerGridItem = styled(GridItem)`
  background-color: transparent;
  position: relative;
  top: -110%;
  z-index: 2;

  @media (min-width: ${bp.xs}) {
    top: -80%;
  }

  @media (min-width: ${bp.sm}) {
    top: -55%;
  }

  @media (min-width: ${bp.md}) {
    top: -45%;
  }

  @media (min-width: ${bp.lg}) {
    top: -35%;
  }
`;

export default App;
