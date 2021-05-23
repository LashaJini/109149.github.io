import React from "react";
import styled from "styled-components";
import { Fadeable, Jiggle } from "../";

const Title = ({ children, style = {}, delay = 55 }) => {
  return (
    <H2 style={style}>
      {typeof children === "string" &&
        [...children].map((c, i) => {
          if (c === " ") return <span key={i}> </span>;

          return (
            <Fadeable key={i} delay={delay * i}>
              <Jiggle>{c}</Jiggle>
            </Fadeable>
          );
        })}
    </H2>
  );
};

const H2 = styled.h2`
  font-family: "Orelega One";
  font-size: 1.8rem;
  letter-spacing: 4px;
`;

export default Title;
