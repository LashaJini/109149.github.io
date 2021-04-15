import React from "react";
import { Fadeable, Jiggle } from "../";
import { useFullyVisible } from "../../hooks";

const Title = ({ children, delay = 55 }) => {
  const h2Ref = React.useRef();
  const fullyVisible = useFullyVisible(h2Ref.current);

  return (
    <h2 ref={h2Ref}>
      {typeof children === "string" &&
        fullyVisible &&
        children.split("").map((c, i) => {
          if (c === " ") return <span key={i}> </span>;

          return (
            <Fadeable key={i} delay={delay * i}>
              <Jiggle>{c}</Jiggle>
            </Fadeable>
          );
        })}
    </h2>
  );
};

export default Title;
