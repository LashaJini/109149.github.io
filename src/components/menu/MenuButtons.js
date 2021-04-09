import React from "react";
import styled from "styled-components";
import "./MenuButtons.scss";

const r = 90;

function getX(x) {
  return Math.floor(r * Math.cos(Math.PI / 3 + (Math.PI / 4) * x));
}
function getY(y) {
  return Math.floor(-r * Math.sin(Math.PI / 3 + (Math.PI / 4) * y));
}

const MenuButtons = ({ observableElement }) => {
  const observer = React.useRef();
  const observableElementRef = React.useRef();

  React.useEffect(() => {
    if (observableElement) {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      observableElementRef.current = observableElement;
      observer.current = new IntersectionObserver(handleIntersect, options);
      observer.current.observe(observableElementRef.current);
    }
  }, [observableElement]);

  function handleIntersect(entries, observer) {
    if (!entries[0].isIntersecting && entries[0].intersectionRatio === 0) {
      /* cta */

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
    } else {
      /* menu */

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
  }

  return (
    <Div className="menu-buttons-wrapper">
      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      />

      <Nav className="menu menu-nav">
        <Input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <Label
          className="menu-open-button menu-menu-open-button"
          htmlFor="menu-open"
        >
          <Hamburger1 className="hamburger-1"></Hamburger1>
          <Hamburger2 className="hamburger-2"></Hamburger2>
          <Hamburger3 className="hamburger-3"></Hamburger3>
        </Label>

        <A
          href="https://google.com"
          className="toggler-button"
          _x={getX(0)}
          _y={getY(0)}
        >
          <i className="fa fa-bar-chart"></i>{" "}
        </A>
        <A
          href="https://google.com"
          className="toggler-button"
          _i={2}
          _x={getX(1)}
          _y={getY(1)}
        >
          <i className="fa fa-plus"></i>{" "}
        </A>
        <A
          href="https://google.com"
          className="toggler-button"
          _i={3}
          _x={getX(2)}
          _y={getY(2)}
        >
          <i className="fa fa-heart"></i>{" "}
        </A>
        <A
          href="https://google.com"
          className="toggler-button"
          _i={4}
          _x={getX(3)}
          _y={getY(3)}
        >
          <i className="fa fa-envelope"></i>{" "}
        </A>
        <A
          href="https://google.com"
          className="toggler-button"
          _i={5}
          _x={getX(4)}
          _y={getY(4)}
        >
          <i className="fa fa-cog"></i>{" "}
        </A>
      </Nav>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="0"
        height="0"
      >
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />

            <feGaussianBlur in="goo" stdDeviation="15" result="shadow" />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset in="shadow" dx="-10" dy="10" result="shadow" />

            <feBlend in2="shadow" in="goo" result="goo" />

            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="9" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </Div>
  );
};

const Div = styled.div`
  position: sticky;
  transition: all 1200ms ease;

  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 10;

  transition: all 1200ms ease;
`;

const Nav = styled.nav`
  filter: url("#shadowed-goo");
  // background: rgba(55, 35, 35, 0.2);

  height: 100px;
  font-size: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 1rem;

  position: relative;
  right: 5%;

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
  --fg: var(--bg-color-primary);
  // position: absolute;
  background: var(--fg);
  border-radius: 100%;
  width: 80px;
  height: 80px;
  line-height: 80px;

  color: white;
  text-align: center;

  z-index: 2;
  transition: all;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 500ms;
  // transform: scale(1.1, 1.1) translate3d(0, 0, 0);
  cursor: pointer;

  &:hover {
    transform: scale(1.2, 1.2) translate3d(0, 0, 0);
  }
`;
const Input = styled.input`
  display: none;

  &:checked ~ ${Label} {
    transition-timing-function: linear;
    transition-duration: 200ms;
    transform: scale(0.8, 0.8) translate3d(0, 0, 0);

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

const A = styled.a`
  --fg: var(--bg-color-primary);
  background: var(--fg);
  border-radius: 100%;

  width: 60px;
  height: 60px;
  line-height: 60px;

  color: white;
  text-align: center;
  // transform: translate3d(0, 0, 0);
  transition: all ease-out 2200ms;
  // color: inherit;

  position: absolute;
  // transform: translate3d(${({ _i }) => _i * 35}px, 0, 0);

  &:hover {
    background: white;
    color: var(--fg);
  }

  transition-duration: calc(10ms + (100ms * ${({ _i }) => (_i ? _i : 1)}));

  ${Input}:checked ~ & {
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    &:nth-child(${({ _i }) => (_i ? _i : 1) + 2}) {
      transform: translate3d(${({ _x }) => _x}px, ${({ _y }) => _y}px, 0);
    }
  }

  // transition-delay: 2.2s;
`;

export default MenuButtons;
