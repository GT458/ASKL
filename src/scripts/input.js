class Input {
  constructor(button, span) {
    this.btn = button;
    this.timesClicked = 0;
    this.span = span;
    this.handleClick = this.handleClick.bind(this);
    this.bindEvent();
  }
  bindEvent() {
    this.btn.addEventListener("click", this.handleClick) 
  }
  handleClick(e) {
    this.timesClicked += 1;
    this.span.textContent = `${this.timesClicked}`;
    // console.log(this.timesClicked);
  }
}

module.exports = Input;