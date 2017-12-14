function UsersTable(el){
    if (!el) return;
    this.table = el;
    this.handler = new UsersTableHandler();
    this.init();    
}

UsersTable.prototype.init = function () {
    var self = this;

    App.eventEmmiter.on('newUserCreated', function(user){
        self.handler.addUserToTable(user, self.table);     
    });

    App.eventEmmiter.on('newReviewCreated', function(review){
        self.handler.addReviewToTable(review, self.table);     
    });
}

UsersTable.prototype.addUser = function(e) {
    this.handler.addUser(this.input.value)
}
