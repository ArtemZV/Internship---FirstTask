function App(){
  this.userFrom = new UserForm(document.getElementById('userForm'));
  this.usersTable = new UsersTable(document.getElementById('usersTable'));  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));  
  this.init()
}

App.prototype.init = function(){
  var self = this;
  this.userFrom.emitter.on('userCreated', function(user){
    self.usersTable.emitter.emit('userCreated', user);
    self.reviewForm.emitter.emit('userCreated', user);
  }); 
  
  this.reviewForm.emitter.on('reviewCreated', function(review){
    self.usersTable.emitter.emit('reviewCreated', review);
  });

  this.usersTable.emitter.on('userDeleted', function(userId){
    self.reviewForm.emitter.emit('userDeleted', userId);
  });
}

window.addEventListener('DOMContentLoaded', function(){
  new App();
})
