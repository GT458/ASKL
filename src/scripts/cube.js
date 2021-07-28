import * as THREE from './three.module';

export default class Cube {

  constructor(color) {
    
    this.color = color;
    this.obj = this.createModel();
    // setTimeout(() => {
    //   THREE.BufferGeometry.dispose();
    // },10000)

    setInterval(() => {
      this.obj.position.z += 1;
    }, 100)
    
  }

  createModel() {
    const geometry = new THREE.BoxGeometry( 5, 5, 15 );
    const material = new THREE.MeshBasicMaterial({color: this.color});
    const cube = new THREE.Mesh( geometry, material);

    return cube;
  }

  
}