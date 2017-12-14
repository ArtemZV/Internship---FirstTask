function UserFormHandler(){
}

UserFormHandler.prototype.addUser = function(name){    
    if (!UserFormHandler.isValidName(name) || UserFormHandler.isThisNameExist(name)) return;

    var user = new User(name);
    UserFormHandler.users.push(user);   
    self.addUserToTableAndSelect.call(user);
}

UserFormHandler.prototype.addUserToTableAndSelect = function(){
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
    };
      
    function addUserToSelect(user){
        var usersSelect = document.getElementById('usersSelect'),
            newUser = document.createElement('option');

        newUser.value = user.name;
        newUser.innerHTML = user.name;
        usersSelect.appendChild(newUser);
    };
};

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