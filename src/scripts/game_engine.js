import * as THREE from './three.module'
import Cube from './cube';
export default class GameEngine {
  constructor() {
    this.spawnedObjects = [];
    this.gameRunning = false;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 60, 2, .01, 5000 );
    const canvas = document.getElementById('gameCanvas');
    this.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    document.body.appendChild( this.renderer.domElement );
    this.animation = this.animation.bind(this);
    this.animate = this.animate.bind(this);
    this.aCube = new Cube('green').obj;
    this.sCube = new Cube('pink').obj;
    this.kCube = new Cube('red').obj;
    this.lCube = new Cube('blue').obj;
    this.gameInit();
    
  }

  gameInit() {
    this.camera.position.set(0, 30, 100);
    this.camera.lookAt(0,0,-50);
    this.gameRunning = true;
    let tempCube = this.aCube.clone();
    tempCube.name ='temp-cube';
    this.spawnedObjects.push(tempCube);
    this.scene.add(tempCube);
    tempCube.position.set(0, 0, -50);
    requestAnimationFrame(this.animate);
    // while (this.gameRunning) {
    // }
    // setInterval(() => {
    //   let tempCube = this.aCube.clone();
    //   tempCube.name ='temp-cube';
    //   this.spawnedObjects.push(tempCube);
    //   this.scene.add(tempCube);
    //   tempCube.position.set(0, 0, -50);
    //   // this.spawnedObjects.forEach(obj => {
    //   //   obj.position.z += 1;
    //   // })
     
    //   console.log(this.spawnedObjects[0].position)
    // }, 100)
    
    // setTimeout(() => {
    //   let spojs = this.scene;
    //   debugger;
    // }, 5000);
  }

  removeSomeObject(object) {
    this.scene.remove(cubeMesh);
    object.geometry.dispose();
    object.material.dispose();
    object = undefined;
  }
  animate(time) {
    time *= 0.001;

    this.spawnedObjects.forEach((cube, ndx) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
      cube.position.z = cube.position.z + 1;
      
    });

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.animate);
  }
  animation(time) {
    requestAnimationFrame(animation);
    // mesh.position.x = keyInputs.keysDown.a ? mesh.position.x + 1 : 0;
    // mesh.rotation.x = Date.now() * 0.0005;
    // mesh.rotation.y = Date.now() * 0.001;
    renderer.render( scene, camera );
  }
}