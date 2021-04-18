import styled from "styled-components";
import GridItem from "./GridItem";
import LogoGridItem from "./LogoGridItem";
import DividerGridItem from "./DividerGridItem";
import { Divider, SwoopIn, Logo } from "../";
import { bp, themes } from "../../constants";

import React from "react";

const HeaderGridItem = () => {
  return (
    <GridItemExtended>
      <LogoGridItem className="logo-wrapper" col="1/2">
        <SwoopIn>
          <Logo width="200px" height="100px" />
        </SwoopIn>
      </LogoGridItem>
      <DividerGridItem row="2">
        <Divider />
      </DividerGridItem>
    </GridItemExtended>
  );
};

const GridItemExtended = styled(GridItem)`
  scroll-snap-align: start;
  grid-row: 1;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-auto-rows: 230px;
  grid-gap: 20px;
  align-items: start;
  background: ${themes.vars.bgColorSecondary};
  background: linear-gradient(
    ${themes.vars.bgColorSecondary1},
    ${themes.vars.bgColorSecondary}
  );

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

export default HeaderGridItem;
