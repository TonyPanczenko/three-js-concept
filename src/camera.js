import { PerspectiveCamera } from 'three';

const camera = new PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);
camera.translateZ(10);

export default camera; 