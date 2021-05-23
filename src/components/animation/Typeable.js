import React from "react";
import styled, { keyframes, css } from "styled-components";
import { themes } from "../../constants";
import { AnimationContext } from "../";

// currently handles only 1 depth; so, adding more than 1 text wrapped inside html element,
// will crash the app.
const Typeable = ({
  children,
  cursorBottom,
  cursorHeight,
  writeDelay = 1000,
  writeSpeed = 90,
  cursor = true,
  style = {},
}) => {
  const animated = React.useRef(false);
  const iRef = React.useRef();
  const wrapperRef = React.useRef();
  const animation = React.useContext(AnimationContext);
  const [items, setItems] = React.useState(Array(children.length).fill(""));

  React.useEffect(() => {
    iRef.current = 0;
  }, []);

  React.useEffect(() => {
    if (!animation.animationEnabled) {
      setItems(children);
      return;
    }
    if (animated.current) return;
    setItems(Array(children.length).fill(""));

    let ids = [];
    let delay = 0;
    let i = 0;

    // @param {string | {text, type, props, children}} children
    function write(children, ms = 90, _i = 0) {
      if (children.length && typeof children === "object") {
        children.forEach((c) => {
          i++;
          delay += ms;
          ids[i] = setTimeout(() => {
            setItems((prev) => {
              return prev.map((p, j) => {
                if (j === _i) p = (p ?? "") + c;
                return p;
              });
            });
          }, delay);
        });
      } else {
        let elem = React.createElement(children.type, {});

        setItems((prev) => {
          return prev.map((p, j) => {
            if (j === _i) p = elem;
            return p;
          });
        });

        children.text.forEach((c) => {
          i++;
          delay += ms;
          ids[i] = setTimeout(() => {
            setItems((prev) => {
              return prev.map((p, j) => {
                if (p.props && j === _i) {
                  p = React.cloneElement(
                    elem,
                    children.props,
                    (p.props.children ?? "") + c
                  );
                }
                return p;
              });
            });
          }, delay);
        });
      }
    }

    // @param {string} children
    function del(children, ms = 90, _i = 0) {
      children.forEach((c) => {
        i++;
        delay += ms;
        ids[i] = setTimeout(() => {
          setItems((prev) => {
            return prev.map((p, j) => {
              if (j === _i) p = p.substr(0, p.length - 1);
              return p;
            });
          });
        }, delay);
      });
    }

    function rec(children, _i) {
      if (typeof children === "string") {
        let text = children.split("");
        write(text, writeSpeed, _i);
      }

      if (
        children.type &&
        !children.props.delDelay &&
        !children.props.delSpeed &&
        !children.props.replaceWith &&
        !children.props.result &&
        !children.props.writeDelay &&
        !children.props.writeSpeed
      ) {
        // case when its an array... bad solution
        let text = children.props.children;
        if (typeof children.props.children !== "object") {
          text = children.props.children.split("");
        } else {
          text = text.join(" ").split("");
        }

        delay += writeDelay;
        write(
          {
            text,
            type: children.type,
            props: children.props,
            children: children,
          },
          writeSpeed,
          _i
        );
      }

      if (
        children.type &&
        children.props.delDelay &&
        children.props.delSpeed &&
        children.props.replaceWith &&
        children.props.result &&
        children.props.writeDelay &&
        children.props.writeSpeed
      ) {
        const deleteable = {
          replaceWith: children.props.replaceWith.map((r) => r.split("")),
          writeDelay: children.props.writeDelay,
          writeSpeed: children.props.writeSpeed,
          delDelay: children.props.delDelay,
          delSpeed: children.props.delSpeed,
          result: children.props.result,
        };
        const {
          replaceWith,
          writeDelay,
          writeSpeed,
          delDelay,
          delSpeed,
          result,
        } = deleteable;
        const text = children.props.children.split("");

        for (let i = 0; i < replaceWith.length; i++) {
          delay += writeDelay[i];
          write(replaceWith[i], writeSpeed[i], _i);

          delay += delDelay[i];
          del(replaceWith[i], delSpeed[i], _i);
        }

        delay += result.writeDelay;
        write(text, result.writeSpeed, _i);
      }
    }

    children.forEach((child, _i) => rec(child, _i));
    ids[ids.length] = setTimeout(() => (animated.current = true), delay); // in reality, animation is not done yet.

    return () => {
      ids.map((id) => clearTimeout(id));
    };
  }, [children, animation, writeDelay, writeSpeed]);

  return (
    <Wrapper
      _cursor={cursor}
      ref={wrapperRef}
      style={style}
      cursorHeight={cursorHeight}
      cursorBottom={cursorBottom}
    >
      {items.map((item, i) => {
        return <span key={i}>{item}</span>;
      })}
    </Wrapper>
  );
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
        bottom: ${({ cursorBottom }) =>
          cursorBottom ? cursorBottom : "0.38rem"};
        background: ${themes.vars.textColorPrimary};
        margin-left: 1px;
        width: 8px;
        height: ${({ cursorHeight }) => (cursorHeight ? cursorHeight : size)};
        animation: ${blink} 0.55s infinite alternate;
      }
    `};
`;

export default Typeable;
