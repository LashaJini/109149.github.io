import styled from "styled-components";
import GridItem from "./GridItem";
import { bp, themes } from "../../constants";

const HeaderGridItem = styled(GridItem)`
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
