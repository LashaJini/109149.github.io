import React from "react";
import GridItem from "./GridItem";
import { Footer } from "../";
import styled from "styled-components";

const FooterGridItem = () => {
  return (
    <GridItemExtended className="IOOIOI">
      <FooterWrapper>
        <Footer width="200px" height="100px" />
      </FooterWrapper>
    </GridItemExtended>
  );
};

const GridItemExtended = styled(GridItem)`
  scroll-snap-align: start;
  grid-row: 7;
  // height: 100vh;
  flex-direction: column;
`;

const FooterWrapper = styled.div`
  width: 100%;
`;

export default FooterGridItem;
