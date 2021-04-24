import React from "react";
import styled, { css } from "styled-components";
import { Paragraph, Logo2, Neon, Flashlight, Button } from "../";
import { rickRoll } from "../../constants";
import { useHowler } from "../../hooks";
import {
  // neonStartWav,
  neonFlickering2Wav as neonFlickeringWav,
} from "../../static/sound";
import { themes } from "../../constants";

// TODO: keyframes instead of interval (?)
const defaultFill = "hsl(0, 100%, 50%)";
const FoF = () => {
  const { sound: flickering } = useHowler({ src: [neonFlickeringWav] });
  const [p, setP] = React.useState(defaultFill);
  const [neonOn, setNeonOn] = React.useState(false);
  const [soundOn, setSoundOn] = React.useState(false);
  const toggleNeon = () => {
    setP((prev) => (!prev ? defaultFill : undefined));
  };

  React.useEffect(() => {
    let tids = [];
    let timerId;
    if (neonOn) {
      let doit = () => {
        tids[0] = setTimeout(() => {
          soundOn && flickering.fade(1, 0, 4000, flickering.play());
          toggleNeon();
        }, 25);
        tids[1] = setTimeout(() => {
          toggleNeon();
        }, 250);
        tids[2] = setTimeout(() => {
          toggleNeon();
        }, 1000);
        tids[3] = setTimeout(() => {
          toggleNeon();
        }, 4000);
      };
      doit();
      timerId = setInterval(() => {
        doit();
      }, 4000);
    }

    return () => {
      clearInterval(timerId);
      tids.forEach((id) => clearTimeout(id));
    };
  }, [neonOn, soundOn, flickering]);

  const handleNeon = (event) => {
    setNeonOn((prev) => {
      prev === true && flickering.stop();
      return !prev;
    });
    setSoundOn(false);
  };
  const handleSound = (event) => {
    if (neonOn) {
      setSoundOn((prev) => {
        prev === true && flickering.stop();
        return !prev;
      });
    }
  };

  return (
    <>
      <Wrapper>
        {neonOn ? (
          <LogoWrapper p={p} _neonOn={neonOn}>
            <Logo2
              lightning={{ fill: p, filter: p && "url('#neon-filter-red')" }}
              all={{ fill: defaultFill, filter: "url('#neon-filter-red')" }}
              width={40}
              height={70}
            />
            <Neon />
          </LogoWrapper>
        ) : (
          <LogoWrapper>
            <Logo2 all={{ fill: "white" }} width={40} height={70} />
            <Neon />
          </LogoWrapper>
        )}
        <LabelWrapper>
          <Label className="switch" htmlFor="neon-switch">
            <Input
              id="neon-switch"
              type="checkbox"
              className="hoverable"
              onChange={handleNeon}
              checked={neonOn}
            />
            <Slider className="slider"></Slider>
          </Label>
          <Label className="switch" htmlFor="sound-switch">
            <Input
              id="sound-switch"
              type="checkbox"
              className="hoverable"
              onChange={handleSound}
              checked={soundOn}
              disabled={neonOn ? false : true}
            />
            <Slider className="slider"></Slider>
          </Label>
        </LabelWrapper>
        <Choose>
          <ParagraphWrapper>
            <Paragraph>Oi, you lost mate?</Paragraph>
          </ParagraphWrapper>
          <Buttons>
            <Button
              newTab={false}
              height="40px"
              width="120px"
              href={"https://109149.github.io"}
              fillColor="hsl(0,100%,30%)"
            >
              home
            </Button>
            <Or>or</Or>
            <Button
              fillColor="hsl(10,100%,50%)"
              href={rickRoll}
              height="40px"
              width="120px"
            >
              enjoy
            </Button>
          </Buttons>
        </Choose>
        <Flashlight />
      </Wrapper>
    </>
  );
};

const LabelWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 2;
  grid-column: 2;
`;

const Label = styled.label`
  margin: 0.5rem;
  position: relative;
  display: inline-block;
  width: 80px;
  height: 48px;
`;

const Input = styled.input`
  z-index: 5;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;

  &:disabled {
    display: none;
  }
`;

const Slider = styled.span`
  position: absolute;
  border: 4px solid black;
  border-radius: 25px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${themes.vars.bgColorPrimary};
  transition: 0.4s;

  &:before {
    border: 4px solid black;
    border-radius: 100%;
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 6px;
    background-color: #ccc;
    transition: 0.4s;
  }

  ${Input}:checked + & {
    border: 2px solid ${defaultFill};
    border-radius: 25px;
    box-shadow: -3px 0 0.8rem ${defaultFill}, inset -3px 0 0.8rem ${defaultFill},
      3px 0 0.8rem ${defaultFill}, inset 3px 0 0.8rem ${defaultFill};
  }

  ${Input}:hover + & {
    box-shadow: 0 0 4px ${defaultFill};
  }

  ${Input}:checked + &:before {
    border: 2px solid ${defaultFill};
    background: ${themes.vars.bgColorPrimary};
    box-shadow: -1px 0 0.2rem ${defaultFill}, inset -1px 0 0.2rem ${defaultFill},
      1px 0 0.2rem ${defaultFill}, inset 1px 0 0.2rem ${defaultFill};
    transform: translate(30px, -4px);
  }

  ${Input}:hover + &:before {
    box-shadow: none;
  }

  ${Input}:disabled + & {
    border: 4px solid grey;
    background: ${themes.vars.bgColorPrimary};
  }
  ${Input}:disabled + &:before {
    border: 4px solid grey;
    background: ${themes.vars.bgColorPrimary};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-gap: 10px;
  user-select: none;
`;

const LogoWrapper = styled.div`
  margin: 2rem 1rem 0 1rem;
  grid-row: 1;
  grid-column: 2;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 4px solid transparent;

  ${({ _neonOn }) =>
    _neonOn &&
    css`
      border: 4px solid ${defaultFill};
      border-radius: 10px;
      box-shadow: -3px 0 1rem ${defaultFill}, inset -3px 0 1rem ${defaultFill},
        3px 0 1rem ${defaultFill}, inset 3px 0 1rem ${defaultFill};
    `}
`;

const ParagraphWrapper = styled.div`
  margin: 1rem;
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
  grid-row: 3;
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default FoF;
