import { LoadingManager } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const manager = new LoadingManager(
  () => console.log( 'Loading complete!'),
  (url, itemsLoaded, itemsTotal) => console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' ),
  (url) => console.log( 'There was an error loading ' + url ),
);
const loader = new GLTFLoader(manager);

export default loader;