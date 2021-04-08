import React from "react";
import styled from "styled-components";
import { Logo, Divider } from "../";
import { bp } from "../../constants";

const numberOfColumns = 12;
// let row = 1;

const App = () => {
  return (
    <div style={{ height: "5000px" }}>
      <Grid className="grid">
        <HeaderGridItem className="grid-item-header">
          <LogoGridItem className="logo-wrapper" col="1/2">
            <Logo width="200px" height="100px" />
          </LogoGridItem>
          <MenuGridItem className="menu-wrapper" col="2/3">
            <Div></Div>
            <Div></Div>
            <Div></Div>
            <Div></Div>
          </MenuGridItem>
        </HeaderGridItem>

        <DividerGridItem className="grid-item-divider" row="2">
          <Divider fill="var(--bg-color-primary)" />
        </DividerGridItem>

        <GridItem row="3">
          <Div2></Div2>
        </GridItem>
      </Grid>
    </div>
  );
};

const Div = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  background: green;
`;
const Div2 = styled.div`
  display: inline-block;
  width: 100%;
  height: 500px;
  background: green;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numberOfColumns}, 1fr);
  grid-gap: 20px;
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

const LogoGridItem = styled(GridItem)``;

const MenuGridItem = styled(GridItem)`
  height: 100px;
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
