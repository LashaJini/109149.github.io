import styled from "styled-components";
import GridItem from "./GridItem";
import { themes } from "../../constants";

const TitleGridItem = styled(GridItem)`
  color: ${themes.vars.titleColorPrimary};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.25rem;
  user-select: none;
  min-height: 1rem;
  margin-top: 120px;
`;

export default TitleGridItem;
