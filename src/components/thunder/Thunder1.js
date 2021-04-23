import React from "react";
import styled from "styled-components";
import { AnimationContext } from "../";

// const colors = ["white", "cyan", "blue", "purple"];

// TODO: on hover "play" music (?)
// TODO: on hover increase shadow (?)
// TODO: add intersection observer
const Thunder1 = ({ defaultRootX, defaultRootY, defaultInitialAngle }) => {
  const initials = React.useRef({ rootX: 30, rootY: 10, initialAngle: 20 });
  const canvasRef = React.useRef();
  const ctxRef = React.useRef();
  const redraw = React.useRef();
  const ratioRef = React.useRef();
  const animationID = React.useRef();
  const animation = React.useContext(AnimationContext);
  const animate = React.useRef();

  const strike = React.useCallback((animate, initials) => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    const rootX = initials.rootX;
    const rootY = initials.rootY;
    const INITIAL_HEIGHT =
      ctxRef.current.canvas.height / (ratioRef.current * 10) > 44
        ? ctxRef.current.canvas.height / (ratioRef.current * 10)
        : 48;
    const INITIAL_ANGLE = initials.initialAngle;
    const STEM_INITIAL_WIDTH = 8;
    const INITIAL_SHADOW = 10;
    const STEM_COLOR = "white";
    const SHADOW_COLOR = "cyan";
    const LEAF_THRESHOLD = 30; // as big as possible to decrease render time
    const STEM_WIDTH_DECLINE_FACTOR = 0.8;
    const TREE_HEIGHT_DECLINE_FACTOR = 0.958; // 1 - no decline, 0 - full decline

    ctxRef.current.strokeStyle = STEM_COLOR;
    ctxRef.current.fillStyle = STEM_COLOR;
    ctxRef.current.shadowColor = SHADOW_COLOR;
    ctxRef.current.shadowBlur = INITIAL_SHADOW;
    ctxRef.current.lineCap = "round";

    let iter = 12;
    let animationList = [];
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

      let right = () =>
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
      let left = () =>
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

      if (animate) {
        if (iter > 0) {
          animationList.push(right);
          animationList.push(left);
          iter--;
        } else if (iter > -200) {
          Math.random() > drawProbability && animationList.push(right);
          Math.random() > drawProbability && animationList.push(left);
          iter--;
        }
      } else {
        if (iter > 0) {
          right();
          left();
          iter--;
        } else {
          Math.random() > drawProbability && right();
          Math.random() > drawProbability && left();
        }
      }
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
        newX > canvasRef.current.width / ratioRef.current - INITIAL_HEIGHT ||
        newX < 0 ||
        newY > canvasRef.current.height / ratioRef.current - INITIAL_HEIGHT ||
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

    // ctxRef.current.restore();
    drawTree(rootX, rootY, INITIAL_HEIGHT, INITIAL_ANGLE, STEM_INITIAL_WIDTH, {
      x: rootX,
      y: rootY,
      angle: INITIAL_ANGLE,
    });

    let currentAnim = 0;
    function update(time) {
      animationID.current = undefined;
      if (!currentAnim) {
        currentAnim = 0;
      }

      animationList[currentAnim]();
      currentAnim++;

      if (!animationID.current && currentAnim < animationList.length)
        animationID.current = window.requestAnimationFrame(update);
    }
    animate &&
      (() => {
        animationID.current = window.requestAnimationFrame(update);
      })();
  }, []);

  redraw.current = () => {
    scale();
    clearAnimation();
    strike(animate.current, initials.current);
  };

  function clearAnimation() {
    if (animationID.current) {
      window.cancelAnimationFrame(animationID.current);
      animationID.current = undefined;
    }
  }

  function scale() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const devicePixelRatio = window.devicePixelRatio || 1;

    const backingStoreRatio =
      ctxRef.current.webkitBackingStorePixelRatio ||
      ctxRef.current.mozBackingStorePixelRatio ||
      ctxRef.current.msBackingStorePixelRatio ||
      ctxRef.current.oBackingStorePixelRatio ||
      ctxRef.current.backingStorePixelRatio ||
      1;

    const ratio = devicePixelRatio / backingStoreRatio;
    ratioRef.current = ratio;
    if (devicePixelRatio !== backingStoreRatio) {
      // set the 'real' canvas size to the higher width/height
      canvasRef.current.width = width * ratio;
      canvasRef.current.height = height * ratio;

      // ...then scale it back down with CSS
      canvasRef.current.style.width = width + "px";
      canvasRef.current.style.height = height + "px";
    } else {
      // this is a normal 1:1 device; just scale it simply
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      canvasRef.current.style.width = "";
      canvasRef.current.style.height = "";
    }

    // scale the drawing context so everything will work at the higher ratio
    ctxRef.current.scale(ratio, ratio);
  }

  React.useEffect(() => {
    ctxRef.current = canvasRef.current.getContext("2d");

    animate.current = animation.animationEnabled;
    initials.current = {
      rootX: defaultRootX || 30,
      rootY: defaultRootY || 10,
      initialAngle: defaultInitialAngle || 20,
    };
    redraw.current();
  }, [
    animation.animationEnabled,
    defaultRootX,
    defaultRootY,
    defaultInitialAngle,
  ]);

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
  position: absolute;
`;

export default Thunder1;
