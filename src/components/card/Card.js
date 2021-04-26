import React from "react";
import styled, { keyframes, css } from "styled-components";
import {
  AnimationContext,
  MusicContext,
  Image,
  Scaleable,
  Jiggle,
  Tooltip,
  Button,
  Tech,
  ProgressBar,
  YoutubeIFrame,
} from "../";
import { YoutubeSVG } from "../svg";
import { useEventListener } from "../../hooks";
import { themes } from "../../constants";

const diff = [
  {
    barWidth: "10%",
    barColor: "#00ff00",
  },
  {
    barWidth: "25%",
    barColor: "#d4ff00",
  },
  {
    barWidth: "50%",
    barColor: "#ffbb00",
  },
  {
    barWidth: "75%",
    barColor: "#ff4000",
  },
  {
    barWidth: "100%",
    barColor: "#ff0000",
  },
];

// TODO: use css hover instead
// TODO: dropdown (?)
// TODO: restrict number of characters in description (?)
const Card = ({ data, cardWidth }) => {
  const [iframeIsVisible, setIFrameIsVisible] = React.useState(false);
  const music = React.useContext(MusicContext);
  const animation = React.useContext(AnimationContext);

  // listen click for outside iframe
  useEventListener("click", (event) => {
    if (event.target.nodeName !== "IFRAME") {
      if (iframeIsVisible) {
        setIFrameIsVisible(false);
      }
    }
  });

  return (
    <div>
      <Scaleable>
        <Grid
          _musicEnabled={music.musicEnabled}
          _animationEnabled={animation.animationEnabled}
          className="project-card-grid"
          _width={cardWidth}
        >
          <ImageGridItem className="project-image-grid-item">
            <Image name={data.cardImage} />
          </ImageGridItem>

          <YtGriditem
            _col="4/6"
            _row="2"
            onClick={() => setIFrameIsVisible(true)}
          >
            <YoutubeSVGWrapper>
              <Jiggle>
                <YoutubeSVG height="20px" fill="red" />
              </Jiggle>
            </YoutubeSVGWrapper>
            <YoutubeIFrame visible={iframeIsVisible} url={data.ytUrl} />
          </YtGriditem>

          <HeaderGridItem className="project-header-grid-item" _row="3">
            <ProjectNameWrapper>{data.projectName}</ProjectNameWrapper>
          </HeaderGridItem>

          <DiffBarGridItem _col="3/7" _row="4">
            <ProgressBarWrapper>
              <ProgressBar {...diff[data.difficulty]} />
            </ProgressBarWrapper>
            <Tooltip
              text="Difficulty (subjective)"
              attachTo={ProgressBarWrapper}
            />
          </DiffBarGridItem>

          <TechHeaderGridItem _col="2/9" _row="5">
            Built with:
          </TechHeaderGridItem>

          <TechButtonsGridItem _col="3/7" _row="6">
            <ul className="used-tech">
              {data.techUsed.map((tech) => {
                return (
                  <li key={tech.name}>
                    <Tech name={tech.name} />
                  </li>
                );
              })}
            </ul>
          </TechButtonsGridItem>

          <DescriptionGridItem _col="2/8" _row="8">
            {data.description}
          </DescriptionGridItem>

          <LiveWebsiteGridItem _col="2/5" _row="10">
            <Button
              href={data.website || data.repoUrl}
              width="100%"
              fillColor="#ff003c"
            >
              Website
            </Button>
          </LiveWebsiteGridItem>
          <RepoButtonGriditem _col="5/8" _row="10">
            <Button href={data.repoUrl} width="100%" fillColor="#c648c8">
              Repo
            </Button>
          </RepoButtonGriditem>
        </Grid>
      </Scaleable>
    </div>
  );
};

const beat = keyframes`
  0% {
    box-shadow: 0 0 4px hsl(0, 100%, 50%);
  }
  20% {
    box-shadow: 0 0 10px hsl(0, 100%, 50%);
  }
  40% {
    box-shadow: 0 0 18px hsl(0, 100%, 50%);
  }
  60% {
    box-shadow: 0 0 12px hsl(0, 100%, 50%);
  }
  80% {
    box-shadow: 0 0 24px hsl(0, 100%, 50%);
  }
  100% {
    box-shadow: 0 0 20px hsl(0, 100%, 50%);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  width: ${({ _width }) => (_width ? _width : "100%")};
  max-width: 420px;
  border-radius: 5px;
  padding: 1rem 0;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  border: 1px solid black;

  color: ${themes.vars.textColorPrimary};

  &:hover {
    img {
      box-shadow: 0 5px 30px hsl(0, 100%, 50%);
    }

    img:hover {
      box-shadow: 0 15px 50px hsl(0, 100%, 50%);
    }
  }

  ${({ _musicEnabled, _animationEnabled }) =>
    _animationEnabled &&
    _musicEnabled &&
    css`
      animation: ${beat} 1s infinite alternate;
    `}
`;

const GridItem = styled.div`
  grid-column: ${({ _col }) => (_col ? _col : "span 8")};
  grid-row: ${({ _row }) => (_row ? _row : 1)};
`;

const ImageGridItem = styled(GridItem)`
  img {
    border: 5px solid #272133;
    height: 140px;
    width: 140px;
    border-radius: 100%;
    margin-top: 20px;
    transition: box-shadow 3s ease;
  }
`;

const YtGriditem = styled(GridItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeaderGridItem = styled(GridItem)`
  position: relative;
  text-align: center;
  margin: 0.5rem;

  span {
    color: ${themes.vars.textColorPrimary};
    font-weight: bold;
    font-size: 1.25rem;
    font-family: sans-serif;
  }
`;

const DiffBarGridItem = styled(GridItem)`
  position: relative;
  margin-bottom: 1.5rem;
`;

const TechHeaderGridItem = styled(GridItem)`
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 0.9rem;
`;

const TechButtonsGridItem = styled(GridItem)`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    padding: 0;

    li {
      diplay: inline-block;
      margin: 0.15em;
      position: relative;
      font-size: 1em;
    }
  }
`;

const DescriptionGridItem = styled(GridItem)`
  padding: 2px;
  margin-bottom: 2.2rem;
  font-size: 0.9em;
  line-height: 1.25rem;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const LiveWebsiteGridItem = styled(GridItem)`
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RepoButtonGriditem = styled(GridItem)`
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBarWrapper = styled.div``;
const ProjectNameWrapper = styled.span``;
const YoutubeSVGWrapper = styled.div``;

export default Card;
