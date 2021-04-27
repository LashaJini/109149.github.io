import React from "react";
import ReactGA from "react-ga";
import { Logo, Linkable, Jiggle } from "../";
import styled from "styled-components";
import { themes, networkUrls } from "../../constants";
import {
  EmailSVG,
  TwitterSVG,
  RedditSVG,
  StackoverflowSVG,
  GithubSVG,
} from "../svg";

const Footer = ({ logo: { width, height } }) => {
  const GAHandler = (c) => {
    ReactGA.event({
      category: `cta-${c}`,
      action: "clicked",
      transport: "beacon",
    });
  };

  return (
    <>
      <Div>
        <LogoWrapper>
          <Logo width={width} height={height} />
        </LogoWrapper>

        <div>Help me overcome boredom.</div>

        <Network>
          <LogoWrapper>
            <Jiggle>
              <Linkable
                url={networkUrls.github}
                onClick={() => GAHandler("github")}
              >
                <GithubSVG width={"28px"} height={"28px"} />
              </Linkable>
            </Jiggle>
          </LogoWrapper>
          <LogoWrapper>
            <Jiggle>
              <Linkable
                url={networkUrls.stackoverflow}
                onClick={() => GAHandler("stackoverflow")}
              >
                <StackoverflowSVG width={"28px"} height={"28px"} />
              </Linkable>
            </Jiggle>
          </LogoWrapper>
          <LogoWrapper>
            <Jiggle>
              <Linkable
                url={networkUrls.reddit}
                onClick={() => GAHandler("reddit")}
              >
                <RedditSVG width={"28px"} height={"28px"} />
              </Linkable>
            </Jiggle>
          </LogoWrapper>
          <LogoWrapper>
            <Jiggle>
              <Linkable
                url={networkUrls.twitter}
                onClick={() => GAHandler("twitter")}
              >
                <TwitterSVG width={"28px"} height={"28px"} />
              </Linkable>
            </Jiggle>
          </LogoWrapper>
          <LogoWrapper>
            <Jiggle>
              <Linkable
                url={networkUrls.email}
                onClick={() => GAHandler("email")}
              >
                <EmailSVG width={"28px"} height={"28px"} />
              </Linkable>
            </Jiggle>
          </LogoWrapper>
        </Network>

        <FoF>
          <Linkable newTab={false} url={window.location.origin + "/#/404"}>
            I wanna see 404 page too!
          </Linkable>
        </FoF>

        <div>© 2021-present 109149. All Rights Reserved.</div>
      </Div>
    </>
  );
};

const FoF = styled.div`
  margin-bottom: 1rem;
  a {
    text-decoration: underline;
    color: hsl(10, 100%, 50%);
    &:hover {
      color: hsl(10, 100%, 40%);
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.256rem;
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
  // padding: 1rem;
`;

const Network = styled(LogoWrapper)`
  margin: 1rem 0 2rem 0;
`;

export default Footer;
