import { Mesh, CylinderGeometry, MeshBasicMaterial } from 'three';

const geometry = new CylinderGeometry( 5, 5, 30, 15, 15, true );
const material = new MeshBasicMaterial({ 
  color: 0xff0000,
  wireframe: true
});
const mesh = new Mesh( geometry, material );

export default mesh;