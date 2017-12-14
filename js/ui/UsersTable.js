function UsersTable(el){
    if (!el) return;
    this.table = el;
    this.handler = new UsersTableHandler();
    this.init();    
}

UsersTable.prototype.init = function () {
    var self = this;

    eventEmmiter.on('newUserCreated', function(user){
        self.handler.addUserToTable(user, self.table);     
    });

    eventEmmiter.on('newReviewCreated', function(review){
        var userRow = self.table.querySelector('[data-user="' + review.user.name + '"]');        
        self.handler.addReviewToTable(review, userRow.querySelector('table'));     
    });
}

UsersTable.prototype.addUser = function(e) {
    this.handler.addUser(this.input.value)
}
