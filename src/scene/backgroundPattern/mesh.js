import { Mesh, PlaneGeometry, MeshBasicMaterial, Vector3 } from 'three';

const geometry = new PlaneGeometry( 100, 100, 40, 40 );
const material = new MeshBasicMaterial({ 
  color: 0xff0000,
  wireframe: true
});
const mesh = new Mesh( geometry, material );

export default mesh;