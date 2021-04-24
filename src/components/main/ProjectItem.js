import styled from "styled-components";
import GridItem from "./GridItem";
import { bp } from "../../constants";

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

export default ProjectItem;
