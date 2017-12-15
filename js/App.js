function App(){
  this.userFrom = new UserForm(document.getElementById('userForm'));
  this.usersTable = new UsersTable(document.getElementById('usersTable'));  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));  
  this.init()
}

App.prototype.init = function(){
  this.userFrom.emitter.on('userCreated', this.usersTable.renderUser.bind(this.usersTable));    
  this.userFrom.emitter.on('userCreated', this.reviewForm.addUserToSelect.bind(this.reviewForm)); 
  this.reviewForm.emitter.on('reviewCreated', this.usersTable.renderReview.bind(this.usersTable));
  this.usersTable.emitter.on('userDeleted', this.reviewForm.deleteUserFromSelect.bind(this.reviewForm));  
}

window.addEventListener('DOMContentLoaded', function(){
  new App();
})
