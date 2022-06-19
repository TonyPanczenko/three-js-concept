import { Scene } from 'three';

import assetLoader from '@utils/asset-loader';
import backgroundPattern from './backgroundPattern/mesh';

const scene = new Scene();
scene.add(backgroundPattern);
backgroundPattern.position.set(0, 0, 0);
backgroundPattern.rotation.set(90/(2 * Math.PI), 0, 0);

assetLoader.load(
  '/assets/logos-singlemesh.glb',
  function (gltf) {
    scene.add(gltf.scene);
    console.log(gltf.scene);
  },
);

export default scene;