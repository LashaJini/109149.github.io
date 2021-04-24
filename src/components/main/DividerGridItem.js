import styled from "styled-components";
import GridItem from "./GridItem";

const DividerGridItem = styled(GridItem)`
  background: transparent;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 200ms ease;
`;

export default DividerGridItem;
