import React from "react";
import { Writable, Jiggle } from "../";
import { useObservable } from "../../hooks";

const Title = ({ children, delay = 100, startTime = 0 }) => {
  const h2Ref = React.useRef();
  const [animated, setAnimated] = React.useState(false);

  useObservable(h2Ref.current, handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  function handleIntersect(entries, observer) {
    if (!animated && entries[0].isIntersecting) {
      setAnimated(true);
    }
  }

  return (
    <h2 ref={h2Ref}>
      {typeof children === "string" &&
        animated &&
        children.split("").map((c, i) => {
          if (c === " ") return <span key={i}> </span>;

          return (
            <Writable key={i} delay={delay * i} startTime={startTime}>
              <Jiggle>{c}</Jiggle>
            </Writable>
          );
        })}
    </h2>
  );
};

export default Title;
