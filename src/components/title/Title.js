import React from "react";
import { Fadeable, Jiggle } from "../";

const Title = ({ children, delay = 55 }) => {
  return (
    <h2>
      {typeof children === "string" &&
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
