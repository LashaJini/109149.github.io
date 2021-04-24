import React from "react";
import styled, { css } from "styled-components";
import { Paragraph, Logo2, Neon, Flashlight, Button } from "../";
import { rickRoll } from "../../constants";
import { useHowler } from "../../hooks";
import { neonFlickeringWav } from "../../static/sound";
import { themes } from "../../constants";

// TODO: add switch: normal to flickerring neon
// TODO: add sound toggler
// TODO: responsive (?)
// TODO: keyframes instead of interval (?)
const defaultFill = "hsl(0, 100%, 50%)";
const FoF = () => {
  const { sound: flickering } = useHowler({ src: [neonFlickeringWav] });
  const [p, setP] = React.useState(defaultFill);
  const [neonOn, setNeonOn] = React.useState(false);
  const toggleNeon = () => {
    setP((prev) => (!prev ? defaultFill : undefined));
  };

  React.useEffect(() => {
    let tids = [];
    let timerId;
    if (neonOn) {
      timerId = setInterval(() => {
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
    }

    return () => {
      clearInterval(timerId);
      tids.forEach((id) => clearTimeout(id));
    };
  }, [neonOn, flickering]);

  const handleChange = (event) => {
    setNeonOn((prev) => !prev);
  };

  // console.log("render");
  return (
    <>
      <Wrapper>
        {neonOn ? (
          <LogoWrapper p={p} _neonOn={neonOn}>
            <Logo2
              lightning={{ fill: p, filter: p && "url('#neon-filter-red')" }}
              all={{ fill: defaultFill, filter: "url('#neon-filter-red')" }}
              width="60px"
              height="77px"
            />
            <Neon />
          </LogoWrapper>
        ) : (
          <LogoWrapper>
            <Logo2 all={{ fill: "white" }} width="60px" height="77px" />
            <Neon />
          </LogoWrapper>
        )}
        <Label className="switch" htmlFor="neon-switch">
          <Input
            type="checkbox"
            className="hoverable"
            onChange={handleChange}
            checked={neonOn}
          />
          <Slider className="slider"></Slider>
        </Label>
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
      </Wrapper>
    </>
  );
};

const Label = styled.label`
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
    box-shadow: -3px 0 0.8rem red, inset -3px 0 0.8rem red, 3px 0 0.8rem red,
      inset 3px 0 0.8rem red;
  }

  ${Input}:hover + & {
    box-shadow: 0 0 4px ${defaultFill};
  }

  ${Input}:checked + &:before {
    border: 2px solid ${defaultFill};
    background: ${themes.vars.bgColorPrimary};
    box-shadow: -1px 0 0.2rem red, inset -1px 0 0.2rem red, 1px 0 0.2rem red,
      inset 1px 0 0.2rem red;
    transform: translate(30px, -4px);
  }

  ${Input}:hover + &:before {
    box-shadow: none;
  }
`;

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
  box-sizing: border-box;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  padding: 2rem;
  border: 4px solid transparent;

  ${({ _neonOn }) =>
    _neonOn &&
    css`
      border: 4px solid ${defaultFill};
      border-radius: 10px;
      box-shadow: -3px 0 1rem red, inset -3px 0 1rem red, 3px 0 1rem red,
        inset 3px 0 1rem red;
    `}
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
