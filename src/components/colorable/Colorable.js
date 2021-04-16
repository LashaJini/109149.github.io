import React from "react";
import styled from "styled-components";
import { themes } from "../../constants";

const Colorable = ({ children }) => {
  return (
    <>
      <Span>{children}</Span>
    </>
  );
};

const Span = styled.span`
  color: ${themes.vars.bgColorPrimary};
  // font-size: 3rem;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
`;

export default Colorable;
