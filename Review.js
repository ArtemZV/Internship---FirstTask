function Review(reviewText, user){
    this.reviewText = reviewText;
    this.user = user;
    user.reviews.push(this);
    eventEmmiter.emit('newReviewCreated', this);
}

Review.prototype.addReviewToTable = function(){;
    var userCell = document.querySelector('[data-user="' + this.user.name + '"]');
    var reviewBlock = userCell.lastChild.children[0];

    reviewBlock.appendChild(document.createElement("tr"));
    var newReview = document.createElement('td');
    newReview.innerHTML = this.reviewText; 
    reviewBlock.lastChild.appendChild(newReview);
}