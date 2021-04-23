import React from "react";
import styled from "styled-components";
import { useEventListener } from "../../hooks";

// TODO: add flashlight cursor (?)
const Flashlight = () => {
  const [bkgImg, setBkgImg] = React.useState(
    "circle at 50% 50%, transparent 110px, hsla(0,0%,0%,0.85) 140px"
  );

  function update({ start, end }) {
    return (event) => {
      setBkgImg(
        `circle at ${(event.pageX / window.innerWidth) * 100}% ${
          (event.pageY / window.innerHeight) * 100
        }%, ${start}, ${end}`
      );
    };
  }

  useEventListener(
    "mousedown",
    update({ start: "transparent 90px", end: "hsla(0,0%,0%,0.95) 120px" })
  );

  useEventListener(
    "mousemove",
    (event) => {
      const [, start, end] = bkgImg.split(", ");
      update({
        start,
        end,
      })(event);
    },
    window,
    bkgImg
  );

  useEventListener(
    "mousedown",
    update({ start: "transparent 90px", end: "hsla(0,0%,0%,0.95) 120px" })
  );
  useEventListener(
    "mouseup",
    update({ start: "transparent 110px", end: "hsla(0,0%,0%,0.85) 140px" })
  );

  return (
    <>
      <Div className="spotlight" bkgImg={bkgImg}></Div>
    </>
  );
};

const Div = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: radial-gradient(${({ bkgImg }) => bkgImg});
  // background-color: hsla(0, 100%, 50%, 0.5);
`;

export default Flashlight;
