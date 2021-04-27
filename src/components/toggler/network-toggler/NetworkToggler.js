import React from "react";
import ReactGA from "react-ga";
import styled, { css } from "styled-components";
import { themes, networkUrls } from "../../../constants";
import {
  EmailSVG,
  TwitterSVG,
  RedditSVG,
  StackoverflowSVG,
  GithubSVG,
  NetworkSVG,
} from "../../svg";
import { AnimationContext } from "../../";
import { Linkable } from "../../";

const NetworkToggler = ({ width, height, fill, isCta }) => {
  const animation = React.useContext(AnimationContext);

  React.useEffect(() => {
    if (isCta) {
      document.querySelector(".network-toggler").classList.add("cta");
      document.querySelector(".network-toggler").classList.remove("menu");
    } else {
      document.querySelector(".network-toggler").classList.remove("cta");
      document.querySelector(".network-toggler").classList.add("menu");
    }
  }, [isCta]);

  const GAHandler = (c) => {
    ReactGA.event({
      category: `cta-${c}`,
      action: "clicked",
      transport: "beacon",
    });
  };

  return (
    <Div className="network-toggler">
      <Toggler>
        <NetworkSVG width={width} height={height} fill={fill} />
      </Toggler>

      <Wrapper
        className="network-icon github-icon"
        _animationEnabled={animation.animationEnabled}
      >
        <Linkable url={networkUrls.github} onClick={() => GAHandler("github")}>
          <GithubSVG width={width} height={height} fill={fill} />
        </Linkable>
      </Wrapper>
      <Wrapper
        className="network-icon stackoverflow-icon"
        _i={2}
        _animationEnabled={animation.animationEnabled}
      >
        <Linkable
          url={networkUrls.stackoverflow}
          onClick={() => GAHandler("stackoverflow")}
        >
          <StackoverflowSVG width={width} height={height} fill={fill} />
        </Linkable>
      </Wrapper>
      <Wrapper
        className="network-icon reddit-icon"
        _i={3}
        _animationEnabled={animation.animationEnabled}
      >
        <Linkable url={networkUrls.reddit} onClick={() => GAHandler("reddit")}>
          <RedditSVG width={width} height={height} fill={fill} />
        </Linkable>
      </Wrapper>
      <Wrapper
        className="network-icon twitter-icon"
        _i={4}
        _animationEnabled={animation.animationEnabled}
      >
        <Linkable
          url={networkUrls.twitter}
          onClick={() => GAHandler("twitter")}
        >
          <TwitterSVG width={width} height={height} fill={fill} />
        </Linkable>
      </Wrapper>
      <Wrapper
        className="network-icon email-icon"
        _i={5}
        _animationEnabled={animation.animationEnabled}
      >
        <Linkable url={networkUrls.email} onClick={() => GAHandler("email")}>
          <EmailSVG width={width} height={height} fill={fill} />
        </Linkable>
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
  // transition: background 1200ms ease, fill 1200ms ease;
  transition: all 200ms ease-out;

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
  transition-property: none;
  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      transition: all ease ${({ _i }) => (_i ? _i * 90 : 200)}ms;
    `}
  z-index: -1;
`;

export default NetworkToggler;
