const Input = require('./scripts/input');
let beginGame = false;
// import MainMenu from './scripts/mainMenu';
// import keyInputs from './scripts/key_input';
import Cube from './scripts/cube';
// import * as THREE from './scripts/three.min.js';
import GameEngine from './scripts/game_engine';

document.addEventListener("DOMContentLoaded", () => {
  // const keyHandler = new keyInputs();
  if (beginGame) {
    
    beginGame = false;
  }
  const canv = document.getElementById('gameCanvas');
  const ge = new GameEngine();
  // const mm = new MainMenu();
  setTimeout(() => {
    canv.style.opacity = 1;
  }, 100)
  const btns = document.querySelector('.btns-container')
  const score = document.querySelector('.score');
  const playBtn = document.querySelector('.play-btn');
  const instructionsButton = document.querySelector('.instructions-btn');
  const instructions = document.querySelector('.instructions');
  const screenCover = document.querySelector('.screen-cover');
  const closeBtn = document.querySelector('.close-btn');

  // mm.initMenu();
  // document.body.append(playBtn);
  
  playBtn.addEventListener('click', e => {
    toggleButtonsToHide([btns, screenCover, score]);
    // mm.clearRenderer();
    ge.gameInit();
  })
  closeBtn.addEventListener('click', e => {
    // e.preventPropagation();
    toggleButtonsToHide([instructions,btns])
  })
  instructionsButton.addEventListener('click', e => {
    toggleButtonsToHide([btns, instructions]);
    
  })

  const toggleButtonsToHide = (btns) => {
    btns.forEach( btn => {
      btn.classList.toggle('hide');
    })
  }
})

