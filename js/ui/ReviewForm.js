function ReviewForm(el) {
    if (!el) return;
    this.textArea = el.querySelector('#reviewTextInput');
    this.btn = el.querySelector('#addReviewBtn');
    this.userSelect = el.querySelector('#usersSelect');

    this.handler = new ReviewFormHandler();    
    this.init();    
}

ReviewForm.prototype.init = function () {
    var self = this;
    this.btn.addEventListener('click', this.addReview.bind(this));

    eventEmmiter.on('newUserCreated', function(user){
        self.handler.addUserToSelect(user, self.userSelect);     
    });    
}

ReviewForm.prototype.addReview = function(e) {
    this.handler.addReview(this.textArea.value, this.userSelect.value);
}