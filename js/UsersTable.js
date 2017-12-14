function UsersTable(el){
    if (!el) return;
}

UsersTable.prototype.renderUser = function(user, table){
    var newUserRow = document.createElement('tr'),
        userNameCell = document.createElement('td');

    userNameCell.innerHTML = user.name;

    var reviewCell = document.createElement('td'),
        innerTable = document.createElement('table');

    reviewCell.appendChild(innerTable);
        
    newUserRow.setAttribute('data-user-id', user.id);
    newUserRow.appendChild(userNameCell);
    newUserRow.appendChild(reviewCell);

    table.appendChild(newUserRow);        
};

UsersTable.prototype.renderReview = function(review){;
    var newReviewCell = document.createElement('td');

    newReviewCell.innerHTML = review.reviewText; 
    
    // reviewsBlock.appendChild(document.createElement('tr'));
    // reviewsBlock.lastChild.appendChild(newReviewCell);
}  