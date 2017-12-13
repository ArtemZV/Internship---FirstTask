function App(){
  this.init();
}

App.prototype.init = function(){ 

  function addUser(){
    var name = document.getElementById('nameInput').value;
    if (User.isValidName(name) && !User.isThisNameExist(name)){
      new User(name);                
    }
  }
  
  function addReview(){
    var reviewText = document.getElementById('reviewText').value,
        userName = document.getElementById('usersSelect').value;
    if (reviewText != '' && userName != ''){
      new Review(reviewText, User.getUserByName(userName)); 
    }    
  }

  document.getElementById('addUserBtn').addEventListener('click', function(){
    addUser();
  });

  document.getElementById('addReviewBtn').addEventListener('click', function(){
    addReview();
  });

  eventEmmiter.on('newUserCreated', function(user){
    User.users.push(user);    
    user.addUserToTableAndSelect();     
  });

  eventEmmiter.on('newReviewCreated', function(review){
    review.addReviewToTable();
  });
}
  
new App();
