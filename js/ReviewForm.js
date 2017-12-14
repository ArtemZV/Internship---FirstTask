function ReviewForm(el) {
    if (!el) return;
    this.textArea = el.querySelector('#reviewTextInput');
    this.btn = el.querySelector('#addReviewBtn');
    this.userSelect = el.querySelector('#usersSelect');
  
    this.init();   
}

ReviewForm.prototype.init = function () {
    this.btn.addEventListener('click', this.addReview.bind(this));
}

ReviewForm.prototype.addReview = function(){ 
    var reviewText = this.textArea.value,
        userName = this.userSelect.value;
          
    if (reviewText == '' || userName == '') return;
    new Review(reviewText);          
}

ReviewForm.prototype.addUserToSelect = function(user){
    var newUser = document.createElement('option');
    newUser.value = user.name;
    newUser.innerHTML = user.name;
    this.select.appendChild(newUser);
}