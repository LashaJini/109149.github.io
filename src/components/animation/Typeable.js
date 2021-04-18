import React from "react";
import styled, { keyframes, css } from "styled-components";
import { themes } from "../../constants";
import { AnimationContext } from "../";

const Typeable = ({ children, cursor = true }) => {
  const iRef = React.useRef();
  const animation = React.useContext(AnimationContext);

  function spanify(str, delay = 0) {
    iRef.current += delay;
    return str.split("").map((c) => {
      iRef.current += 1;

      return (
        <Span
          key={iRef.current}
          _nth={iRef.current}
          _animationEnabled={animation.animationEnabled}
        >
          {c}
        </Span>
      );
    });
  }

  // TODO: maybe add statement for edge cases (?)
  function spanify_rec(children) {
    if (typeof children === "string") {
      return spanify(children, 10);
    }

    // in case if text is wrapped inside another Element
    return React.createElement(
      children.type,
      {},
      spanify_rec(children.props.children)
    );
  }

  if (typeof children === "string") {
    iRef.current = 0;
    return <Wrapper _cursor={cursor}>{spanify(children)}</Wrapper>;
  }

  // array
  if (children.length && typeof children === "object") {
    iRef.current = 0;
    return (
      <Wrapper _cursor={cursor}>
        {children.map((child, i) => {
          return <React.Fragment key={i}>{spanify_rec(child)}</React.Fragment>;
        })}
      </Wrapper>
    );
  }

  return <></>;
};

const blink = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const size = "1.125rem";
const Wrapper = styled.div`
  margin: 1rem;
  font-size: ${size};
  font-weight: bold;
  line-height: 1.5;
  // letter-spacing: 1.5px;
  position: relative;
  display: block;

  ${({ _cursor }) =>
    _cursor &&
    css`
      &:after {
        content: "";
        position: absolute;
        bottom: 0.4rem;
        background: ${themes.vars.textColorPrimary};
        margin-left: 1px;
        width: 8px;
        height: ${size};
        animation: ${blink} 0.55s infinite alternate;
      }
    `};
`;

const appear = keyframes`
  0% {
    // position: relative;
    // opacity: 0;
    color: red;
  }
  20% {
    // position: relative;
    // opacity: 1;
    font-size: ${size};
  }
  100% {
    // position: relative;
    // opacity: 1;
    font-size: ${size};
  }
`;

const Span = styled.span`
  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      // opacity: 0;
      // position: absolute;
      font-size: 0;
      animation: ${appear} 0.3s;
      animation-delay: ${({ _nth }) => (_nth ? _nth * 100 : 100)}ms;
      animation-fill-mode: forwards;
    `}
`;

export default Typeable;
