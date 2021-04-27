import React from "react";
import styled from "styled-components";
import { themes } from "../../constants";
import ReactGA from "react-ga";

// TODO: disabled
const Button = ({
  href,
  width,
  height,
  fillColor,
  children,
  newTab = true,
  ga = false,
  customHandler = undefined,
}) => {
  const handleClick = () => {
    if (ga) {
      ReactGA.event({
        category: "Link",
        action: "Link clicked",
        transport: "beacon",
      });
    }
  };

  return (
    <>
      <Wrapper _width={width} _height={height}>
        <A
          href={href || "https://google.com"}
          target={newTab ? "_blank" : "_self"}
          rel="noreferrer"
          className="hoverable"
          onClick={customHandler || handleClick}
          _lineHeight={height}
          _fillColor={fillColor}
        >
          <p>
            <FillSpan _fillColor={fillColor}></FillSpan>
            <TextSpan>{children || "Click"}</TextSpan>
          </p>
        </A>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ _width }) => (_width ? _width : "150px")};
  height: ${({ _height }) => (_height ? _height : "60px")};
`;

const TextSpan = styled.span``;

const FillSpan = styled.span`
  width: 10px;
  height: 100%;
  background: ${({ _fillColor }) =>
    _fillColor ? _fillColor : themes.vars.bgColorSecondary};
  position: absolute;
  left: -8%;
  transition: width 400ms ease-out;
  transform: skewX(-10deg);
  z-index: -1;
`;

const A = styled.a`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  position: relative;
  padding: 4px;
  color: ${themes.vars.textColorPrimary};
  font-weight: bold;

  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  line-height: ${({ _lineHeight }) => (_lineHeight ? _lineHeight : "60px")};

  &:hover {
    color: ${themes.vars.textColorSecondary};

    ${FillSpan} {
      width: 120%;
    }
  }

  & p {
    border: 1px solid
      ${({ _fillColor }) =>
        _fillColor ? _fillColor : themes.vars.bgColorSecondary};
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    z-index: 1;
    left: 0;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
`;

export default Button;
