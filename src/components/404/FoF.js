import React from "react";
import styled from "styled-components";
import { Paragraph, Logo2, Neon, Flashlight, Button } from "../";
import { rickRoll } from "../../constants";
import { useHowler } from "../../hooks";
import { neonFlickeringWav } from "../../static/sound";

// TODO: add switch: normal to flickerring neon
// TODO: add sound toggler
// TODO: responsive (?)
// TODO: keyframes instead of interval (?)
const defaultFill = "hsl(0, 100%, 50%)";
const FoF = () => {
  const { sound: flickering } = useHowler({ src: [neonFlickeringWav] });
  const [p, setP] = React.useState(defaultFill);
  const toggleNeon = () => {
    setP((prev) => (!prev ? defaultFill : undefined));
  };

  React.useEffect(() => {
    let tids = [];
    const timerId = setInterval(() => {
      tids[0] = setTimeout(() => {
        // flickering.fade(0.5, 0, 950, flickering.play());
        toggleNeon();
      }, 25);
      tids[1] = setTimeout(() => {
        toggleNeon();
      }, 250);
      tids[2] = setTimeout(() => {
        toggleNeon();
      }, 270);
      tids[3] = setTimeout(() => {
        flickering.stop();
      }, 950);
    }, 1000);

    return () => {
      clearInterval(timerId);
      tids.forEach((id) => clearTimeout(id));
    };
  }, [flickering]);

  // console.log("render");
  return (
    <>
      <Wrapper>
        <LogoWrapper p={p}>
          <Logo2
            lightning={{ fill: p, filter: p && "url('#neon-filter-red')" }}
            all={{ fill: defaultFill, filter: "url('#neon-filter-red')" }}
            width="60px"
            height="77px"
          />
          <Neon />
        </LogoWrapper>
        <Choose>
          <Div>
            <Paragraph>Oi, you lost mate?</Paragraph>
          </Div>
          <Buttons>
            <Button
              newTab={false}
              href={"https://109149.github.io"}
              fillColor="hsl(0,100%,30%)"
            >
              home
            </Button>
            <Or>or</Or>
            <Button href={rickRoll}>enjoy</Button>
          </Buttons>
        </Choose>
        <Flashlight />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  padding: 2rem;
  border: 2px solid ${defaultFill};
  border-radius: 10px;
  // filter: url("#neon-filter-red");
  box-shadow: -3px 0 1rem red, inset -3px 0 1rem red, 3px 0 1rem red,
    inset 3px 0 1rem red;
`;

const Div = styled.div`
  margin: 2rem;
  font-size: 1.125rem;
  font-weight: bold;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Or = styled.span`
  margin: 0 1rem;
  font-weight: bold;
`;
const Choose = styled.div`
  position: absolute;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
  z-index: 5;
`;

export default FoF;
