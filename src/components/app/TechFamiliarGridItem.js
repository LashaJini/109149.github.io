import React from "react";
import GridItem from "./GridItem";
import styled from "styled-components";
import { Title, Paragraph } from "../";
import { SwoopIn } from "../";
import { themes } from "../../constants";

const TechFamiliarGridItem = () => {
  return (
    <GridItemExtended>
      <TitleWrapper>
        <Title>TECH FAMILIAR WITH</Title>
      </TitleWrapper>
      <ParagraphWrapper>
        <Paragraph>
          <SwoopIn from="right" to="left">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </SwoopIn>
        </Paragraph>
      </ParagraphWrapper>
    </GridItemExtended>
  );
};
const GridItemExtended = styled(GridItem)`
  scroll-snap-align: start;
  grid-row: 5;
  flex-direction: column;
  height: 100vh;
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

export default TechFamiliarGridItem;
