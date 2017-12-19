function UsersTable(el){
    if (!el) return;
    this.table = el;
    this.emitter = new EventEmitter();
    this.init();
}

UsersTable.prototype.init = function(){
    this.emitter.on('renderAllUsers', this.renderAllUsers.bind(this));
    this.emitter.on('renderUser', this.renderUser.bind(this));  
    this.emitter.on('updateUser', this.updateUser.bind(this));
    this.emitter.on('renderReview', this.renderReview.bind(this));
    this.table.addEventListener('click', this.editUser.bind(this));
}

UsersTable.prototype.editUser = function(event){
    if (event.target.classList.contains('userCell') && event.target.closest('tr').classList.contains('isConst')) {
        var firstName = event.target.getAttribute('data-user-firstName'),
            lastName = event.target.getAttribute('data-user-lastName'),
            id = event.target.closest('tr').getAttribute('data-user-id');
        this.emitter.emit('editUser', {firstName: firstName, lastName: lastName, id: id, isConst: true});
    }
}

UsersTable.prototype.renderUser = function(user){
    if (typeof user !== 'object') return;
    var newUserRow = document.createElement('tr'),
        userNameCell = document.createElement('td');

    var deleteUserwBtn = document.createElement('span');
        deleteUserwBtn.innerHTML = 'x';
        deleteUserwBtn.addEventListener('click', () => this.deleteUser(user));

    var userNameSpan = document.createElement('span');
    userNameSpan.innerHTML = user.name;
    userNameSpan.setAttribute('data-user-firstName', user.firstName);
    userNameSpan.setAttribute('data-user-lastName', user.lastName);
    userNameSpan.classList.add('userCell');
    
    userNameCell.appendChild(userNameSpan);
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

UsersTable.prototype.updateUser = function(user){
    if (typeof user !== 'object' || !Number.isFinite(user.id)) return;
    var userRow = this.table.querySelector('[data-user-id="' + user.id + '"]'),
        userNameSpan = userRow.querySelector('span');
    userNameSpan.innerHTML = `${user.firstName} ${user.lastName}`;
    userNameSpan.setAttribute('data-user-firstName', user.firstName);
    userNameSpan.setAttribute('data-user-lastName', user.lastName);
};

UsersTable.prototype.renderReview = function(review){
    if (typeof review !== 'object') return;

    var deleteReviewBtn = document.createElement('span');
    deleteReviewBtn.innerHTML = 'x';
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
    this.emitter.emit('reviewDeleted', 'Review deleted');
}

UsersTable.prototype.deleteUser = function(user){
    if (typeof user !== 'object' || !Number.isFinite(user.id)) return;
    var userRow = this.table.querySelector('[data-user-id="' + user.id + '"]');
    userRow.parentNode.removeChild(userRow);
    this.emitter.emit('userDeleted', user);
}

UsersTable.prototype.renderAllUsers = function(usersArr){    
    usersArr.forEach(user => this.renderUser(user));
}

UsersTable.prototype.renderAllReivews = function(reviewArr){    
    reviewArr.forEach(review => this.renderReview(review));
}