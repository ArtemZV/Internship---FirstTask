function ReviewForm(el) {
    if (!el) return;
    this.textArea = el.querySelector('#reviewTextInput');
    this.btn = el.querySelector('#addReviewBtn');
    this.userSelect = el.querySelector('#usersSelect');
  
    this.init();   
}

ReviewForm.prototype.init = function () {
    this.btn.addEventListener('click', this.createReview.bind(this));
}

ReviewForm.prototype.createReview = function(){ 
    var reviewText = this.textArea.value,
        userId = this.userSelect.getAttribute('data-user-id');

    if (reviewText == '' || userId == '') return;
    new Review(reviewText, userId);          
}

ReviewForm.prototype.addUserToSelect = function(user){
    var newUser = document.createElement('option');
    newUser.value = user.name;
    newUser.innerHTML = user.name;
    newUser.setAttribute('data-user-id', user.id);
    this.select.appendChild(newUser);
}