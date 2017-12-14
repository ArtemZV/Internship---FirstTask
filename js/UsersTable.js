function UsersTable(el){
    if (!el) return;
    this.table = el;
}

UsersTable.prototype.renderUser = function(user){
    var newUserRow = document.createElement('tr'),
        userNameCell = document.createElement('td');

    userNameCell.innerHTML = user.name;

    var reviewCell = document.createElement('td'),
        innerTable = document.createElement('table');

    reviewCell.appendChild(innerTable);
        
    newUserRow.setAttribute('data-user-id', user.id);
    newUserRow.appendChild(userNameCell);
    newUserRow.appendChild(reviewCell);

    this.table.appendChild(newUserRow);        
};

UsersTable.prototype.renderReview = function(review){;
    var newReviewCell = document.createElement('td');
    newReviewCell.innerHTML = review.reviewText; 
    newReviewCell.setAttribute('data-review-id', review.id);

    var userRow = this.table.querySelector('[data-user-id="' + review.userId + '"]');
    var userReviewsCell = userRow.querySelector('table');
    
    userReviewsCell.appendChild(document.createElement('tr'));
    userReviewsCell.lastChild.appendChild(newReviewCell);
}  

UsersTable.prototype.deleteReview = function(review){
    var ReviewCell = this.table.querySelector('[data-review-id="' + review.id + '"]');
    element.parentNode.removeChild(ReviewCell);
}