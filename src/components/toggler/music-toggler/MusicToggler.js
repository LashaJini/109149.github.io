import React from "react";
import styled from "styled-components";
import {
  noMansLand,
  wildReputation,
  shotInTheDark,
  demonFire,
  hellsBells,
  realize,
  safeInNewYorkCity,
  thunderstruck,
  backInBlack,
  witchsSpell,
} from "../../../static/music";
import {
  PrevButtonSVG as PrevButton,
  PauseButtonSVG as PauseButton,
  PlayButtonSVG as PlayButton,
  NextButtonSVG as NextButton,
} from "../../svg";
import { themes } from "../../../constants";
import "./MusicToggler.scss";

const ACDC = [
  witchsSpell,
  noMansLand,
  wildReputation,
  shotInTheDark,
  demonFire,
  hellsBells,
  realize,
  safeInNewYorkCity,
  thunderstruck,
  backInBlack,
];

const MusicToggler = ({ width, height, fill, isCta, isPlaying = false }) => {
  const audioRef = React.useRef();
  const [musicIsPlaying, setMusicIsPlaying] = React.useState(isPlaying);
  const [currentlyPlaying, setCurrentlyPlaying] = React.useState({
    index: 0,
    src: ACDC[0],
  });

  const pause = React.useCallback(() => {
    if (musicIsPlaying) {
      audioRef.current.pause();
    }
  }, [musicIsPlaying]);

  const playNext = React.useCallback(() => {
    pause();

    if (currentlyPlaying.index === ACDC.length - 1) {
      setCurrentlyPlaying({
        index: 0,
        src: ACDC[0],
      });
    } else {
      setCurrentlyPlaying((prev) => ({
        index: prev.index + 1,
        src: ACDC[prev.index + 1],
      }));
    }
    setMusicIsPlaying(true);
  }, [currentlyPlaying, pause]);

  React.useEffect(() => {
    if (musicIsPlaying) {
      audioRef.current.play();
    }
  }, [musicIsPlaying, currentlyPlaying]);

  React.useEffect(() => {
    if (isCta) {
      document
        .querySelector(".music-toggler")
        .classList.add("music-toggler-cta");
      document
        .querySelector(".music-toggler")
        .classList.remove("music-toggler-nav");
    } else {
      document
        .querySelector(".music-toggler")
        .classList.remove("music-toggler-cta");
      document
        .querySelector(".music-toggler")
        .classList.add("music-toggler-nav");
    }
  }, [isCta]);

  const playCurrent = () => {
    pause();
    setMusicIsPlaying((prev) => !prev);
  };

  const playPrev = () => {
    pause();

    if (currentlyPlaying.index === 0) {
      setCurrentlyPlaying({
        index: ACDC.length - 1,
        src: ACDC[ACDC.length - 1],
      });
    } else {
      setCurrentlyPlaying((prev) => ({
        index: prev.index - 1,
        src: ACDC[prev.index - 1],
      }));
    }
    setMusicIsPlaying(true);
  };

  React.useEffect(() => {
    function nextSong() {
      audioRef.current.currentTime = 0;
      playNext();
    }
    let tmp = audioRef.current;
    tmp.addEventListener("ended", nextSong);
    return () => tmp.removeEventListener("ended", nextSong);
  }, [playNext]);

  return (
    <Div className="music-toggler">
      <audio ref={audioRef} /*controls*/ src={currentlyPlaying.src}></audio>
      <PrevButtonWrapper className="prev-button hoverable" onClick={playPrev}>
        <PrevButton width={"16px"} height={"16px"} />
      </PrevButtonWrapper>
      <NextButtonWrapper className="next-button hoverable" onClick={playNext}>
        <NextButton width={"16px"} height={"16px"} />
      </NextButtonWrapper>
      <PlayPauseButtonWrapper
        className="play-pause-button hoverable"
        onClick={playCurrent}
      >
        {musicIsPlaying ? (
          <PauseButton width={width} height={height} />
        ) : (
          <PlayButton width={width} height={height} />
        )}
      </PlayPauseButtonWrapper>
    </Div>
  );
};

const Button = styled.div`
  width: 45px;
  height: 45px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: ${themes.vars.bgColorPrimary};
  transform: translate3d(0, 0, 0);
  // transition: background 1200ms ease, fill 1200ms ease;
  transition: all 200ms ease-out;

  &:hover {
    background: ${themes.vars.textColorPrimary};
    svg {
      fill: ${themes.vars.textColorSecondary};
    }
  }
`;

/* music-toggler */
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const PrevButtonWrapper = styled(Button)`
  position: absolute;
`;
const NextButtonWrapper = styled(Button)`
  position: absolute;
`;

const PlayPauseButtonWrapper = styled(Button)`
  width: 100%;
  height: 100%;
`;

export default MusicToggler;
