import React from "react";
import styled from "styled-components";
import { AnimationContext } from "../";

const colors = ["white", "cyan", "blue", "purple"];

// TODO: on hover "play" music (?)
// TODO: on hover increase shadow (?)
// TODO: multiple renders will cause problems in settimeout; use requestAnimationFrame instead (?)
// TODO: fix pixel ratio on phone
// TODO: add intersection observer
const Thunder1 = ({ rootX = 100, rootY = 0 }) => {
  const canvasRef = React.useRef();
  const ctxRef = React.useRef();
  const redraw = React.useRef();
  const animation = React.useContext(AnimationContext);

  redraw.current = () => {
    resize();
    generate();
  };

  function resize() {
    const scale = window.devicePixelRatio || 1;

    canvasRef.current.width = window.innerWidth * scale;
    canvasRef.current.height = window.innerHeight * scale;
    // canvasRef.current.width *= scale;
    // canvasRef.current.height *= scale;
  }

  React.useEffect(() => {
    ctxRef.current = canvasRef.current.getContext("2d");

    redraw.current();
  }, [animation]);

  function generate() {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    const rootX = 100;
    const rootY = 0;
    const INITIAL_HEIGHT = 56;
    const INITIAL_ANGLE = 20;
    const STEM_INITIAL_WIDTH = 8;
    const INITIAL_SHADOW = 10;
    // const STEM_COLOR = colors[Math.floor(Math.random() * colors.length)];
    const STEM_COLOR = "blue";
    // const SHADOW_COLOR = colors[Math.floor(Math.random() * colors.length)];
    const SHADOW_COLOR = "cyan";
    const LEAF_THRESHOLD = 30; // as big as possible to decrease render time
    const STEM_WIDTH_DECLINE_FACTOR = 0.8;
    const TREE_HEIGHT_DECLINE_FACTOR = 0.958; // 1 - no decline, 0 - full decline

    ctxRef.current.strokeStyle = STEM_COLOR;
    ctxRef.current.fillStyle = STEM_COLOR;
    ctxRef.current.shadowColor = SHADOW_COLOR;
    ctxRef.current.shadowBlur = INITIAL_SHADOW;
    ctxRef.current.lineCap = "round";

    let iter = 15;
    function drawTree(
      rootX,
      rootY,
      height,
      angle,
      stemWidth,
      last,
      drawProbability = 0.18,
      slowDown = 1
    ) {
      const { x: newX, y: newY, angle: lastAngle } = drawStem(
        rootX,
        rootY,
        stemWidth,
        height,
        angle,
        last
      );

      if (height < LEAF_THRESHOLD) {
        return;
      }
      const dTheta = Math.random() > 0.5 ? Math.random() * 20 + 2 : 0;
      const stemNewWidth = stemWidth * STEM_WIDTH_DECLINE_FACTOR;
      const newHeight = height * TREE_HEIGHT_DECLINE_FACTOR;

      animation.animationEnabled
        ? setTimeout(() => {
            anim();
          }, 24 * slowDown)
        : anim();

      function anim() {
        if (iter > 0) {
          drawTree(
            0,
            height,
            newHeight,
            angle + dTheta,
            stemNewWidth,
            { x: newX, y: newY, angle: lastAngle },
            drawProbability * 1.1,
            slowDown * 1.1
          );
          drawTree(
            0,
            height,
            newHeight,
            angle - dTheta,
            stemNewWidth,
            { x: newX, y: newY, angle: lastAngle },
            drawProbability * 1.1,
            slowDown * 1.1
          );
          iter--;
        } else {
          Math.random() > drawProbability &&
            drawTree(
              0,
              height,
              newHeight,
              angle + dTheta,
              stemNewWidth,
              { x: newX, y: newY, angle: lastAngle },
              drawProbability * 1.1,
              slowDown * 1.1
            );
          Math.random() > drawProbability &&
            drawTree(
              0,
              height,
              newHeight,
              angle - dTheta,
              stemNewWidth,
              { x: newX, y: newY, angle: lastAngle },
              drawProbability * 1.1,
              slowDown * 1.1
            );
        }
      }

      ctxRef.current.restore();
    }

    // `last.angle -` kinda makes it look more beautiful
    function drawStem(rootX, rootY, stemWidth, height, angle, last) {
      let rotationAngle = (angle * Math.PI) / 180;
      rotationAngle =
        last.angle - Math.random() > 0.5 ? rotationAngle : -rotationAngle;

      let newX = last.x;
      newX -= height * Math.sin(rotationAngle);
      let newY = last.y;
      newY += height * Math.cos(rotationAngle);
      let newAngle = rotationAngle;

      if (
        newX > canvasRef.current.innerWidth ||
        newX < 0 ||
        newY > canvasRef.current.innerHeight ||
        newY < 0
      ) {
        return last;
      }

      ctxRef.current.beginPath();
      ctxRef.current.save();
      ctxRef.current.lineWidth = stemWidth;
      ctxRef.current.moveTo(last.x, last.y);
      ctxRef.current.lineTo(newX, newY);
      ctxRef.current.stroke();

      let result = { x: newX, y: newY, angle: newAngle };
      return result;
    }

    drawTree(rootX, rootY, INITIAL_HEIGHT, INITIAL_ANGLE, STEM_INITIAL_WIDTH, {
      x: rootX,
      y: rootY,
      angle: INITIAL_ANGLE,
    });
  }

  React.useEffect(() => {
    window.addEventListener("resize", redraw.current);
    return () => window.removeEventListener("resize", redraw.current);
  }, []);

  return (
    <>
      <Canvas ref={canvasRef}></Canvas>
    </>
  );
};

const Canvas = styled.canvas`
  background: transparent;
  // width: 100%;
  width: 100vw;
  height: 100%;
`;

export default Thunder1;