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
    var reviewText = document.getElementById('reviewText').value;
    if (reviewText !=''){
      var user,
          name = document.getElementById('usersSelect').value;      

      User.users.some(el => {
          if (el.name == name) user = el;
      }); 

      new Review(reviewText, user); 
    }    
  }

  document.getElementById('addUserBtn').addEventListener('click', function(){
    addUser();
  });

  document.getElementById('addReviewBtn').addEventListener('click', function(){
    addReview();
  });

  eventEmmiter.on('newUserCreated', function(user){
    user.addUserToTableAndSelect();     
  });

  eventEmmiter.on('newReviewCreated', function(review){
    review.addReviewToTable();
  }); 
}
  
new App();
