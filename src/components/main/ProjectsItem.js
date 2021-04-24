import styled from "styled-components";
import GridItem from "./GridItem";

const ProjectsItem = styled(GridItem)`
  display: grid;
  grid-template-columns: 1fr 8fr 8fr 8fr 1fr;
  grid-gap: 1rem;
  margin: 0 1rem;
`;

export default ProjectsItem;
