function App(){
  this.emitter = new EventEmitter();
  this.userFrom = new UserForm(document.getElementById('userForm'), this.emitter);
  this.usersTable = new UsersTable(document.getElementById('usersTable'));  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));  
  this.init()
}

App.prototype.init = function(){
  var self = this;
  this.emitter.on('newUserCreate', function(user){
    self.usersTable.emitter.emit('userCreated', user);
  });
}

window.addEventListener('DOMContentLoaded', function(){
  new App();
})
