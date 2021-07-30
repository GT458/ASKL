import * as THREE from './three.module'
import Cube from './cube';
import * as myFont from '../fonts/helvetiker_regular.typeface.json'
const STARTING_POSITIONS = {a: (0,0,-100), s: (6, 0, -100), k: (12, 0, -100), l: (18, 0, -100)}
export default class GameEngine {
  constructor() {
    this.stars = [];
    this.spawnedObjects = [];
    this.gameRunning = false;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 60, 2, .01, 5000 );
    const canvas = document.getElementById('gameCanvas');
    this.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    document.body.appendChild( this.renderer.domElement );
    // this.animation = this.animation.bind(this);
    this.animate = this.animate.bind(this);
    this.aCube = {model: new Cube('green').obj, startPos: [-12, 0, -300], name: 'a'};
    this.sCube = {model: new Cube('pink').obj, startPos:  [-5, 0, -300], name: 's'};
    this.kCube = {model: new Cube('red').obj, startPos:  [5, 0, -300], name:'k'};
    this.lCube = {model: new Cube('blue').obj, startPos:  [12, 0, -300], name: 'l'};
    this.light = new THREE.DirectionalLight(0xFFFFFF, 2);
    this.light.position.set(0, 0, -50);
    // this.scene.add(this.light);
    this.trackGeo = new THREE.BoxGeometry(1200,40, 3);
    this.trackMaterial = new THREE.MeshPhongMaterial({color: 0xffffff})
    this.plane = new THREE.Mesh(this.trackGeo, this.trackMaterial);
    this.scene.add(this.plane);
    this.addStars = this.addStars.bind(this);
    this.animateStars = this.animateStars.bind(this);
    this.gameInit();
  }

  gameInit() {
    window.addEventListener("keydown", event => {
      this.plane.material.color.setHex(0xffffff)
    })
    window.addEventListener("keyup", event => {
      this.plane.material.color.setHex(0x000000)
    })
    // const loader = new THREE.FontLoader();
    const font = new THREE.Font(myFont);
    const geometry = new THREE.TextGeometry( 'A S K L', {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
      } );
      const pointLight = new THREE.PointLight(0xffffff, .75); 
      pointLight.position.set(0, 50, 200); 
      
      this.scene.add(pointLight); 
      // pointLight.color.setHSL(Math.random(), 1, 0.5);
      let textMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );

      let mesh = new THREE.Mesh( geometry, textMaterial );
      mesh.position.set( -170, 150, -350 );
      mesh.rotateX(Math.PI/5)
      this.scene.add(mesh);
      pointLight.lookAt(mesh.position)
    this.camera.position.set(0, 20, 200);
    this.camera.lookAt(0,0,-50);
    this.gameRunning = true;
    this.plane.rotateZ(Math.PI/2);
    this.plane.rotateY(Math.PI/2);
    this.plane.position.set(0,-10,0);
    {
      let cubes = [this.aCube, this.sCube, this.kCube, this.lCube];
      setInterval(() => {
        let selectedCube = cubes[Math.floor(Math.random()*cubes.length)]
        let tempCube = selectedCube.model.clone();
        tempCube.name = selectedCube.name;
        this.spawnedObjects.push(tempCube);
        this.scene.add(tempCube);
        tempCube.position.set(selectedCube.startPos[0],selectedCube.startPos[1],selectedCube.startPos[2])
        // debugger;
        // tempCube.position.set(Math.floor(-10+Math.random()*20), 0, -200);
      }, 1000)
      // for (let i = 0; i < 10; i++) {
        
      // }
      
    }
    requestAnimationFrame(this.animate);
    // requestAnimationFrame(this.animateStars);
    this.addStars();
  }

  removeSomeObject(object) {
    this.scene.remove(object);
    object.geometry.dispose();
    object.material.dispose();
    object = undefined;
    console.log('bye bye');
  }
  animate(time) {
    time *= 0.001;

    this.spawnedObjects.forEach((cube, ndx) => {
      if (cube === undefined) {
        console.log('poop cube');
        return;
      }
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      // cube.rotation.x = rot;
      // cube.rotation.y = rot;
      cube.position.z = cube.position.z + 5;
      if (cube.position.z > 300) {
        this.removeSomeObject(cube);
      }
    });

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.animate);
    requestAnimationFrame(this.animateStars);
  }
  
  addStars(){
    	for ( let z= -1000; z < 1000; z+=20 ) {
					let geometry   = new THREE.SphereGeometry(0.5, 32, 32)
					let material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
					let sphere = new THREE.Mesh(geometry, material)
					sphere.position.x = Math.random() * 1000-500;
					sphere.position.y = Math.random() * 1000-500;
					sphere.position.z = z;
					sphere.scale.x = sphere.scale.y = 2;
					this.scene.add( sphere );
					this.stars.push([sphere, sphere.position.z]); 
				}
	}

  animateStars() {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i][0].position.z += .001;
      if ( this.stars[i][0].position.z > 400) {
        this.stars[i][0].position.z =  this.stars[i][1];
        this.stars[i][0].position.x = Math.floor(Math.random()*500-250);
        this.stars[i][0].position.y = Math.floor(Math.random()*150-25);
      }
    }
    // this.renderer.render(this.scene, this.camera);
    // requestAnimationFrame(this.animateStars);
  }
}