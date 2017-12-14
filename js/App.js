function App(){
  this.users = [];
  this.userFrom = new UserForm(document.getElementById('userForm'));
  this.usersTable = new UsersTable(document.getElementById('usersTable'));  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));
  this.init();
}

App.prototype.init = function () {
  var peter = {name : 'Peter', id: Math.random() * 100},
      john = {name : 'John', id: Math.random() * 100},
      tom = {name : 'Tom', id: Math.random() * 100};

  this.users.push(peter, john, tom);

  this.usersTable.emitter.emit('userCreated', peter);
  this.usersTable.emitter.emit('userCreated', john);
  this.usersTable.emitter.emit('userCreated', tom);
  
  var reviewOnPeter = {reviewText:'Some text', id: Math.random() * 1000, userId: peter.id},
      reviewOnPeter2 = {reviewText:'Some text2', id: Math.random() * 1000, userId: peter.id},
      reviewOnJohn = {reviewText:'Lore me text', id: Math.random() * 1000, userId: john.id},
      reviewOnJohn2 = {reviewText:'short text', id: Math.random() * 1000, userId: john.id},
      reviewOnTom = {reviewText:'Very very very long text', id: Math.random() * 1000, userId: tom.id},
      reviewOnTom2 = {reviewText:'unreadable text dsadasd', id: Math.random() * 1000, userId: tom.id};

  this.usersTable.emitter.emit('reviewCreated', reviewOnPeter);
  this.usersTable.emitter.emit('reviewCreated', reviewOnPeter2);
  this.usersTable.emitter.emit('reviewCreated', reviewOnJohn);
  this.usersTable.emitter.emit('reviewCreated', reviewOnJohn2);
  this.usersTable.emitter.emit('reviewCreated', reviewOnTom);
  this.usersTable.emitter.emit('reviewCreated', reviewOnTom2);
  
}

window.addEventListener('DOMContentLoaded', function(){
  new App();
})
