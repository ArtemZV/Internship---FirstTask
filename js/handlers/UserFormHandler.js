function UserFormHandler(){
}

UserFormHandler.prototype.addUser = function(name){    
    if (!UserFormHandler.isValidName(name) || UserFormHandler.isThisNameExist(name)) return;

    var user = new User(name);
    UserFormHandler.users.push(user);  
    eventEmmiter.emit('newUserCreated', user);
}

UserFormHandler.users = [];

UserFormHandler.isValidName = function(name){
    return (name != '' && name.match(/^[A-Za-zА-ЯЁа-яё]+$/));
};

UserFormHandler.isThisNameExist = function(name){
    return this.users.some(el => {
        return el.name == name
    });
};

UserFormHandler.getUserByName = function (name) {
    var user;
    this.users.some(el => {
        if (el.name == name) user = el;
    }); 
    return user;
};