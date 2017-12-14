function ReviewForm(el) {
    if (el) return;
    this.textArea = el.querySelector('#reviewTextInput');
    this.btn = el.querySelector('#addReviewBtn');
    this.userSelect = el.querySelector('#usersSelect');

    this.handler = new ReviewFormHandler();
    
    this.init();    
}

ReviewForm.prototype.init = function () {
    this.btn.addEventListener('click', this.addReview.bind(this));
}

ReviewForm.prototype.addReview = function(e) {
    this.handler.addReview(this.textArea.value, this.userSelect.value);
}