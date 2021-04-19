import React from "react";
import styled, { keyframes, css } from "styled-components";
import { themes } from "../../constants";
import { AnimationContext } from "../";

const Typeable = ({ children, cursor = true }) => {
  const iRef = React.useRef();
  const wrapperRef = React.useRef();
  const animation = React.useContext(AnimationContext);
  // const [text, setText] = React.useState([]);
  const [items, setItems] = React.useState(Array(children.length).fill(""));

  function spanify(str, delay = 0, reverse = false) {
    iRef.current += delay;
    const len = str.length + iRef.current; // for deleteable
    return str.split("").map((c) => {
      iRef.current += 1;

      return (
        <Span
          key={iRef.current}
          _nth={iRef.current}
          _animationEnabled={animation.animationEnabled}
          _reverse={reverse}
          _len={len}
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

    // if (children.type && children.type.name === "Deleteable") {
    //   return spanify(children.props.replaceWith[0], 0, true);
    // }

    // in case if text is wrapped inside another Element
    return React.createElement(
      children.type,
      {},
      spanify_rec(children.props.children)
    );
  }

  // if (typeof children === "string") {
  //   iRef.current = 0;
  //   return <Wrapper _cursor={cursor}>{spanify(children)}</Wrapper>;
  // }

  React.useEffect(() => {
    iRef.current = 0;
    // setItems(["a"]);
  }, []);

  React.useEffect(() => {
    let ids = [];
    let delay = 0;

    let curr;
    let repl;
    let writeSpeed;
    let i = 0;

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
                    {},
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

    function del(text, ms = 90, _i = 0) {
      text.forEach((c) => {
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
        curr = children.split("");
        write(curr, 90, _i);
      }

      if (children.type && children.type.name !== "Deleteable") {
        curr = children.props.children.split("");
        delay += 1000;
        write(
          {
            text: curr,
            type: children.type,
            props: children.props,
            children: children,
          },
          90,
          _i
        );
      }

      if (children.type && children.type.name === "Deleteable") {
        curr = children.props.children.split("");
        repl = children.props.replaceWith.map((r) => r.split(""));
        writeSpeed = children.props.writeSpeed;

        delay += 1000;
        write(curr, 90, _i);

        delay += 1000;
        del(curr, 90, _i);

        for (let i = 0; i < repl.length - 1; i++) {
          delay += 1000;
          write(repl[i], writeSpeed[i], _i);

          delay += 1000;
          del(repl[i], 90, _i);
        }
        delay += 1000;
        write(repl[repl.length - 1], writeSpeed[repl.length - 1], _i);
      }
    }

    children.forEach((child, _i) => rec(child, _i));

    return () => {
      ids.map((id) => clearTimeout(id));
    };
    // let str = "";

    // function rec(children) {
    //   if (typeof children === "string") {
    //     // str += children;
    //     // setText((prev) => prev + children);
    //     return children;
    //   }

    //   if (children.type) {
    //     setText(
    //       React.createElement(children.type, {}, rec(children.props.children))
    //     );
    //   }
    // }

    // children.forEach((child) => rec(child));

    // let a = str.split("");
    // let ids = [];

    // a.forEach((elem, i) => {
    //   ids[i] = setTimeout(() => {
    //     setText((prev) => prev + elem);
    //   }, i * 100);
    // });

    // return () => {
    //   ids.map((id) => clearTimeout(id));
    // };
  }, [children]);

  // array
  // if (children.length && typeof children === "object") {
  //   iRef.current = 0;
  //   return (
  //     <Wrapper _cursor={cursor} ref={wrapperRef}>
  //       {text}
  //     </Wrapper>
  //   );
  // }

  return (
    <Wrapper _cursor={cursor} ref={wrapperRef}>
      {items.map((item, i) => {
        // console.log(items);
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
    color: red;
  }
  20% {
    font-size: ${size};
  }
  100% {
    font-size: ${size};
  }
`;

const appearReverse = keyframes`
  0% {
    font-size: ${size};
  }
  10% {
    font-size: 0;
  }
  100% {
    font-size: 0;
  }
`;

const Span = styled.span`
  ${({ _animationEnabled, _reverse }) =>
    _animationEnabled && !_reverse
      ? css`
          font-size: 0;
          animation: ${appear} 0.3s;
          animation-delay: ${({ _nth }) => (_nth ? _nth * 100 : 100)}ms;
          animation-fill-mode: forwards;
        `
      : css`
          font-size: 1;
          animation: ${appearReverse} 0.3s;
          animation-delay: ${({ _nth, _len }) =>
            _nth ? (_len - _nth) * 100 : 100}ms;
          animation-fill-mode: forwards;
        `}
`;

export default Typeable;
