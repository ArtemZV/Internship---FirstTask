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
    this.emitter.on('addUserToSelect', this.addUserToSelect.bind(this));
    this.emitter.on('addAllUsersToSelect', this.addAllUsersToSelect.bind(this));   
    this.emitter.on('deletedUser', this.deleteUserFromSelect.bind(this)); 
}

ReviewForm.prototype.createReview = function(){ 
    var reviewText = this.textArea.value,
        userId = this.userSelect.selectedOptions[0].getAttribute('data-user-id');

    if (reviewText == '' || userId == '') return;
    this.emitter.emit('createdReview', {reviewText: reviewText, id: Math.random() * 1000, userId: userId, isAproved: false});
}

ReviewForm.prototype.addUserToSelect = function(user){
    if (typeof user !== 'object') return;
    var newUser = document.createElement('option');
    newUser.value = user.name;
    newUser.innerHTML = user.name;
    newUser.setAttribute('data-user-id', user.id);
    this.userSelect.appendChild(newUser);
}

ReviewForm.prototype.deleteUserFromSelect = function(user){
    if (typeof user !== 'object' || !Number.isFinite(user.id)) return;
    var user = this.userSelect.querySelector('[data-user-id="' + user.id + '"]');
    user.parentNode.removeChild(user);
}

ReviewForm.prototype.addAllUsersToSelect = function(usersArr){
    usersArr.forEach(user => this.addUserToSelect(user));
}