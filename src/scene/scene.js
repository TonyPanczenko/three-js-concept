import { Scene } from 'three';

import backgroundPattern from './backgroundPattern/mesh';

const scene = new Scene();
scene.add(backgroundPattern);
backgroundPattern.position.set(-10, 0, 0);

export default scene;