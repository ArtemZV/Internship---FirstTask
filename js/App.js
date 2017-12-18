function App(){
  this.userForm = new UserForm(document.getElementById('userForm'));
  this.usersTable = new UsersTable(document.getElementById('usersTable'));  
  this.reviewForm = new ReviewForm(document.getElementById('reviewForm'));
  this.init();
}

App.prototype.init = function(){
  var users = [
      {firstName: 'Bob', lastName: 'last name 1', id: Math.random()*100, isConst: false},
      {firstName: 'Tom', lastName: 'last name 2', id: Math.random()*100, isConst: false}];
  this.renderAllUsers(users);

  var reviews= [
    {reviewText: 'shr rvw', id: Math.random()*1000, userId: users[0].id, isAproved: true},
    {reviewText: 'default review', id: Math.random()*1000, userId: users[1].id, isAproved: true},
    {reviewText: 'some review', id: Math.random()*1000, userId: users[1].id, isAproved: true}];
  this.renderAllReviews(reviews);

  var defaultUser = {firstName: 'Default', lastName: 'User', id: Math.random()*100, isConst: true},
      defaultReview = {reviewText: 'default review', id: Math.random()*1000, userId: defaultUser.id, isAproved: true};
  this.renderUser(defaultUser);
  this.renderReview(defaultReview);

  this.userForm.emitter.on('createdUser', this.renderUser.bind(this));
  this.userForm.emitter.on('updateUser', this.updateUser.bind(this));
  this.reviewForm.emitter.on('createdReview', this.renderReview.bind(this));
  this.usersTable.emitter.on('userDeleted', this.deleteUser.bind(this));  
  this.usersTable.emitter.on('editUser', this.editUser.bind(this));

  this.usersTable.emitter.on('showPopup', this.showPopup.bind(this));
}

App.prototype.renderAllUsers = function(usersArr){
  if (typeof usersArr !== 'object') return;
  usersArr.forEach(u => (u.name = `${u.firstName} ${u.lastName}`));
  this.usersTable.emitter.emit('renderAllUsers', usersArr);
  this.reviewForm.emitter.emit('addAllUsersToSelect', usersArr);  
}

App.prototype.renderUser = function(user){
  user.name = `${user.firstName} ${user.lastName}`;
  this.usersTable.emitter.emit('renderUser', user); 
  if (!user.isConst) this.reviewForm.emitter.emit('addUserToSelect', user);
  this.showPopup(`New user - ${user.name} added.`);
}

App.prototype.updateUser = function(user){
  this.usersTable.emitter.emit('updateUser', user);
  this.showPopup(`User - ${user.name} updated`);
}

App.prototype.editUser = function(user) {
  this.userForm.emitter.emit('editUser', user);
  this.showPopup(`User - ${user.name} edited.`);
}

App.prototype.deleteUser = function(user){
  this.reviewForm.emitter.emit('deletedUser', user);
  this.showPopup(`User - ${user.name} deleted.`);
}

App.prototype.renderReview = function(review){
  this.usersTable.emitter.emit('renderReview', review);
  this.showPopup(`You have added review.`);
}

App.prototype.renderAllReviews = function(reviews){
  if (typeof reviews !== 'object') return;
  reviews.forEach(review => {this.usersTable.emitter.emit('renderReview', review)});
}

App.prototype.showPopup = function(message){
  new Popup(message);
}

window.addEventListener('DOMContentLoaded', function(){
  new App();
})