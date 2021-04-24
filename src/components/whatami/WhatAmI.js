import React from "react";
import styled from "styled-components";
import "./WhatAmI.scss";
import {
  initScene,
  initCamera,
  initRenderer,
  initControls,
  createCSSObjects,
  createRandom,
  createTable,
  createGrid,
  createSphere,
} from "./logic";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
import { useLocalStorage } from "../../hooks";

const details = [
  {
    titleText: "rust",
    content: "CONTENT",
  },
  {
    titleText: "wasm",
    content: "CONTENT",
  },
  {
    titleText: "deno",
    content: "CONTENT",
  },
  {
    titleText: "ml",
    content: "CONTENT",
  },
  {
    titleText: "ai",
    content: "CONTENT",
  },
  {
    titleText: "js",
    content: "CONTENT",
  },
  {
    titleText: "ts",
    content: "CONTENT",
  },
  {
    titleText: "py",
    content: "CONTENT",
  },
  {
    titleText: "c",
    content: "CONTENT",
  },
  {
    titleText: "go",
    content: "CONTENT",
  },
  {
    titleText: "haskell",
    content: "CONTENT",
  },
  {
    titleText: "pytorch",
    content: "CONTENT",
  },
  {
    titleText: "docker",
    content: "CONTENT",
  },
  {
    titleText: "k3s",
    content: "CONTENT",
  },
  {
    titleText: "comp arch",
    content: "CONTENT",
  },
  {
    titleText: "cyber sec",
    content: "CONTENT",
  },
  {
    titleText: "linux",
    content: "CONTENT",
  },
  {
    titleText: "crypto",
    content: "CONTENT",
  },
  {
    titleText: "japanese",
    content: "CONTENT",
  },
  {
    titleText: "chinese",
    content: "CONTENT",
  },
  {
    titleText: "physics",
    content: "CONTENT",
  },
  {
    titleText: "photography",
    content: "CONTENT",
  },
  {
    titleText: "music",
    content: "CONTENT",
  },
  {
    titleText: "marvel",
    content: "CONTENT",
  },
  {
    titleText: "anime",
    content: "CONTENT",
  },
  {
    titleText: "math",
    content: "CONTENT",
  },
  {
    titleText: "memes",
    content: "CONTENT",
  },
  {
    titleText: "AC🗲DC",
    content: "CONTENT",
  },
];

// TODO: details.content: list (?)
// TODO: add border (?)
// TODO: responsive initial camera z position (?)
const WhatAmI = () => {
  const [type, setType] = useLocalStorage("109149-whatami-type", "sphere");
  const scene = React.useRef();
  const camera = React.useRef();
  const renderer = React.useRef();
  const controls = React.useRef();

  const containerRef = React.useRef();
  const render = React.useRef();
  const resize = React.useRef();
  const animate = React.useRef();

  const objects = React.useRef();
  const targets = React.useRef({ random: [], table: [], grid: [], sphere: [] });

  React.useEffect(() => {
    scene.current = initScene();
    camera.current = initCamera();
    renderer.current = initRenderer(
      containerRef.current,
      window.innerWidth *
        0.8 /* this is because IntoGridItem.js:WhatAmIWrapper width is 80vw */,
      window.innerHeight
    );

    controls.current = initControls(
      camera.current,
      renderer.current.domElement
    );
    let tmp = controls.current;
    tmp.addEventListener("change", render.current);

    objects.current = createCSSObjects(details);
    targets.current.random = createRandom(objects.current);
    targets.current.table = createTable(objects.current);
    targets.current.grid = createGrid(objects.current);
    targets.current.sphere = createSphere(objects.current);

    objects.current.forEach((object) => scene.current.add(object));

    window.addEventListener("resize", resize.current);
    animate.current();

    return () => {
      while (scene.current.children.length > 0) {
        scene.current.remove(scene.current.children[0]);
      }
      tmp.removeEventListener("change", render.current);
      window.removeEventListener("resize", resize.current);
    };
  }, []);

  React.useEffect(() => {
    switch (type) {
      case "table": {
        transform(objects.current, targets.current.table, 1000, render.current);
        break;
      }
      case "grid": {
        transform(objects.current, targets.current.grid, 1000, render.current);
        break;
      }
      case "sphere": {
        transform(
          objects.current,
          targets.current.sphere,
          1000,
          render.current
        );
        break;
      }
      default: {
        transform(
          objects.current,
          targets.current.random,
          1000,
          render.current
        );
        break;
      }
    }
  }, [type]);

  function transform(objects, targets, duration, cb) {
    TWEEN.removeAll();

    for (let i = 0; i < objects.length; i++) {
      let object = objects[i];
      let target = targets[i];

      new TWEEN.Tween(object.position)
        .to(
          {
            x: target.position.x,
            y: target.position.y,
            z: target.position.z,
          },
          Math.random() * duration + duration
        )
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

      new TWEEN.Tween(object.rotation)
        .to(
          {
            x: target.rotation.x,
            y: target.rotation.y,
            z: target.rotation.z,
          },
          Math.random() * duration + duration
        )
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
    }

    new TWEEN.Tween(this)
      .to({}, duration * 2)
      .onUpdate(cb)
      .start();
  }

  animate.current = () => {
    requestAnimationFrame(animate.current);
    TWEEN.update();
    controls.current.update();
  };
  render.current = () => {
    renderer.current.render(scene.current, camera.current);
  };
  resize.current = () => {
    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(
      window.innerWidth *
        0.8 /* this is because IntoGridItem.js:WhatAmIWrapper width is 80vw */,
      window.innerHeight
    );
    render.current();
  };

  const handleRandom = () => {
    transform(objects.current, targets.current.random, 1000, render.current);
    setType("random");
  };
  const handleTable = () => {
    transform(objects.current, targets.current.table, 1000, render.current);
    setType("table");
  };
  const handleGrid = () => {
    transform(objects.current, targets.current.grid, 1000, render.current);
    setType("grid");
  };
  const handleSphere = () => {
    transform(objects.current, targets.current.sphere, 1000, render.current);
    setType("sphere");
  };
  const handleCamera = () => {
    camera.current.position.z = 2000;
    camera.current.position.x = 0;
    camera.current.position.y = 0;
  };

  return (
    <Wrapper className="what-am-i-scene-wrapper">
      <Scene ref={containerRef}></Scene>
      <Menu>
        <Button className="hoverable" onClick={handleCamera}>
          C
        </Button>
        <Button className="hoverable" onClick={handleRandom}>
          RANDOM
        </Button>
        <Button className="hoverable" onClick={handleTable}>
          TABLE
        </Button>
        <Button className="hoverable" onClick={handleGrid}>
          GRID
        </Button>
        <Button className="hoverable" onClick={handleSphere}>
          SPHERE
        </Button>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Scene = styled.div``;
const Menu = styled.div`
  position: absolute;
  bottom: 20%;
  width: 100%;
  text-align: center;
`;
const Button = styled.button`
  color: hsla(0, 100%, 80%, 0.5);
  background: transparent;
  outline: 1px solid hsla(0, 100%, 75%, 0.25);
  border: 0px;
  padding: 5px 10px;

  &:hover {
    background-color: hsla(0, 100%, 50%, 0.5);
  }

  &:active {
    color: #000000;
    background-color: hsla(0, 100%, 50%, 0.75);
  }
`;

export default WhatAmI;
