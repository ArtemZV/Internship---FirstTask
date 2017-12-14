function App(){
  this.userFrom = new UserForm(document.getElementById('userForm'));
  this.usersTable = new UsersTable(document.getElementById('usersTable'));  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));  
}

window.addEventListener('DOMContentLoaded', function(){
  var eventEmitter = new EventEmitter();
  new App();
})
