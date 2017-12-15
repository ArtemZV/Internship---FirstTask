function ReviewForm(el) {
    if (!el) return;
    this.textArea = el.querySelector('#reviewTextInput');
    this.btn = el.querySelector('#addReviewBtn');
    this.userSelect = el.querySelector('#usersSelect');
    this.emitter = new EventEmitter();
  
    this.init();   
}

ReviewForm.prototype.init = function () {
    this.btn.addEventListener('click', this.createReview.bind(this));
    this.emitter.on('userDeleted', this.deleteUserFromSelect.bind(this));    
}

ReviewForm.prototype.createReview = function(){ 
    var reviewText = this.textArea.value,
        userId = this.userSelect.selectedOptions[0].getAttribute('data-user-id');

    if (reviewText == '' || userId == '') return;
    this.emitter.emit('reviewCreated', {reviewText: reviewText, id: Math.random() * 1000, userId: userId});         
}

ReviewForm.prototype.addUserToSelect = function(user){
    var newUser = document.createElement('option');
    newUser.value = user.name;
    newUser.innerHTML = user.name;
    newUser.setAttribute('data-user-id', user.id);
    this.userSelect.appendChild(newUser);
}

ReviewForm.prototype.deleteUserFromSelect = function(userId){
    var user = this.userSelect.querySelector('[data-user-id="' + userId + '"]');
    user.parentNode.removeChild(user);
}