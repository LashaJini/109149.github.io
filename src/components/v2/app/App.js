import React from "react";
import styled from "styled-components";
import { themes, bp } from "../../../constants";
import Content from "../content";
import Header from "../header";
import Projects from "../projects";
import Footer from "../footer";

document.body.setAttribute("overflow", "visible");
document.body.setAttribute("data-theme", "dark");

const App = () => {
  return (
    <Grid>
      <Line></Line>

      <HeaderGridItem>
        <Header />
      </HeaderGridItem>

      <ContentGridItem>
        <Content />
      </ContentGridItem>

      <ProjectsGridItem>
        <Projects />
      </ProjectsGridItem>

      <FooterGridItem>
        <Footer />
      </FooterGridItem>
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 4fr) 1fr;
  grid-gap: 4rem;

  @media (min-width: ${bp.md}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Line = styled.div`
  background: ${themes.vars.titleColorPrimary};
  width: 100%;
  height: 12px;
  grid-row: 1;
  grid-column: span 5;
`;

const HeaderGridItem = styled.div`
  width: 100%;
  height: 4rem;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  grid-column: 2/5;
`;

const ContentGridItem = styled.div`
  grid-row: 3;
  grid-column: 2/5;
`;

const ProjectsGridItem = styled.div`
  grid-row: 4;
  grid-column: 2/5;
`;

const FooterGridItem = styled.div`
  grid-row: 5;
  grid-column: span 5;
`;
export default App;
