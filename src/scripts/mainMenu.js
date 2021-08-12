const THREE = require('three.js');

class MainMenu {
  constructor() {
    this.stars = [];
    this.scene = new THREE.Scene();
    const canvas = document.getElementById('gameCanvas');
    this.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    this.animate = this.animate.bind(this);
    this.createStars = this.createStars.bind(this);
    this.camera = new THREE.PerspectiveCamera( 75, 100/100, .01, 5000 );
    this.camera.position.set(0, 20, 200);
    this.camera.lookAt(0,0,50);
    this.clearRenderer = this.clearRenderer.bind(this);
    this.createStars();
  }

  clearRenderer() {
    this.renderer.context.clear(16640);
    this.renderer.clear(true, true);
  }
  initMenu() {
    document.body.appendChild( this.renderer.domElement );
    const render = (time) => {
      if (this.resizeRendererToDisplaySize(this.renderer)) {
        const canvas = this.renderer.domElement;
        // changing the camera aspect to remove the strechy problem
        this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        this.camera.updateProjectionMatrix();
      }
      

      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
    // requestAnimationFrame(this.animate);
  }

  resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    // resize only when necessary
    if (needResize) {
      //3rd parameter `false` to change the internal canvas size
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  createStars() {
    for (let i = 0; i < 1000; i++) {
          let geometry   = new THREE.SphereGeometry(0.5, 32, 32)
					let material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
					let sphere = new THREE.Mesh(geometry, material)
					sphere.position.x = Math.random() * 1000-500;
					sphere.position.y = Math.random() * 1000-500;
					sphere.position.z = Math.random()* 100;
					sphere.scale.x = sphere.scale.y = 2;
          sphere.name = 'star';
					this.scene.add( sphere );
					this.stars.push([sphere, sphere.position.z]); 
    }
  }
  animate() {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i][0].position.z += .001;
      if ( this.stars[i][0].position.z > 400) {
        this.stars[i][0].position.z =  this.stars[i][1];
        this.stars[i][0].position.x = Math.floor(Math.random()*500-250);
        this.stars[i][0].position.y = Math.floor(Math.random()*150-25);
      }
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }
}

export default MainMenu;