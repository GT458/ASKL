const THREE = require('three.js');
export default class SetTrack {
  constructor() {
    this.scene = new THREE.scene;
    this.camera = new THREE.PerspectiveCamera(90, 100/100, .15, 15);
    const canvas = document.getElementById('gameCanvas');
    this.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    this.animate = this.animate.bind(this);
  }
}