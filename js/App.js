function App(){
  this.userFrom = new UserForm(document.getElementById('userForm'));
  this.usersTable = new UsersTable(document.getElementById('usersTable'));  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));  
  this.init()
}

App.prototype.init = function(){
  var self = this;
  this.userFrom.emitter.on('userCreated', function(user){
    self.usersTable.renderUser.call(self.usersTable, user);
    self.reviewForm.addUserToSelect.call(self.reviewForm, user);
  }); 
  
  this.reviewForm.emitter.on('reviewCreated', function(review){
    self.usersTable.renderReview.call(self.usersTable, review)
  });

  this.usersTable.emitter.on('userDeleted', function(userId){
    self.reviewForm.deleteUserFromSelect.call(self.reviewForm, userId);
  });
}

window.addEventListener('DOMContentLoaded', function(){
  new App();
})
