function Review(reviewText, user){
    this.reviewText = reviewText;
    this.user = user;
    user.reviews.push(this);
    eventEmmiter.emit('newReviewCreated', this);
}

Review.prototype.addReviewToTable = function(){;
    var userRow = document.querySelector('[data-user="' + this.user.name + '"]'),
        reviewsBlock = userRow.getElementsByTagName('table'),
        newReviewCell = document.createElement('td');

    newReviewCell.innerHTML = this.reviewText; 
    
    reviewsBlock.appendChild(document.createElement("tr"));
    reviewsBlock.lastChild.appendChild(newReviewCell);
}