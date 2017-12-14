function App(){
  this.userFrom = new UserForm(document.getElementById('userForm'));
  this.usersTable = new UsersTable(document.getElementById('usersTable'));  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));  

  this.init();
}

App.prototype.init = function () {
  var peter = new User('Peter'),
      john = new User('John'),
      tom = new User('Tom');      
  
  this.usersTable.renderUser(peter);
  this.usersTable.renderUser(john);
  this.usersTable.renderUser(tom);
  
  var reviewOnPeter = new Review('Some text', peter.id),
      reviewOnPeter2 = new Review('Some text2', peter.id),
      reviewOnJohn = new Review('Lore me text', john.id);

  this.usersTable.renderReview(reviewOnPeter);
  this.usersTable.renderReview(reviewOnPeter2);
  this.usersTable.renderReview(reviewOnJohn);
}

window.addEventListener('DOMContentLoaded', function(){
  new App();
})
