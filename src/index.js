const Input = require('./scripts/input')
import keyInputs from './scripts/key_input';
import Cube from './scripts/cube';
import * as THREE from './scripts/three.module.js';
import GameEngine from './scripts/game_engine';
// let camera, scene, renderer;
// let geometry, material1, material2, material3, material4;
// let mesh1, mesh2, mesh3, mesh4;

document.addEventListener("DOMContentLoaded", () => {
  const keyHandler = new keyInputs();
  const ge = new GameEngine();
  // const canvas = document.getElementById('gameCanvas');
  // console.log(keyHandler.getKeyDown());
  // console.log('loaded');
  // const input = new Input(document.querySelector('.button'), document.querySelector('span'));
  // const canvas = document.querySelector('#gameCanvas');
  // const gl = canvas.getContext("webgl2");
  

  //  SET UP THE SCENE
  // camera = new THREE.PerspectiveCamera( 60, 100 / 100, 0.01, 500 );
	
	// scene = new THREE.Scene();
  // const aCube = new Cube('green').obj;
  // const sCube = new Cube('pink').obj;
  // const kCube = new Cube('red').obj;
  // const lCube = new Cube('blue').obj;

  // aCube.name = 'a';
  // sCube.name = 'b';
  // kCube.name = 'k';
  // lCube.name = 'l';
  
  // debugger;
  // scene.add( aCube );
  // scene.add( sCube );
  // scene.add( kCube );
  // scene.add( lCube );
  // aCube.position.set(10, 0, -50);
  // aCube.position.x += 10;
  // sCube.position.x += 15;
  // kCube.position.x += 5;
  // camera.position.z = 60;
  // camera.position.y += 15;
  // camera.position.x += 10;
  // camera.lookAt(0,0,0);
  // CREATE A CUBE AND PLACE IT
	// geometry = new THREE.BoxGeometry( 5, 5, 15 );
	// material1 = new THREE.MeshBasicMaterial({color: "green"});
  // material2 = new THREE.MeshBasicMaterial({color: "red"});
  // material3 = new THREE.MeshBasicMaterial({color: "blue"});
  // material4 = new THREE.MeshBasicMaterial({color: "yellow"});

	// mesh1 = new THREE.Mesh( geometry, material1);
  // mesh2 = new THREE.Mesh(geometry, material2);
  // mesh3 = new THREE.Mesh(geometry, material3);
  // mesh4 = new THREE.Mesh(geometry, material4);
  // setInterval(() => {
  //   mesh2.rotation.x = Date.now() * 0.0005;
  // }, 10)
  // mesh1.position.z = 15;
  // mesh2.position.z = 18;
  // mesh3.position.z = 20;
  // mesh4.position.z = 25;
  // SETUP UP THE RENDERER FOR THE SCENE, SET ANIMATIONS
	// renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
	// renderer.setSize( 800, window.innerHeight );
	// renderer.setAnimationLoop( animation );
	// document.body.appendChild( renderer.domElement );
  // if (keyHandler.keysDown.a) {
  //   console.log('a was pressed!')
  // }
  // animate();
  
  // if (gl === null) {
  //   alert("Unable to initialize WebGL. Your browser or machine may not support it.");
  //   return;
  // }
  
  // gl.clearColor(0.0,0.0, 0.0, 1.0);
  // gl.clear(gl.COLOR_BUFFER_BIT);
  // camera.position.z = 12;
  // camera.position.y = 0;
  // camera.position.x = 1;
    // debugger;

})
function animation(time) {
    requestAnimationFrame(animation);
    // mesh.position.x = keyInputs.keysDown.a ? mesh.position.x + 1 : 0;
    // mesh.rotation.x = Date.now() * 0.0005;
    // mesh.rotation.y = Date.now() * 0.001;
    renderer.render( scene, camera );
  }
function main() {

  
  
}

window.onload = main;