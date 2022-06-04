import { WebGLRenderer } from 'three';

import scene from './scene/scene';
import camera from './camera';

const renderer = new WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);

document.body.appendChild(renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();