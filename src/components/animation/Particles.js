import React from "react";
import styled from "styled-components";
import * as palettes from "nice-color-palettes/200";

const NUMBER_OF_PARTICLES = 100;
const PARTICLE_SIZE = 8;
const SWIPE_STRENGTH = 8;
const PARTICLE_Z = 0.9;

const Particles = ({ _width, _height }) => {
  const canvasRef = React.useRef();
  const ctxRef = React.useRef();
  const particles = React.useRef();
  const dimensions = React.useRef();
  const velocity = React.useRef();
  const cursor = React.useRef();

  const onMouseMove = React.useRef();
  const onMouseLeave = React.useRef();
  const onTouchMove = React.useRef();

  const animate = React.useRef();

  animate.current = () => {
    ctxRef.current.clearRect(
      0,
      0,
      dimensions.current.width,
      dimensions.current.height
    );

    particles.current.forEach(draw);
    move();

    requestAnimationFrame(animate.current);
  };

  onMouseMove.current = (event) => {
    movePointer(event.clientX, event.clientY);
  };

  onTouchMove.current = (event) => {
    movePointer(event.touches[0].clientX, event.touches[0].clientY);
    event.preventDefault();
  };

  onMouseLeave.current = () => {
    cursor.current = { x: null, y: null };
  };

  function initialParticles() {
    let tmp = [];
    for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
      tmp.push({
        x: Math.random() * dimensions.current.width,
        y: Math.random() * dimensions.current.height,
        z: PARTICLE_Z * Math.random(),
        fill: palettes.default[i][0],
      });
    }
    return tmp;
  }

  function draw(particle) {
    ctxRef.current.beginPath();
    ctxRef.current.lineCap = "round";
    ctxRef.current.lineWidth =
      PARTICLE_SIZE * particle.z * dimensions.current.scale;
    ctxRef.current.strokeStyle = particle.fill;

    ctxRef.current.moveTo(particle.x, particle.y);

    let dx = velocity.current.x * 3;
    let dy = velocity.current.y * 3;

    ctxRef.current.lineTo(particle.x + dx, particle.y + dy);

    ctxRef.current.stroke();
  }

  const updateDimensions = React.useCallback(() => {
    let scale = window.devicePixelRatio || 1;
    let width = (_width || window.innerWidth) * scale;
    let height = (_height || window.innerHeight) * scale;

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    dimensions.current = {
      width,
      height,
      scale,
    };
  }, [_width, _height]);

  function move() {
    velocity.current.dx *= 0.95;
    velocity.current.dy *= 0.95;

    velocity.current.x += (velocity.current.dx - velocity.current.x) * 0.8;
    velocity.current.y += (velocity.current.dy - velocity.current.y) * 0.8;

    particles.current.forEach((p) => {
      p.x += velocity.current.x * p.z;
      p.x += (p.x - dimensions.current.width / 2) * velocity.current.z * p.z;

      p.y += velocity.current.y * p.z;
      p.y += (p.y - dimensions.current.height / 2) * velocity.current.z * p.z;

      p.z += velocity.current.z;

      if (
        p.x < 0 ||
        p.x > dimensions.current.width ||
        p.y < 0 ||
        p.y > dimensions.current.height
      ) {
        function recycleStar(p) {
          let direction = "OutOfScreen";

          let vx = Math.abs(velocity.current.x);
          let vy = Math.abs(velocity.current.y);

          if (vx > 1 || vy > 1) {
            let axis;

            if (vx > vy) {
              axis = Math.random() < vx / (vx + vy) ? "h" : "v";
            } else {
              axis = Math.random() < vy / (vx + vy) ? "v" : "h";
            }

            if (axis === "h") {
              direction = velocity.current.x > 0 ? "l" : "r";
            } else {
              direction = velocity.current.y > 0 ? "t" : "b";
            }
          }

          p.z = PARTICLE_Z * Math.random();

          if (direction === "OutOfScreen") {
            p.z = 0.1;
            p.x = Math.random() * dimensions.current.width;
            p.y = Math.random() * dimensions.current.height;
          } else if (direction === "l") {
            p.x = 0;
            p.y = dimensions.current.height * Math.random();
          } else if (direction === "r") {
            p.x = dimensions.current.width;
            p.y = dimensions.current.height * Math.random();
          } else if (direction === "t") {
            p.x = dimensions.current.width * Math.random();
            p.y = 0;
          } else if (direction === "b") {
            p.x = dimensions.current.width * Math.random();
            p.y = dimensions.current.height;
          }
        }
        recycleStar(p);
      }
    });
  }

  function movePointer(x, y) {
    if (
      typeof cursor.current.x === "number" &&
      typeof cursor.current.y === "number"
    ) {
      let _x = x - cursor.current.x;
      let _y = y - cursor.current.y;

      velocity.current.dx += (_x / SWIPE_STRENGTH) * dimensions.current.scale;
      velocity.current.dy += (_y / SWIPE_STRENGTH) * dimensions.current.scale;
    }

    cursor.current.x = x;
    cursor.current.y = y;
  }

  // initial setup
  React.useEffect(() => {
    console.log(palettes.default);
    ctxRef.current = canvasRef.current.getContext("2d");

    cursor.current = { x: null, y: null };
    velocity.current = { x: 0, y: 0, dx: 0, dy: 0, z: 0.0003 };
    updateDimensions();
    particles.current = initialParticles();
    animate.current();
  }, [updateDimensions]);

  // resize
  React.useEffect(() => {
    function handleResize() {
      updateDimensions();
      particles.current = initialParticles();
      animate.current();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateDimensions]);

  // interaction
  React.useEffect(() => {
    let tmp = canvasRef.current;
    tmp.addEventListener("touchmove", onTouchMove.current);
    return () => tmp.removeEventListener("touchmove", onTouchMove.current);
  }, []);
  React.useEffect(() => {
    let tmp = canvasRef.current;
    tmp.addEventListener("touchend", onMouseLeave.current);
    return () => tmp.removeEventListener("touchend", onMouseLeave.current);
  }, []);
  React.useEffect(() => {
    let tmp = canvasRef.current;
    tmp.addEventListener("mousemove", onMouseMove.current);
    return () => tmp.removeEventListener("mousemove", onMouseMove.current);
  }, []);
  React.useEffect(() => {
    document.addEventListener("mouseleave", onMouseLeave.current);
    return () =>
      document.removeEventListener("mouseleave", onMouseLeave.current);
  }, []);

  return (
    <>
      <Canvas _width={_width} _height={_height} ref={canvasRef}></Canvas>
    </>
  );
};

const Canvas = styled.canvas`
  width: ${({ _width }) => (_width ? `${_width}px` : "100%")};
  height: ${({ _height }) => (_height ? `${_height}px` : "100%")};
  background: transparent;
`;

export default Particles;
