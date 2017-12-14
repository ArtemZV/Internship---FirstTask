function ReviewFormHandler(){
}

ReviewFormHandler.prototype.addReview = function(reviewText, userName){   
    if (reviewText == '' || userName == '') return;
    var review = new Review(reviewText, UserFormHandler.getUserByName(userName)); 
    self.addReviewToTable.call(review);             
}

ReviewFormHandler.prototype.addReviewToTable = function(){;
    var userRow = document.querySelector('[data-user="' + this.user.name + '"]'),
        reviewsBlock = userRow.getElementsByTagName('table')[0],
        newReviewCell = document.createElement('td');

    newReviewCell.innerHTML = this.reviewText; 
    
    reviewsBlock.appendChild(document.createElement('tr'));
    reviewsBlock.lastChild.appendChild(newReviewCell);
}