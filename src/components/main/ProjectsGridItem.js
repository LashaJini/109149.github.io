import React from "react";
import { Card } from "../";
import styled from "styled-components";
import GridItem from "./GridItem";
import ProjectItem from "./ProjectItem";
import projects from "../../data/projects-data.json";

const ProjectsGridItem = () => {
  return (
    <GridItemExtended>
      <ProjectItem nth="1">
        <Card data={projects[1]} />
      </ProjectItem>
      <ProjectItem nth="2">
        <Card data={projects[2]} />
      </ProjectItem>
    </GridItemExtended>
  );
};

const GridItemExtended = styled(GridItem)`
  scroll-snap-align: start;
  grid-row: 4;
  display: grid;
  grid-template-columns: 1fr 8fr 8fr 8fr 1fr;
  grid-gap: 1rem;
  margin: 0 1rem;
`;

export default ProjectsGridItem;
