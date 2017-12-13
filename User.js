
function User(name){    
    this.name = name;
    this.reviews = [];
    eventEmmiter.emit('newUserCreated', this);    
}

User.prototype.addUserToTableAndSelect = function(){
    addUserToTable(this);
    addUserToSelect(this);

    function addUserToTable(user){
        var usersTable = document.getElementById('usersTable'),
            newUserRow = document.createElement('tr'),
            userNameCell = document.createElement('td');

        userNameCell.innerHTML = user.name;

        var reviewCell = document.createElement('td'),
            innerTable = document.createElement('table');

        reviewCell.appendChild(innerTable);
            
        newUserRow.setAttribute('data-user', user.name);
        newUserRow.appendChild(userNameCell);
        newUserRow.appendChild(reviewCell);

        usersTable.appendChild(newUserRow);
    }
      
    function addUserToSelect(user){
        var usersSelect = document.getElementById('usersSelect'),
            newUser = document.createElement('option');

        newUser.value = user.name;
        newUser.innerHTML = user.name;
        usersSelect.appendChild(newUser);
    }  
};

User.users =  [];

User.isValidName = function(name){
    return (name != '' && name.match(/^[A-Za-zА-ЯЁа-яё]+$/));
};

User.isThisNameExist = function(name){
    return User.users.some(el => {
        return el.name == name
    });
};

User.getUserByName = function (name) {
    var user;
    User.users.some(el => {
        if (el.name == name) user = el;
    }); 
    return user;
}