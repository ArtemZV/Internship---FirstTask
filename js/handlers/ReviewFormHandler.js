function ReviewFormHandler(){
}

ReviewFormHandler.prototype.addReview = function(reviewText, userName){   
    if (reviewText == '' || userName == '') return;
    var review = new Review(reviewText, UserFormHandler.getUserByName(userName)); 
    eventEmmiter.emit('newReviewCreated', review);           
}

ReviewFormHandler.prototype.addUserToSelect = function(user, select){
    var newUser = document.createElement('option');
    newUser.value = user.name;
    newUser.innerHTML = user.name;
    select.appendChild(newUser);
}