import React from "react";
import styled from "styled-components";

// TODO: make background darker (blurry or reduce opacity) (?)
const IFrame = styled.iframe`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  border: none;
  position: absolute;
  z-index: 200;
  filter: opacity(100%);
`;

// TODO: stop video when user clicks away (?)
const YoutubeIFrame = ({
  visible = false,
  width = "300px",
  height = "300px",
}) => {
  const [display, setDisplay] = React.useState("none");

  React.useEffect(() => {
    setDisplay(visible ? "block" : "none");
    // blur everything except iframe
    // if (visible) {
    //   document.body.style.filter = "opacity(25%)";
    // } else {
    //   document.body.style.filter = "opacity(100%)";
    // }
  }, [visible]);

  return (
    <IFrame
      width={width}
      height={height}
      display={display}
      src="https://www.youtube.com/embed/pAgnJDJN4VA"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></IFrame>
  );
};

export default YoutubeIFrame;
