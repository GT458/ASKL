import * as THREE from './three.module'
import Cube from './cube';
const fonter = require('../fonts/roboto.json')
const STARTING_POSITIONS = {a: (0,0,-100), s: (6, 0, -100), k: (12, 0, -100), l: (18, 0, -100)}
export default class GameEngine {
  constructor() {
    this.spawnedObjects = [];
    this.gameRunning = false;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 60, 2, .01, 5000 );
    const canvas = document.getElementById('gameCanvas');
    this.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    document.body.appendChild( this.renderer.domElement );
    // this.animation = this.animation.bind(this);
    this.animate = this.animate.bind(this);
    this.aCube = new Cube('green').obj;
    this.sCube = new Cube('pink').obj;
    this.kCube = new Cube('red').obj;
    this.lCube = new Cube('blue').obj;
    this.light = new THREE.AmbientLight(0x404040, 2);
    this.light.position.set(0, 0, -50);
    this.scene.add(this.light);
    this.trackGeo = new THREE.BoxGeometry(1200,40, 3);
    this.trackMaterial = new THREE.MeshToonMaterial({color: 0x45618F})
    this.plane = new THREE.Mesh(this.trackGeo, this.trackMaterial);
    this.scene.add(this.plane);
    
    // this.title = new THREE.TextGeometry("A S K L", {
    //   size: 30,
    //   height: 20,
    //   font: "Tahoma",
    // });
    this.gameInit();
    
  }

  gameInit() {
    // const loader = new THREE.FontLoader();

    // loader.load( fonter, function ( font ) {

    //   const geometry = new THREE.TextGeometry( 'ASKL', {
    //     font: font,
    //     size: 80,
    //     height: 5,
    //     curveSegments: 12,
    //     bevelEnabled: true,
    //     bevelThickness: 10,
    //     bevelSize: 8,
    //     bevelOffset: 0,
    //     bevelSegments: 5
    //   } );
    //   this.scene.add(geometry);
    // });
    // this.scene.add(geometry);
    // this.title.position.set(0, 0, -20);
    this.camera.position.set(0, 20, 200);
    this.camera.lookAt(0,0,-50);
    this.gameRunning = true;
    this.plane.rotateZ(Math.PI/2);
    this.plane.rotateY(Math.PI/2);
    this.plane.position.set(0,-10,0);
    {
      let cubes = [this.aCube, this.sCube, this.kCube, this.lCube];
      setInterval(() => {

        let tempCube = cubes[Math.floor(Math.random()*cubes.length)].clone();
        tempCube.name ='temp-cube';
        this.spawnedObjects.push(tempCube);
        this.scene.add(tempCube);
        tempCube.position.set(Math.floor(-10+Math.random()*20), 0, -200);
      }, 1000)
      // for (let i = 0; i < 10; i++) {
        
      // }
      
    }
    requestAnimationFrame(this.animate);
    
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
      // cube.rotation.x = rot;
      // cube.rotation.y = rot;
      cube.position.z = cube.position.z + 5;
      
    });

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.animate);
  }
  
}