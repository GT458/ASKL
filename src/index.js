const Input = require('./scripts/input')
import * as keyInputs from './scripts/key_input';
import * as THREE from './scripts/three.module.js';
  let camera, scene, renderer;
  let geometry, material, mesh;

document.addEventListener("DOMContentLoaded", () => {
  
  // console.log('loaded');
  // const input = new Input(document.querySelector('.button'), document.querySelector('span'));
  // const canvas = document.querySelector('#gameCanvas');
  // const gl = canvas.getContext("webgl2");

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
	document.body.appendChild( renderer.domElement );
  // animate();
  
  // if (gl === null) {
  //   alert("Unable to initialize WebGL. Your browser or machine may not support it.");
  //   return;
  // }
  
  // gl.clearColor(0.0,0.0, 0.0, 1.0);
  // gl.clear(gl.COLOR_BUFFER_BIT);
  
})
function animation(time) {
    // requestAnimationFrame(animate);
    mesh.rotation.x = Date.now() * 0.00005;
    mesh.rotation.y = Date.now() * 0.0001;
    renderer.render( scene, camera );
  }
function main() {

  
  
}

window.onload = main;