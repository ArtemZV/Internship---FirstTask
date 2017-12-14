function ReviewForm(el) {
    if (el) return;
    this.textArea = el.querySelector('#reviewTextInput');
    this.btn = el.querySelector('#addReviewBtn');
    this.userSelect = el.querySelector('#usersSelect');
    
    this.init();    
}

ReviewForm.prototype.init = function () {
    this.btn.addEventListener('click', this.addReview.bind(this));
}

ReviewForm.prototype.addReview = function(e) {
    var obj = {
        text: this.textArea.value,
        user: this.userSelect.value
    }
    console.log(obj)
}