import React from "react";
import styled from "styled-components";
import { rickRoll } from "../../constants";

const Linkable = ({ url, children }) => {
  return (
    <>
      <A
        className="hoverable"
        href={url || rickRoll}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </A>
    </>
  );
};

const A = styled.a`
  text-decoration: none;
`;

export default Linkable;
