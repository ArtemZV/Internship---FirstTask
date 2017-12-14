function App(){
  this.ui = {};
  this.init();
}

App.prototype.init = function(){
  this.ui.userInput = new UserInput(this);
  this.ui.reviewInput = new ReviewInput(this);
}
  
new App();
