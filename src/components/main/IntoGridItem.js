import React from "react";
import GridItem from "./GridItem";
import styled from "styled-components";
import { WhatAmI, Title } from "../";
import { themes } from "../../constants";
import { useFullyVisible } from "../../hooks";

const IntoGridItem = () => {
  const dummyRef = React.useRef();
  const fullyVisible = useFullyVisible(dummyRef.current);

  return (
    <GridItemExtended>
      <div ref={dummyRef}></div>
      {fullyVisible && (
        <>
          <TitleWrapper>
            <Title>WHAT I'M INTO?</Title>
          </TitleWrapper>
          <WhatAmIWrapper>
            <WhatAmI />
          </WhatAmIWrapper>
        </>
      )}
    </GridItemExtended>
  );
};

const WhatAmIWrapper = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;
const GridItemExtended = styled(GridItem)`
  scroll-snap-align: start;
  grid-row: 6;
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

export default IntoGridItem;
