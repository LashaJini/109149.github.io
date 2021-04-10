import React from "react";
import styled from "styled-components";
import {
  noMansLand,
  wildReputation,
  shotInTheDark,
} from "../../../static/music";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import NextButton from "./NextButton";
import PrevButton from "./PreviousButton";
import { themes } from "../../../constants";

const ACDC = [noMansLand, wildReputation, shotInTheDark];

// TODO: fix: on mobile, when focusing + going cta, next + prev buttons do not disappear.
// TODO: change transform of next + prev buttons when in cta mode.
const MusicToggler = ({ width, height, fill, isPlaying = false }) => {
  const audioRef = React.useRef();
  const [musicIsPlaying, setMusicIsPlaying] = React.useState(isPlaying);
  const [currentlyPlaying, setCurrentlyPlaying] = React.useState({
    index: 0,
    src: ACDC[0],
  });
  const [visible, setVisible] = React.useState(false);

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

  const prevNextVisibilityToggler = (event) => {
    // we need this check because onClick triggers onMouseLeave.
    if (
      event.currentTarget.classList.contains("music-toggler") &&
      event.type !== "mouseleave"
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
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
    <Div
      className="music-toggler"
      onMouseEnter={prevNextVisibilityToggler}
      onMouseLeave={prevNextVisibilityToggler}
    >
      <audio ref={audioRef} /*controls*/ src={currentlyPlaying.src}></audio>
      <PrevButtonWrapper className="prev-button" visible={visible}>
        <PrevButton
          className="prev-button"
          onClick={playPrev}
          width={width}
          height={height}
        />
      </PrevButtonWrapper>
      <NextButtonWrapper className="next-button" visible={visible}>
        <NextButton onClick={playNext} width={width} height={height} />
      </NextButtonWrapper>
      <PlayPauseButtonWrapper
        className="play-pause-button"
        visible={true}
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

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-weight: bold;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  // font-size: 1.1rem;
  border-radius: 100%;
  background: var(--bg-color-primary);

  &:hover {
    background: var(--text-color-primary);
    svg {
      fill: ${themes.vars.textColorSecondary};
    }
  }
`;

const PrevButtonWrapper = styled(Button)`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-5%, 55%);
`;
const NextButtonWrapper = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(5%, 55%);
`;

const PlayPauseButtonWrapper = styled(Div)`
  border-radius: 100%;
  &:hover {
    background: var(--text-color-primary);
    svg {
      fill: ${themes.vars.textColorSecondary};
    }
  }
`;

export default MusicToggler;
