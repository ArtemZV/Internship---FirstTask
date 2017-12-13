
function addUser(){
  var name = document.getElementById("nameInput").value;
  if (User.isValidName(name) && !User.isThisNameExist(name)){    
    new User(name).addUserToTableAndSelect();       
  }  
}

function addReview(){
  User.addReviewToTable();
}
