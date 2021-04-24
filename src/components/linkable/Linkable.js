import React from "react";
import styled from "styled-components";
import { rickRoll } from "../../constants";

const Linkable = ({ url, children, newTab = true }) => {
  return (
    <>
      <A
        className="hoverable"
        href={url || rickRoll}
        target={newTab ? "_blank" : "_self"}
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
