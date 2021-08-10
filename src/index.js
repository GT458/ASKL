const Input = require('./scripts/input');
let beginGame = false;
// import keyInputs from './scripts/key_input';
import Cube from './scripts/cube';
// import * as THREE from './scripts/three.min.js';
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
  const ge = new GameEngine();
  setTimeout(() => {
    canv.style.opacity = 1;
  }, 100)
  const score = document.querySelector('.score');
  const btn = document.querySelector('.play-btn');
  const screenCover = document.querySelector('.screen-cover');
  document.body.append(btn);

  btn.addEventListener('click', e => {
    btn.classList.toggle('hide');
    score.classList.toggle('hide');
    screenCover.classList.add('hide');
    ge.gameInit();
  })
})

