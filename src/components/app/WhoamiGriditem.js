import React from "react";
import GridItem from "./GridItem";
import styled from "styled-components";
import {
  Deleteable,
  Blockquote,
  Colorable,
  Typeable,
  Title,
  Paragraph,
} from "../";
import { themes } from "../../constants";

const WhoamiGriditem = () => {
  return (
    <GridItemExtended>
      <TitleWrapper>
        <Title># whoami</Title>
      </TitleWrapper>
      <ParagraphWrapper>
        <Blockquote>
          <Paragraph>
            <Typeable>
              I am a CE student, a <Colorable>dog owner</Colorable> and I am{" "}
              <Deleteable
                after={1}
                replaceWith={["bred", "boed", "!@$#!@$#!@$#", "bored"]}
                writeSpeed={[90, 90, 50, 90]}
              >
                bord
              </Deleteable>
              .
            </Typeable>
          </Paragraph>
        </Blockquote>
      </ParagraphWrapper>
    </GridItemExtended>
  );
};

const GridItemExtended = styled(GridItem)`
  scroll-snap-align: start;
  grid-row: 2;
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
  width: 100%;
`;

export default WhoamiGriditem;
