import React from "react";
import styled from "styled-components";
import { themes } from "../../constants";

// TODO: disabled
const Button = (props) => {
  return (
    <>
      <Wrapper _width={props.width} _height={props.height}>
        <A
          href={props.href || "https://google.com"}
          target="_blank"
          rel="noreferrer"
          _fillColor={props.fillColor}
        >
          <p>
            <FillSpan _fillColor={props.fillColor}></FillSpan>
            <TextSpan>{props.children || "Click"}</TextSpan>
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

const TextSpan = styled.span`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateY(100%);
  z-index: 3;
`;

const FillSpan = styled.span`
  width: 10px;
  height: 100%;
  background: ${({ _fillColor }) =>
    _fillColor ? _fillColor : themes.vars.bgColorSecondary};
  position: absolute;
  left: -8%;
  transition: width 400ms ease-out;
  transform: skewX(-10deg);
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
