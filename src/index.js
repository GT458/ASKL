const Input = require('./scripts/input')
import keyInputs from './scripts/key_input';

import * as THREE from './scripts/three.module.js';
let camera, scene, renderer;
let geometry, material, mesh;

document.addEventListener("DOMContentLoaded", () => {
  const keyHandler = new keyInputs();
  window.addEventListener("keydown", function(event) {
      // debugger;
      if (event.defaultPrevented) {
        return;
      }
     
        switch(event.key) {
          case 'a':
            keyHandler.setKeyDown('a');
            // setKeyDown('a');
            // this.keysDown.a = true;
            break;
          case 's':
            keyHandler.setKeyDown('s');
            // keysDown.s = true;
            break;
          case 'k':
            keyHandler.setKeyDown('k');
            // keysDown.k = true;
            break;
          case 'l':
            keyHandler.setKeyDown('l');
            // keysDown.l = true;
            break;
          default:
            console.log('key down');
        }
      
        
  })

  window.addEventListener("keyup", function(event) {
      if (event.defaultPrevented) {
        return;
      }

      switch(event.key) {
        case 'a':
            keyHandler.setKeyDown('a');
            
            break;
          case 's':
            keyHandler.setKeyDown('s');
            // keysDown.s = true;
            break;
          case 'k':
            keyHandler.setKeyDown('k');
            // keysDown.k = true;
            break;
          case 'l':
            keyHandler.setKeyDown('l');
            // keysDown.l = true;
            break;
        default:
          console.log('key up')
      }
    })
  console.log(keyHandler.getKeyDown());
  // console.log('loaded');
  // const input = new Input(document.querySelector('.button'), document.querySelector('span'));
  // const canvas = document.querySelector('#gameCanvas');
  // const gl = canvas.getContext("webgl2");
  
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 2;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshBasicMaterial({color: "green"});

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
	document.body.appendChild( renderer.domElement );
  if (keyHandler.keysDown.a) {
    console.log('a was pressed!')
  }
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
    // mesh.position.x = keyInputs.keysDown.a ? mesh.position.x + 1 : 0;
    // mesh.rotation.x = Date.now() * 0.0005;
    // mesh.rotation.y = Date.now() * 0.001;
    renderer.render( scene, camera );
  }
function main() {

  
  
}

window.onload = main;