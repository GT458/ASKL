
class keyInputs {
  constructor() {
    this.keysDown = {
      a: false,
      s: false,
      k: false,
      l: false
    }
    // this.keyDown();
    // this.keyUp();
    this.setKeyDown = this.setKeyDown.bind(this);
    this.getKeyDown = this.getKeyDown.bind(this);
  }
  
  keyDown() {

    // window.addEventListener("keydown", function(event) {
    //   // debugger;
    //   if (event.defaultPrevented) {
    //     return;
    //   }
     
    //     switch(event.key) {
    //       case 'a':
    //         // setKeyDown('a');
    //         // this.keysDown.a = true;
    //         break;
    //       case 's':
    //         console.log('s down');
    //         // keysDown.s = true;
    //         break;
    //       case 'k':
    //         console.log('k down');
    //         // keysDown.k = true;
    //         break;
    //       case 'l':
    //         console.log('l down');
    //         // keysDown.l = true;
    //         break;
    //       default:
    //         console.log('key down');
    //     }
      
      
    // })
  }

  keyUp() {
  //   window.addEventListener("keyup", function(event) {
  //   if (event.defaultPrevented) {
  //     return;
  //   }

  //   switch(event.key) {
  //     case 'a':
  //       // keysDown.a = false;
  //       // console.log(`key: ${this.getKeyDown()}`)
  //       // this.setKeyDown('a');
  //       // console.log('a up');
  //       break;
  //     case 's':
  //       // keysDown.s = false;
  //       console.log('s up');
  //       break;
  //     case 'k':
  //       // keysDown.k = false;
  //       console.log('k up');
  //       break;
  //     case 'l':
  //       // keysDown.l = false;
  //       console.log('l up');
  //       break;
  //     default:
  //       console.log('key up')
  //   }
  // })
  }

  getKeyDown() {
    return this.keysDown;
  }

  setKeyDown(key) {
    this.keysDown[key] = !this.keysDown[key];
    // console.log(this.keysDown)
  }
}

export default keyInputs;