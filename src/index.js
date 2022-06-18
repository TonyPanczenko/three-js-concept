import { WebGLRenderer, sRGBEncoding } from 'three';

import scene from './scene/scene';
import camera from './camera';

const renderer = new WebGLRenderer({
  antialias: true,
  outputEncoding: sRGBEncoding,
});
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();