import React from "react";
import GridItem from "./GridItem";
import styled from "styled-components";
import { TechCard, Thunder1, Title, Paragraph } from "../";
import { SwoopIn } from "../";
import { bp, themes } from "../../constants";
import { useFullyVisible } from "../../hooks";

const TechFamiliarGridItem = () => {
  const [rootX, setRootX] = React.useState(0);
  const dummyRef = React.useRef();
  const fullyVisible = useFullyVisible(dummyRef.current);

  React.useEffect(() => {
    const updateRootX = () => {
      setRootX(window.innerWidth * 0.85);
    };

    window.addEventListener("resize", updateRootX);
    updateRootX();
    return () => window.removeEventListener("resize", updateRootX);
  }, []);

  return (
    <GridItemExtended>
      <div ref={dummyRef}></div>
      {fullyVisible && (
        <>
          <Div>
            <TitleWrapper>
              <Title>TECH FAMILIAR WITH</Title>
            </TitleWrapper>
            <ParagraphWrapper>
              <Paragraph>
                <SwoopIn from="right" to="left">
                  <TechCard />
                </SwoopIn>
              </Paragraph>
            </ParagraphWrapper>
          </Div>
          <Thunder>
            <Thunder1 defaultRootX={rootX} defaultInitialAngle={-30} />
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

  width: 100%;
  height: 100%;
  position: relative;

  @media (min-width: ${bp.lg}) {
    grid-row: 1;
    grid-column: 2;
  }
`;

const Thunder = styled(Div)`
  z-index: -1;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  display: none;

  @media (min-width: ${bp.lg}) {
    display: block;
    grid-row: 1;
    grid-column: 3;
  }
`;
const GridItemExtended = styled(GridItem)`
  scroll-snap-align: start;
  grid-row: 5;
  height: 100vh;
  width: 100%;
  position: relative;
  font-size: 1.5rem;

  @media (min-width: ${bp.lg}) {
    display: grid;
    grid-template-columns: 2fr 4fr 4fr 1fr;
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

  padding: 0 1.5rem;
  // text-align: center;
`;

export default TechFamiliarGridItem;
