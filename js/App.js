function App(){
  this.eventEmitter = new EventEmitter();
  this.userFrom = new UserForm(document.getElementById('userForm'));
  this.usersTable = new UsersTable(document.getElementById('usersTable'), this.eventEmitter);  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));
  this.init();
}

App.prototype.init = function () {
  var peter = {name : 'Peter', id: Math.random() * 100},
      john = {name : 'John', id: Math.random() * 100},
      tom = {name : 'Tom', id: Math.random() * 100};

  this.eventEmitter.emit('userCreated', peter);
  this.eventEmitter.emit('userCreated', john);
  this.eventEmitter.emit('userCreated', tom);
  
  var reviewOnPeter = {reviewText:'Some text', id: Math.random() * 1000, userId: peter.id},
      reviewOnPeter2 = {reviewText:'Some text2', id: Math.random() * 1000, userId: peter.id},
      reviewOnJohn = {reviewText:'Lore me text', id: Math.random() * 1000, userId: john.id},
      reviewOnJohn2 = {reviewText:'short text', id: Math.random() * 1000, userId: john.id},
      reviewOnTom = {reviewText:'Very very very long text', id: Math.random() * 1000, userId: tom.id},
      reviewOnTom2 = {reviewText:'unreadable text dsadasd', id: Math.random() * 1000, userId: tom.id};

  this.eventEmitter.emit('reviewCreated', reviewOnPeter);
  this.eventEmitter.emit('reviewCreated', reviewOnPeter2);
  this.eventEmitter.emit('reviewCreated', reviewOnJohn);
  this.eventEmitter.emit('reviewCreated', reviewOnJohn2);
  this.eventEmitter.emit('reviewCreated', reviewOnTom);
  this.eventEmitter.emit('reviewCreated', reviewOnTom2);
  
}

window.addEventListener('DOMContentLoaded', function(){
  new App();
})
