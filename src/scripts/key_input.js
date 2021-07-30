
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
    window.addEventListener("keydown", this.keyDown.bind(this), true);
    window.addEventListener("keyup", this.keyUp.bind(this), true);
  }
  
  keyDown(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
        switch(event.key) {
          case 'a':
            this.setKeyDown('a');
            // console.log(this.getKeyDown());

            // this.keysDown.a = true;
            break;
          case 's':
            this.setKeyDown('s');
            // keysDown.s = true;
            break;
          case 'k':
            this.setKeyDown('k');
            // keysDown.k = true;
            break;
          case 'l':
            this.setKeyDown('l');
            // keysDown.l = true;
            break;
          default:
            return;
        }
        console.log(this.getKeyDown());
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
    console.log(this.getKeyDown());
    event.preventDefault();
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