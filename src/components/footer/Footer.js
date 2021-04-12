import React from "react";
import { Logo } from "../";
import styled from "styled-components";
import { themes } from "../../constants";

const Footer = ({ logo: { width, height } }) => {
  return (
    <>
      <Div>
        <LogoWrapper>
          <Logo width={width} height={height} />
        </LogoWrapper>

        <div>Help me overcome boredom.</div>

        <div>CONTACT BUTTONS</div>

        <div>© 2021-present 109149. All Rights Reserved.</div>
      </Div>
    </>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
  width: 100%;
  height: 300px;
  background: ${themes.vars.bgColorSecondary};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  div {
    margin-bottom: 1.8rem;
  }
`;

export default Footer;
