import * as THREE from './three.module';

export default class Cube {

  constructor(color) {
    
    this.color = color;
    this.obj = this.createModel();
    // setTimeout(() => {
    //   THREE.BufferGeometry.dispose();
    // },10000)

    // setInterval(() => {
    //   this.obj.position.z += 7;
    // }, 100)
    
  }

  createModel() {
    const geometry = new THREE.BoxGeometry( 5, 5, 5 );
    const material = new THREE.MeshMatcapMaterial({color: this.color});
    const cube = new THREE.Mesh( geometry, material);

    return cube;
  }

  
}