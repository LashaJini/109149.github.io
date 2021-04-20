import React from "react";
import GridItem from "./GridItem";
import styled from "styled-components";
import { Thunder1, Title, Paragraph } from "../";
import { SwoopIn } from "../";
import { themes } from "../../constants";
import { bp } from "../../constants";

const RecentProjectsGridItem = () => {
  return (
    <GridItemExtended>
      <Div>
        <TitleWrapper>
          <Title>RECENT PROJECTS</Title>
        </TitleWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <SwoopIn from="left" to="right">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </SwoopIn>
          </Paragraph>
        </ParagraphWrapper>
      </Div>
      <Thunder>
        <Thunder1 />
      </Thunder>
    </GridItemExtended>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${bp.xxs}) {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @media (min-width: ${bp.lg}) {
    grid-row: 1;
    grid-column: 3;
  }
`;

const Thunder = styled(Div)`
  z-index: -1;
  @media (min-width: ${bp.lg}) {
    // width: 100%;
    // height: 100%;
    // position: absolute;
    grid-row: 1;
    grid-column: 2;
  }
`;

const GridItemExtended = styled(GridItem)`
  scroll-snap-align: start;
  grid-row: 3;
  height: 100vh;
  width: 100%;
  position: relative;

  @media (min-width: ${bp.lg}) {
    display: grid;
    grid-template-columns: 1fr 4fr 4fr 2fr;
  }
`;

const TitleWrapper = styled.div`
  color: ${themes.vars.titleColorPrimary};
  letter-spacing: 2px;
  font-size: 1.25rem;
  user-select: none;
  min-height: 1rem;
  margin-bottom: 1.8rem;
`;

const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 3rem;
  // text-align: center;
`;

export default RecentProjectsGridItem;
