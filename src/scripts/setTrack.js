import * as THREE from './scripts/three.module.js';
export default class SetTrack {
  constructor() {
    this.scene = new THREE.scene;
    this.camera = new THREE.PerspectiveCamera(90, 100/100, .15, 15);
    const canas = document.getElementById('gameCanvas');
    this.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    this.animate = this.animate.bind(this);
  }
}