
const THREE = require('three.js');
// const POSTPROCESSING = require('postprocessing');
import smokeTexture from '../images/smoke.png';
import stars from '../images/stars.jpeg';
import Cube from './cube';
import * as myFont from '../fonts/helvetiker_regular.typeface.json';
// import {POSTPROCESSING} from postprocessing;
export default class GameEngine {
  constructor() {

    // SET ARRAYS, SET UP CANVAS AND ENVIRONMENT
    this.stars = [];
    this.cloudParticles = [];
    this.spawnedObjects = [];
    this.gameRunning = false;
    this.scene = new THREE.Scene();
    
    const canvas = document.getElementById('gameCanvas');
    this.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    document.body.appendChild( this.renderer.domElement );
    this.scene.fog = new THREE.FogExp2(0x03544e, 0.001);
    this.renderer.setClearColor(this.scene.fog.color);
    this.setBackground(this.scene, this.cloudParticles);

    // SET CAMERA 
    this.camera = new THREE.PerspectiveCamera( 75, 100/100, .01, 5000 );
    this.camera.position.set(0, 20, 200);
    this.camera.lookAt(0,0,50);


    // SET CUBE MODELS
    this.aCube = {model: new Cube('green').obj, startPos: [-12, 0, -300], name: 'a'};
    this.sCube = {model: new Cube('pink').obj, startPos:  [-5, 0, -300], name: 's'};
    this.kCube = {model: new Cube('red').obj, startPos:  [5, 0, -300], name:'k'};
    this.lCube = {model: new Cube('blue').obj, startPos:  [12, 0, -300], name: 'l'};


    
    
    

    // SET GOAL/KEY HIT AREA
    this.goalAreaGeo = new THREE.BoxGeometry(40, 5, 3);
    this.goalMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
    this.goalArea = new THREE.Mesh(this.goalAreaGeo, this.goalMaterial);
    this.scene.add(this.goalArea);
    this.goalArea.rotateX(Math.PI/2);
    this.goalArea.position.set(0, -5, 150);

    // SET LONG TRACK
    this.trackGeo = new THREE.BoxGeometry(1200,40, 3);
    this.trackMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
    this.plane = new THREE.Mesh(this.trackGeo, this.trackMaterial);
    this.scene.add(this.plane);
    this.plane.rotateZ(Math.PI/2);
    this.plane.rotateY(Math.PI/2);
    this.plane.position.set(0,-10,0);

    // SET INIT KEY AND SCORE
    this.score = 0;
    this.keysDown = {
      a: false,
      s: false,
      k: false,
      l: false
    }


    // SET ASKL FONT
    this.font = new THREE.Font(myFont);
    this.geometry = new THREE.TextGeometry( 'A S K L', {
        font: this.font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
      } );
    this.textMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
    this.mesh = new THREE.Mesh( this.geometry, this.textMaterial );
    this.mesh.position.set( -170, 150, -350 );
    this.mesh.rotateX(Math.PI/5)
    this.scene.add(this.mesh);




    // LIGHTING
    this.directionalLightPaleOrange = new THREE.DirectionalLight(0xff8c19);
    this.directionalLightPaleOrange.position.set(0,0,1);
    // this.scene.add(this.directionalLightPaleOrange);    
    this.orangeLight = new THREE.DirectionalLight(0xcc6600,50,450,1.7);
    this.orangeLight.position.set(-50,10,-300);
    this.scene.add(this.orangeLight);
    this.redLight = new THREE.PointLight(0xd8547e,50,450,1.7);
    this.redLight.position.set(0,10,-300);
    this.scene.add(this.redLight);
    this.blueLight = new THREE.PointLight(0x3677ac,50,450,1.7);
    this.blueLight.position.set(50,10,-300);
    this.scene.add(this.blueLight);
    
    // this.ambientLight = new THREE.AmbientLight(0x777777);
    // this.scene.add(this.ambientLight);
    
    this.light = new THREE.PointLight(0xffffff);
    this.light.position.set(0, 0, -50);
    // this.scene.add(this.light);

    // SET WINDOW FUNCTIONS, BINDING
    this.setKeyDown = this.setKeyDown.bind(this);
    this.getKeyDown = this.getKeyDown.bind(this);
    window.addEventListener("keydown", this.keyDown.bind(this), true);
    window.addEventListener("keyup", this.keyUp.bind(this), true);
    this.scoreObj = document.querySelector(".score");
    this.removeSomeObject = this.removeSomeObject.bind(this);
    this.addStars = this.addStars.bind(this);
    this.animateStars = this.animateStars.bind(this);
    this.animate = this.animate.bind(this);

    // INITIALIZE GAME
    // this.gameInit();
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

  

  gameInit() {
    window.addEventListener("keydown", event => {
      // this.goalArea.material.color.setHex(0xffffff)
      let objs = this.spawnedObjects;
      let childs = this.scene.children;
      
      // debugger;
    })
    window.addEventListener("keyup", event => {
      
      
    })
    const pointLight = new THREE.PointLight(0xffffff, .75); 
    pointLight.position.set(0, 50, 200); 
    // this.scene.add(pointLight); 
    // pointLight.color.setHSL(Math.random(), 1, 0.5); 
    pointLight.lookAt(this.mesh.position)
    this.gameRunning = true;
    

    // this is how cubes are currently spawned, completely randomly at the same interval
    {
      let cubes = [this.aCube, this.sCube, this.kCube, this.lCube];
      setInterval(() => {
        let selectedCube = cubes[Math.floor(Math.random()*cubes.length)]
        let tempCube = selectedCube.model.clone();
        tempCube.name = selectedCube.name;
        this.spawnedObjects.push(tempCube);
        this.scene.add(tempCube);
        tempCube.position.set(selectedCube.startPos[0],selectedCube.startPos[1],selectedCube.startPos[2])
        
      }, 1000)
      
    }
    const render = (time) => {
      if (this.resizeRendererToDisplaySize(this.renderer)) {
        const canvas = this.renderer.domElement;
        // changing the camera aspect to remove the strechy problem
        this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        this.camera.updateProjectionMatrix();
      }
      this.cloudParticles.forEach(cloudP => {
        cloudP.rotation.z -= 0.001;
      })

      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
    requestAnimationFrame(this.animate);
    // requestAnimationFrame(this.animateStars);
    
    // this.addStars();
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
    // this.mesh.rotateX(Math.PI/time*.1);
    this.spawnedObjects.forEach((cube, ndx) => {
      // if (cube === undefined) {
      //   console.log('poop cube');
      //   return;
      // }
      const rot = time *.001;
      const speed = 1 + ndx * .07;
      
      cube.rotation.x = rot;
      cube.rotation.y = rot;
      cube.position.z = cube.position.z + 5;
      if (cube.position.z > 300) {
        this.spawnedObjects.shift();
        this.removeSomeObject(cube);
        this.score -= 1;
        this.scoreObj.textContent = `Score: ${this.score}`;
      }
      let debounce = false;
      if (cube.position.z > 145 && cube.position.z < 160) {
        console.log('yoo');
        
        if (this.keysDown[cube.name] && !debounce) {
          debounce = true;
          console.log('score!');
          this.score += 1;
          this.scoreObj.textContent = `Score: ${this.score}`;
          this.removeSomeObject(cube);
        }
        
      }
      debounce = false;
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
          sphere.name = 'star';
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
  keyDown(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
        switch(event.key) {
          case 'a':
            this.setKeyDown('a');
            // console.log(this.getKeyDown());
            this.goalArea.material.color.setHex(0x63e695);
            // this.keysDown.a = true;
            break;
          case 's':
            this.setKeyDown('s');
            this.goalArea.material.color.setHex(0xe49ded);
            // keysDown.s = true;
            break;
          case 'k':
            this.setKeyDown('k');
            this.goalArea.material.color.setHex(0xe31219);
            // keysDown.k = true;
            break;
          case 'l':
            this.setKeyDown('l');
            this.goalArea.material.color.setHex(0x3d9ee3);
            // keysDown.l = true;
            break;
          default:
            return;
        }
        
        event.preventDefault();
  }

  keyUp(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    
    switch(event.key) {
      case 'a':
        // keysDown.a = false;
        // console.log(`key: ${this.getKeyDown()}`)
        this.setKeyDown('a');
        // console.log(this.getKeyDown());
        break;
      case 's':
        // keysDown.s = false;
        this.setKeyDown('s');
        // console.log('s up');
        break;
      case 'k':
        this.setKeyDown('k');
        // keysDown.k = false;
        // console.log('k up');
        break;
      case 'l':
        // keysDown.l = false;
        this.setKeyDown('l');
        // console.log(\'l up');
        break;
      default:
        return;
    }
    console.log(this.score);
    this.goalArea.material.color.setHex(0xffffff)
    event.preventDefault();
  }

  getKeyDown() {
    return this.keysDown;
  }

  setKeyDown(key) {
    this.keysDown[key] = !this.keysDown[key];
    // console.log(this.keysDown)
  }

  setBackground(scene, cloudParticles) {
    let loader = new THREE.TextureLoader();
    
  
    loader.load(smokeTexture, function(texture) {
      let cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
      let cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true
      });
    
      for (let i = 0; i < 50; i++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(Math.random() *2000-1000, Math.random() *400-50, Math.random()*50-400);
        // cloud.rotation.x = 1.16;
        // cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloudParticles.push(cloud);
        scene.add(cloud);
      }
    })
  }
}