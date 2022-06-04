import { PerspectiveCamera } from 'three';

const camera = new PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);

export default camera; 