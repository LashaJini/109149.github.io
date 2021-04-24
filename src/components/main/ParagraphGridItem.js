import styled from "styled-components";
import GridItem from "./GridItem";
import { numberOfColumns } from "./Grid";

const ParagraphGridItem = styled(GridItem)`
  grid-column: 2 / ${numberOfColumns};
  // min-height: 150px; // because of Paragraph component...
`;

export default ParagraphGridItem;
