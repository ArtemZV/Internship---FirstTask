function UsersTable(el){
    if (!el) return;
    this.table = el;
    
    var self = this;
    
    eventEmmiter.on('newUserCreated', function(user){
        UsersTable.users.push(user);       
        self.renderUser(user, self.table);     
    });

    eventEmmiter.on('newReviewCreated', function(review){
        var userRow = self.table.querySelector('[data-user="' + review.user.name + '"]');        
        self.renderReview(review, userRow.querySelector('table'));     
    });
}

UsersTable.prototype.renderUser = function(user, table){
    var newUserRow = document.createElement('tr'),
        userNameCell = document.createElement('td');

    userNameCell.innerHTML = user.name;

    var reviewCell = document.createElement('td'),
        innerTable = document.createElement('table');

    reviewCell.appendChild(innerTable);
        
    newUserRow.setAttribute('data-user', user.name);
    newUserRow.appendChild(userNameCell);
    newUserRow.appendChild(reviewCell);

    table.appendChild(newUserRow);        
};

UsersTable.prototype.renderReview = function(review, reviewsBlock){;
    var newReviewCell = document.createElement('td');

    newReviewCell.innerHTML = review.reviewText; 
    
    reviewsBlock.appendChild(document.createElement('tr'));
    reviewsBlock.lastChild.appendChild(newReviewCell);
}

UsersTable.users = [];

UsersTable.isThisNameExist = function(name){
    return this.users.some(el => {
        return el.name == name
    });
};

UsersTable.getUserByName = function (name) {
    var user;
    this.users.some(el => {
        if (el.name == name) user = el;
    }); 
    return user;
};
