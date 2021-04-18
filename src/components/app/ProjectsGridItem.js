import React from "react";
import { Card } from "../";
import styled from "styled-components";
import GridItem from "./GridItem";
import ProjectItem from "./ProjectItem";

const ProjectsGridItem = () => {
  return (
    <GridItemExtended>
      <ProjectItem nth="1">
        <Card />
      </ProjectItem>
      <ProjectItem nth="2">
        <Card />
      </ProjectItem>
      <ProjectItem nth="3">
        <Card />
      </ProjectItem>
      <ProjectItem nth="4">
        <Card />
      </ProjectItem>
      <ProjectItem nth="5">
        <Card />
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
