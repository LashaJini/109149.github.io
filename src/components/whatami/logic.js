import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import * as THREE from "three";

function initScene() {
  return new THREE.Scene();
}

function initCamera() {
  let camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 2000;
  return camera;
}

function initRenderer(element, width, height) {
  let renderer = new CSS3DRenderer();
  renderer.setSize(width || window.innerWidth, height || window.innerHeight);
  renderer.domElement.style.position = "absolute";
  element && element.appendChild(renderer.domElement);
  return renderer;
}

function initControls(camera, element) {
  let controls = new TrackballControls(camera, element);
  controls.rotateSpeed = 0.5;
  controls.minDistance = 500;
  controls.maxDistance = 7000;
  return controls;
}

function createCSSObjects(details) {
  let objects = [];
  details.forEach((detail) => {
    let wrapper = document.createElement("div");
    wrapper.classList.add("whatami-element-wrapper");

    let element = document.createElement("div");
    element.classList.add("whatami-element");
    element.classList.add("hoverable");
    element.style.backgroundColor =
      "hsla(0,100%," + Math.floor(Math.random() * 55 + 20) + "%,0.5)";
    wrapper.appendChild(element);

    let title = document.createElement("div");
    title.classList.add("whatami-element-title");
    title.textContent = detail.titleText;
    // title.style.setProperty("--c", element.style.backgroundColor);
    element.appendChild(title);

    let content = document.createElement("div");
    content.classList.add("whatami-element-content");
    content.textContent = detail.content;
    element.appendChild(content);

    let object = new CSS3DObject(wrapper);
    object.position.x = Math.random() * 3000 - 1000;
    object.position.y = Math.random() * 3000 - 1000;
    object.position.z = Math.random() * 3000 - 1000;

    objects.push(object);
  });
  return objects;
}

function createRandom(objects) {
  let random = [];

  objects.forEach(() => {
    let object = new THREE.Object3D();
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;

    random.push(object);
  });

  return random;
}

function createTable(objects) {
  let table = [];

  for (let i = 0; i < objects.length; i++) {
    let object = new THREE.Object3D();
    object.position.x = 200 * (i % 10) - 800;
    object.position.y = 200 * Math.floor(i / 10) + 100;
    object.position.z = 0;
    table.push(object);
  }

  return table;
}

function createGrid(objects) {
  let grid = [];

  for (let i = 0; i < objects.length; i++) {
    let object = new THREE.Object3D();
    object.position.x = 200 * (i % 5) - 200;
    object.position.y = 200 * (Math.floor(i / 5) % 3);
    object.position.z = 400 * Math.floor(i / 15);
    grid.push(object);
  }

  return grid;
}

function createSphere(objects, r = 600) {
  let sphere = [];

  let vector = new THREE.Vector3();
  for (let i = 0; i < objects.length; i++) {
    let phi = Math.acos(1 - (2 * i) / objects.length);
    let theta = Math.PI * (1 + Math.sqrt(5)) * i;

    let object = new THREE.Object3D();
    object.position.x = r * Math.cos(theta) * Math.sin(phi);
    object.position.y = r * Math.sin(theta) * Math.sin(phi);
    object.position.z = r * Math.cos(phi);
    vector.copy(object.position).multiplyScalar(2);
    object.lookAt(vector);

    sphere.push(object);
  }

  return sphere;
}

export {
  initScene,
  initCamera,
  initRenderer,
  initControls,
  createCSSObjects,
  createRandom,
  createTable,
  createGrid,
  createSphere,
};
