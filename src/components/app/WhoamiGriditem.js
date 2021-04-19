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
            <Typeable writeDelay={1000} writeSpeed={90}>
              I am a CE student, a <Colorable>dog owner</Colorable> and I am{" "}
              <Deleteable
                replaceWith={["bord", "bred", "boed", "!@$#!@$#!@$#"]}
                writeDelay={[1000, 1000, 1000, 400]}
                writeSpeed={[90, 90, 90, 30]}
                delDelay={[1000, 1000, 1000, 1000]}
                delSpeed={[90, 70, 50, 90]}
                result={{ writeDelay: 2000, writeSpeed: 300 }}
              >
                bored
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
