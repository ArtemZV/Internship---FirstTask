function App(){
  this.userFrom;
  this.usersTable;
  this.reviewForm;  
  this.init();
}

App.prototype.init = function(){
  this.eventEmitter = new EventEmitter(); 
  
  this.userFrom = new UserForm(document.getElementById('userForm'));
  this.usersTable = new UsersTable(document.getElementById('usersTable'));  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));  
}

window.addEventListener('DOMContentLoaded', function(){
  var App = new App();
})
