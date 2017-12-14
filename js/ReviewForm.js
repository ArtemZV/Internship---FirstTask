function ReviewForm(el) {
    if (!el) return;
    this.textArea = el.querySelector('#reviewTextInput');
    this.btn = el.querySelector('#addReviewBtn');
    this.userSelect = el.querySelector('#usersSelect');
  
    this.init();

    var self = this;
    eventEmmiter.on('newUserCreated', function(user){
        self.addUserToSelect(user, self.userSelect);     
    });    
}

ReviewForm.prototype.init = function () {
    this.btn.addEventListener('click', this.addReview.bind(this));
}

ReviewForm.prototype.addReview = function(){ 
    var reviewText = this.textArea.value,
        userName = this.userSelect.value  
    if (reviewText == '' || userName == '') return;
    var review = new Review(reviewText, UsersTable.getUserByName(userName)); 
    eventEmmiter.emit('newReviewCreated', review);           
}

ReviewForm.prototype.addUserToSelect = function(user, select){
    var newUser = document.createElement('option');
    newUser.value = user.name;
    newUser.innerHTML = user.name;
    select.appendChild(newUser);
}