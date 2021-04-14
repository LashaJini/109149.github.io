import React from "react";
import styled from "styled-components";
import "./MenuButtons.scss";
import { NetworkToggler, ThemeToggler, SoundToggler, MusicToggler } from "../";
import { themes, bp } from "../../constants";
import { useObservable } from "../../hooks";

const r = 90;

const start = (2 * Math.PI) / 5;
const spread = Math.PI / 4;

function getX(x) {
  return Math.floor(r * Math.cos(start + spread * x));
}
function getY(y) {
  return Math.floor(-r * Math.sin(start + spread * y));
}

function ctaMode() {
  /* main */
  document
    .querySelector(".menu-buttons-wrapper")
    .classList.add("cta-menu-buttons-wrapper-nav");
  document
    .querySelector(".menu-buttons-wrapper")
    .classList.remove("menu-menu-buttons-wrapper-nav");

  /* nav */
  document.querySelector(".menu").classList.add("cta-nav");
  document.querySelector(".menu").classList.remove("menu-nav");

  /* label */
  document
    .querySelector(".menu-open-button")
    .classList.add("cta-menu-open-button");
  document
    .querySelector(".menu-open-button")
    .classList.remove("menu-menu-open-button");

  /* a */
  document
    .querySelectorAll(".toggler-button")
    .forEach((x) => x.classList.add("a-cta"));
  document
    .querySelectorAll(".toggler-button")
    .forEach((x) => x.classList.remove("a-nav"));
}

function menuMode() {
  /* label should not be checked */
  document.querySelector("#menu-open").checked = false;

  /* main */
  document
    .querySelector(".menu-buttons-wrapper")
    .classList.remove("cta-menu-buttons-wrapper-nav");
  document
    .querySelector(".menu-buttons-wrapper")
    .classList.add("menu-menu-buttons-wrapper-nav");

  /* nav */
  document.querySelector(".menu").classList.remove("cta-nav");
  document.querySelector(".menu").classList.add("menu-nav");

  /* label */
  document
    .querySelector(".menu-open-button")
    .classList.remove("cta-menu-open-button");
  document
    .querySelector(".menu-open-button")
    .classList.add("menu-menu-open-button");

  /* a */
  document
    .querySelectorAll(".toggler-button")
    .forEach((x) => x.classList.remove("a-cta"));
  document
    .querySelectorAll(".toggler-button")
    .forEach((x) => x.classList.add("a-nav"));
}

const MenuButtons = ({ observableElement }) => {
  const [intersecting, setIntersecting] = React.useState(true);
  const [isCta, setIsCta] = React.useState(false);
  useObservable(observableElement, handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  // handles initial setup for screen width less than bp.sm
  React.useEffect(() => {
    if (window.innerWidth <= bp.sm.substring(bp.sm.length - 2, 0)) {
      /* cta */
      setIsCta(true);
      ctaMode();
    }
  }, []);

  function handleIntersect(entries, observer) {
    if (!entries[0].isIntersecting && entries[0].intersectionRatio <= 0.5) {
      /* cta */
      setIsCta(true);
      setIntersecting(false);
      ctaMode();
    } else {
      if (window.innerWidth > bp.sm.substring(bp.sm.length - 2, 0)) {
        /* menu */
        setIsCta(false);
        setIntersecting(true);
        menuMode();
      }
    }
  }

  React.useEffect(() => {
    function t() {
      if (window.innerWidth <= bp.sm.substring(bp.sm.length - 2, 0)) {
        /* cta */
        setIsCta(true);
        ctaMode();
      } else if (intersecting) {
        /* menu */
        setIsCta(false);
        menuMode();
      }
    }

    window.addEventListener("resize", t);
    return () => window.removeEventListener("resize", t);
  }, [intersecting]);

  return (
    <StickyDiv className="menu-buttons-wrapper">
      <Div>
        <Nav className="menu menu-nav">
          <Input
            type="checkbox"
            href="#"
            className="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <Label
            className="menu-open-button menu-menu-open-button hoverable"
            htmlFor="menu-open"
          >
            <Hamburger1 className="hamburger-1"></Hamburger1>
            <Hamburger2 className="hamburger-2"></Hamburger2>
            <Hamburger3 className="hamburger-3"></Hamburger3>
          </Label>

          <A className="toggler-button hoverable" _x={getX(0)} _y={getY(0)}>
            <NetworkToggler isCta={isCta} />
          </A>
          <A
            className="toggler-button hoverable"
            _i={2}
            _x={getX(1)}
            _y={getY(1)}
          >
            <MusicToggler isCta={isCta} />
          </A>
          <A
            className="toggler-button hoverable"
            _i={3}
            _x={getX(2)}
            _y={getY(2)}
          >
            <SoundToggler />
          </A>
          <A
            className="toggler-button hoverable"
            _i={4}
            _x={getX(3)}
            _y={getY(3)}
          >
            <ThemeToggler />
          </A>
        </Nav>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="0"
          height="0"
        >
          <defs>
            <filter id="cta-filter">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 1 1 1 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 24 -9"
                result="goo"
              />

              <feGaussianBlur in="goo" stdDeviation="5" result="shadow" />
              <feColorMatrix
                in="shadow"
                mode="matrix"
                values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 -0.1"
                result="shadow"
              />
              <feOffset in="shadow" dx="3" dy="10" result="shadow" />

              <feBlend in2="shadow" in="goo" result="goo" />

              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </Div>
    </StickyDiv>
  );
};

const StickyDiv = styled.div`
  position: sticky;
  transition: all 1200ms ease;
  z-index: 10;
  width: 100%;
`;

const Div = styled.div`
  position: absolute;
  top: 0;
  right: 5%;
  transform: translate(-10%);
  transition: all 1200ms ease;
`;

const Nav = styled.nav`
  filter: url("#cta-filter");

  height: 100px;
  font-size: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 1rem;

  position: relative;
  // right: 10%;

  transition: all 2200ms ease;
`;

const Hamburger = styled.span`
  --width: 25px;
  --height: 3px;
  width: var(--width);
  height: var(--height);
  background: white;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: calc(var(--width) / -2);
  margin-top: calc(var(--height) / -2);
  transition: transform 200ms;
`;
const Hamburger1 = styled(Hamburger)`
  transform: translate3d(0, -8px, 0);
`;
const Hamburger2 = styled(Hamburger)`
  transform: translate3d(0, 0, 0);
`;
const Hamburger3 = styled(Hamburger)`
  transform: translate3d(0, 8px, 0);
`;

const Label = styled.label`
  --fg: ${themes.vars.bgColorPrimary};
  background: var(--fg);
  border-radius: 100%;
  width: 80px;
  height: 80px;

  color: white;
  text-align: center;

  z-index: 2;
  transition: all;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 500ms;

  &:hover {
    transform: scale(1.05, 1.05) translate3d(0, 0, 0);
  }
`;
const Input = styled.input`
  display: none;

  &:checked ~ ${Label} {
    transition-timing-function: linear;
    transition-duration: 200ms;
    transform: scale(0.7, 0.7) translate3d(0, 0, 0);

    &:hover {
      transform: scale(0.8, 0.8) translate3d(0, 0, 0);
    }

    ${Hamburger1} {
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    ${Hamburger2} {
      transform: translate3d(0, 0, 0) scale(0.1, 1);
    }
    ${Hamburger3} {
      transform: translate3d(0, 0, 0) rotate(-45deg);
    }
  }
`;

const A = styled.div`
  --fg: ${themes.vars.bgColorPrimary};
  background: var(--fg);
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  color: white;
  text-align: center;
  transition: all ease-out 2200ms;

  position: absolute;

  transition-duration: calc(10ms + (100ms * ${({ _i }) => (_i ? _i : 1)}));

  ${Input}:checked ~ & {
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    &:nth-child(${({ _i }) => (_i ? _i : 1) + 2}) {
      transform: translate3d(${({ _x }) => _x}px, ${({ _y }) => _y}px, 0);
    }
  }
`;

export default MenuButtons;
