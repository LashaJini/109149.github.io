import React from "react";
import styled, { keyframes, css } from "styled-components";
import { themes } from "../../constants";

// TODO: fix on phone - absolute -> relative span issue
const Typeable = ({ children, cursor = true }) => {
  const iRef = React.useRef();

  function spanify(str) {
    return str.split("").map((c) => {
      iRef.current += 1;

      return (
        <Span key={iRef.current} _nth={iRef.current}>
          {c}
        </Span>
      );
    });
  }

  function spanify_rec(children) {
    if (typeof children === "string") {
      return spanify(children);
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
  letter-spacing: 1.5px;
  line-height: 1.5;
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
    position: relative;
    opacity: 0;
  }
  20% {
    position: relative;
    opacity: 1;
  }
  100% {
    position: relative;
    opacity: 1;
  }
`;

const Span = styled.span`
  opacity: 0;
  position: absolute;
  animation: ${appear} 0.3s;
  animation-delay: ${({ _nth }) => (_nth ? _nth * 100 : 100)}ms;
  animation-fill-mode: forwards;
`;

export default Typeable;