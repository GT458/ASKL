const Input = require('./scripts/input')
document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded');
  const input = new Input(document.querySelector('.button'), document.querySelector('span'));
})