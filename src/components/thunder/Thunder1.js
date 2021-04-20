import React from "react";
import styled from "styled-components";

// TODO: do something about the randomness of left/right tree
const Thunder1 = () => {
  const canvasRef = React.useRef();
  const ctxRef = React.useRef();

  function resize() {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  }

  React.useEffect(() => {
    ctxRef.current = canvasRef.current.getContext("2d");

    resize();
    generate();
  }, []);

  function generate() {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    const rootX = canvasRef.current.width / 2;
    const rootY = canvasRef.current.height - 80;
    // const INITIAL_HEIGHT = Math.floor(Math.random() * 280 + 300);
    const INITIAL_HEIGHT = 50;
    const INITIAL_ANGLE = 0;
    // const STEM_INITIAL_WIDTH = Math.random() * 120 + 1;
    const STEM_INITIAL_WIDTH = 10;
    let STEM_COLOR = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    let LEAF_COLOR = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    STEM_COLOR = "white";
    LEAF_COLOR = "white";
    const INITIAL_SHADOW = 25;
    const SHADOW_COLOR = "cyan";
    const LEAF_THRESHOLD = 38; // as big as possible to decrease render time
    const STEM_WIDTH_DECLINE_FACTOR = 0.78;
    const TREE_HEIGHT_DECLINE_FACTOR = 0.968; // 1 - no decline, 0 - full decline

    ctxRef.current.strokeStyle = STEM_COLOR;
    ctxRef.current.fillStyle = LEAF_COLOR;
    ctxRef.current.shadowColor = SHADOW_COLOR;
    ctxRef.current.shadowBlur = INITIAL_SHADOW;
    ctxRef.current.lineCap = "round";

    function drawTree(rootX, rootY, height, angle, stemWidth) {
      drawStem(rootX, rootY, stemWidth, height, angle);

      if (height < LEAF_THRESHOLD) {
        drawLeaf(height);
        ctxRef.current.restore(); // restore saved canvas state; pops the stack; does nothing if nothing was saved before
        return;
      }
      const dTheta = Math.random() > 0.5 ? Math.random() * 24 + 2 : 0;
      const stemNewWidth = stemWidth * STEM_WIDTH_DECLINE_FACTOR;
      const newHeight = height * TREE_HEIGHT_DECLINE_FACTOR;
      Math.random() > 0.2 &&
        drawTree(0, -height, newHeight, angle + dTheta, stemNewWidth);
      Math.random() > 0.2 &&
        drawTree(0, -height, newHeight, angle - dTheta, stemNewWidth);

      ctxRef.current.restore();
    }

    function drawStem(rootX, rootY, stemWidth, height, angle) {
      ctxRef.current.beginPath();
      ctxRef.current.save(); // save canvas' current state & push to stack

      // ctxRef.current.lineCap = Math.random() > 0.5 ? "round" : "square";
      // ctxRef.current.shadowBlur =
      //   Math.random() > 0.5
      //     ? INITIAL_SHADOW
      //     : Math.floor(INITIAL_SHADOW * Math.random()) + 5;
      ctxRef.current.lineWidth = stemWidth;
      ctxRef.current.translate(rootX, rootY - 2);
      let rotationAngle = (angle * Math.PI) / 180;
      rotationAngle = Math.random() > 0.5 ? rotationAngle : -rotationAngle;
      ctxRef.current.rotate(rotationAngle);

      ctxRef.current.moveTo(0, 0);
      ctxRef.current.lineTo(0, -height); // upwards
      ctxRef.current.stroke(); // its like border
    }

    function drawLeaf(height) {
      // ctxRef.current.beginPath();
      // ctxRef.current.arc(0, -height, 20, 0, Math.PI / 2);
      // ctxRef.current.fill();
    }

    drawTree(rootX, rootY, INITIAL_HEIGHT, INITIAL_ANGLE, STEM_INITIAL_WIDTH);
  }

  React.useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  console.log("render");
  return (
    <>
      <Canvas ref={canvasRef}></Canvas>
      <button onClick={generate}>oi</button>
    </>
  );
};

const Canvas = styled.canvas`
  background: transparent;
`;

export default Thunder1;
