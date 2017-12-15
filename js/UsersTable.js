function UsersTable(el){
    if (!el) return;
    this.table = el;
    this.emitter = new EventEmitter();
    this.init();
}

UsersTable.prototype.init = function(){
    this.emitter.on('renderAllUsers', this.renderAllUsers.bind(this));
    this.emitter.on('renderUser', this.renderUser.bind(this));    
    this.emitter.on('renderReview', this.renderReview.bind(this));
}

UsersTable.prototype.renderUser = function(user){
    if (typeof user !== 'object') return;
    var newUserRow = document.createElement('tr'),
        userNameCell = document.createElement('td');

    var deleteUserwBtn = document.createElement('button');
        deleteUserwBtn.innerHTML = 'X';
        deleteUserwBtn.addEventListener('click', () => this.deleteUser(user.id));

    userNameCell.innerHTML = user.name;
    userNameCell.appendChild(deleteUserwBtn);

    var reviewCell = document.createElement('td'),
        innerTable = document.createElement('table');

    reviewCell.appendChild(innerTable);
        
    newUserRow.setAttribute('data-user-id', user.id);
    if (user.isConst) newUserRow.classList.add('isConst');    
    newUserRow.appendChild(userNameCell);
    newUserRow.appendChild(reviewCell);

    this.table.appendChild(newUserRow);        
};

UsersTable.prototype.renderReview = function(review){
    if (typeof review !== 'object') return;

    var deleteReviewBtn = document.createElement('button');
    deleteReviewBtn.innerHTML = 'X';
    deleteReviewBtn.addEventListener('click', () => this.deleteReview(review.id));

    var newReviewCell = document.createElement('td');
    newReviewCell.innerHTML = review.reviewText; 
    newReviewCell.setAttribute('data-review-id', review.id);
    if (!review.isAproved) newReviewCell.classList.add('isNotAproved');
    newReviewCell.appendChild(deleteReviewBtn);

    var userRow = this.table.querySelector('[data-user-id="' + review.userId + '"]');
    var userReviewsCell = userRow.querySelector('table');
    
    userReviewsCell.appendChild(document.createElement('tr'));
    userReviewsCell.lastChild.appendChild(newReviewCell);
}  

UsersTable.prototype.deleteReview = function(reviewId){
    if (!Number.isFinite(reviewId)) return;
    var reviewCell = this.table.querySelector('[data-review-id="' + reviewId + '"]'),
        reviewParent = reviewCell.parentNode;
    reviewParent.parentNode.removeChild(reviewParent);
}

UsersTable.prototype.deleteUser = function(userId){
    if (!Number.isFinite(userId)) return;
    var userRow = this.table.querySelector('[data-user-id="' + userId + '"]');
    userRow.parentNode.removeChild(userRow);
    this.emitter.emit('userDeleted', userId);
}

UsersTable.prototype.renderAllUsers = function(usersArr){    
    usersArr.forEach(user => {
        this.renderUser(user)
    });
}

UsersTable.prototype.renderAllReivews = function(reviewArr){    
    reviewArr.forEach(review => {
        this.renderReview(review)
    });
}