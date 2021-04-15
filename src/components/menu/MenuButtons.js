import React from "react";
import "./MenuButtons.scss";
import { NetworkToggler, ThemeToggler, SoundToggler, MusicToggler } from "../";
import { bp } from "../../constants";
import { useObservable } from "../../hooks";
import StickyDiv from "./StickyDiv";
import Div from "./Div";
import Nav from "./Nav";
import Label from "./Label";
import Input from "./Input";
import A from "./A";
import { Hamburger1, Hamburger2, Hamburger3 } from "./Hamburger";

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

  // handles initial setup for screen width less than bp.sm
  React.useEffect(() => {
    if (window.innerWidth <= bp.sm.substring(bp.sm.length - 2, 0)) {
      /* cta */
      setIsCta(true);
      ctaMode();
    }
  }, []);

  useObservable(observableElement, handleIntersect, true, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

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

export default MenuButtons;
