export const keyInputs = (
  window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return;
    }
   
      switch(event.key) {
        case 'a':
          console.log('a down');

          break;
        case 's':
          console.log('s down');
          break;
        case 'k':
          console.log('k down');
          break;
        case 'l':
          console.log('l down');
          break;
        default:
          console.log('bingus down');
      }
    
    
},

  window.addEventListener("keyup", function(event) {
    if (event.defaultPrevented) {
      return;
    }

    switch(event.key) {
      case 'a':
        console.log('a up');
        break;
      case 's':
        console.log('s up');
        break;
      case 'k':
        console.log('k up');
        break;
      case 'l':
        console.log('l up');
        break;
      default:
        console.log('bingus up')
    }
  })
))