import React from "react";
import GridItem from "./GridItem";
import styled from "styled-components";
import { Thunder1, Title, Paragraph } from "../";
import { SwoopIn } from "../";
import { bp, themes } from "../../constants";
import { useFullyVisible } from "../../hooks";

// TODO: change text color cuz of thunder...
const RecentProjectsGridItem = () => {
  const dummyRef = React.useRef();
  const fullyVisible = useFullyVisible(dummyRef.current);

  return (
    <GridItemExtended>
      <div ref={dummyRef}></div>
      {fullyVisible && (
        <>
          <Div>
            <TitleWrapper>
              <Title>RECENT PROJECTS</Title>
            </TitleWrapper>
            <ParagraphWrapper>
              <Paragraph>
                <SwoopIn from="left" to="right">
                  Solo projects made in my free time.
                </SwoopIn>
              </Paragraph>
            </ParagraphWrapper>
          </Div>
          <Thunder>
            <Thunder1 />
          </Thunder>
        </>
      )}
    </GridItemExtended>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;

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
  top: 0;
  right: 0;
  width: 100vw;
  // height: 100%;

  @media (min-width: ${bp.lg}) {
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
  font-size: 1.25rem;
  color: ${themes.vars.textColorSecondary}; // cuz lightning...

  @media (min-width: ${bp.lg}) {
    color: ${themes.vars.textColorPrimary};
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
`;

export default RecentProjectsGridItem;
