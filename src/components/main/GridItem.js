import styled from "styled-components";
import { themes } from "../../constants";
import { numberOfColumns } from "./Grid";

const GridItem = styled.div`
  margin: 0;
  padding: 0;
  background: ${({ bgColor }) =>
    bgColor ? bgColor : themes.vars.bgColorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: ${({ col }) => (col ? col : `span ${numberOfColumns}`)};
  grid-row: ${({ row }) => (row ? row : "1")};
  z-index: 2;
`;

export default GridItem;
