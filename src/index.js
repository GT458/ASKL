const Input = require('./scripts/input');
let beginGame = false;
// import keyInputs from './scripts/key_input';
import Cube from './scripts/cube';
import * as THREE from './scripts/three.module.js';
import GameEngine from './scripts/game_engine';
// let camera, scene, renderer;
// let geometry, material1, material2, material3, material4;
// let mesh1, mesh2, mesh3, mesh4;

document.addEventListener("DOMContentLoaded", () => {
  // const keyHandler = new keyInputs();
  if (beginGame) {
    
    beginGame = false;
  }
  const canv = document.getElementById('gameCanvas');
  const btn = document.querySelector('.begin-game-btn');
  
  btn.addEventListener('click', e => {
    canv.classList.add('show-colors');
    btn.classList.add('hide');
    const ge = new GameEngine();
  })
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