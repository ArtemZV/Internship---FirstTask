function App(){
  this.ui = {};
  this.init();
}

App.prototype.init = function(){
  this.ui.userFrom = new UserForm(document.getElementById('userForm'));
  this.ui.reviewForm = new ReviewForm(document.getElementById('reviewForm'));
}
  
window.addEventListener('DOMContentLoaded', function(){
  new App();
})
