import React from "react";
import { Linkable, Title } from "../../";
import styled from "styled-components";
import { themes } from "../../../constants";

const index = () => {
  return (
    <>
      <Logo>
        <Linkable url="https://109149.github.io">
          {/* <Title>109🗲149</Title> */}
          <Title>{"<109149 />"}</Title>
        </Linkable>
      </Logo>
    </>
  );
};

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px;

  a {
    color: ${themes.vars.titleColorPrimary};
  }
`;

export default index;
