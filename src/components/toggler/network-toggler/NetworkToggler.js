import React from "react";
import styled from "styled-components";
import { themes } from "../../../constants";
import {
  EmailSVG,
  TwitterSVG,
  RedditSVG,
  StackoverflowSVG,
  GithubSVG,
  NetworkSVG,
} from "../../svg";

const NetworkToggler = ({ width, height, fill, isCta }) => {
  React.useEffect(() => {
    if (isCta) {
      document.querySelector(".network-toggler").classList.add("cta");
      document.querySelector(".network-toggler").classList.remove("menu");
    } else {
      document.querySelector(".network-toggler").classList.remove("cta");
      document.querySelector(".network-toggler").classList.add("menu");
    }
  }, [isCta]);

  return (
    <Div className="network-toggler">
      <Toggler>
        <NetworkSVG width={width} height={height} fill={fill} />
      </Toggler>

      <Wrapper className="network-icon github-icon">
        <GithubSVG width={width} height={height} fill={fill} />
      </Wrapper>
      <Wrapper className="network-icon stackoverflow-icon" _i={2}>
        <StackoverflowSVG width={width} height={height} fill={fill} />
      </Wrapper>
      <Wrapper className="network-icon reddit-icon" _i={3}>
        <RedditSVG width={width} height={height} fill={fill} />
      </Wrapper>
      <Wrapper className="network-icon twitter-icon" _i={4}>
        <TwitterSVG width={width} height={height} fill={fill} />
      </Wrapper>
      <Wrapper className="network-icon email-icon" _i={5}>
        <EmailSVG width={width} height={height} fill={fill} />
      </Wrapper>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:hover.menu {
    div:nth-child(2) {
      transform: translate(0, 103%);
    }
    div:nth-child(3) {
      transform: translate(0, 206%);
    }
    div:nth-child(4) {
      transform: translate(0, 309%);
    }
    div:nth-child(5) {
      transform: translate(0, 412%);
    }
    div:nth-child(6) {
      transform: translate(0, 515%);
    }
  }

  &:hover.cta {
    div:nth-child(2) {
      transform: translate(0, -103%);
    }
    div:nth-child(3) {
      transform: translate(0, -206%);
    }
    div:nth-child(4) {
      transform: translate(0, -309%);
    }
    div:nth-child(5) {
      transform: translate(0, -412%);
    }
    div:nth-child(6) {
      transform: translate(0, -515%);
    }
  }
`;

const Toggler = styled(Div)`
  border-radius: 100%;
  position: absolute;
  background: ${themes.vars.bgColorPrimary};
  z-index: 1;

  &:hover {
    background: ${themes.vars.textColorPrimary};
    svg {
      fill: ${themes.vars.textColorSecondary};
    }
  }
`;

const Wrapper = styled(Toggler)`
  position: absolute;
  transform: translate(0);
  transition: all ease ${({ _i }) => (_i ? _i * 90 : 200)}ms;
  z-index: -1;
`;

export default NetworkToggler;
