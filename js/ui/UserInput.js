function UserInput(app){
    this.init(app);
}

UserInput.prototype.init = function(app){
    this.App = app;
    var self = this;
    
    document.getElementById('addUserBtn').addEventListener('click', function(){
        addUser();
    });

    function addUser(){
        var name = document.getElementById('nameInput').value;
        if (UserInput.isValidName(name) && !UserInput.isThisNameExist(name)){
            var user = new User(name);
            UserInput.users.push(user);    
            self.addUserToTableAndSelect.call(user);          
        }
    };
}

UserInput.prototype.addUserToTableAndSelect = function(){
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

UserInput.users = [];

UserInput.isValidName = function(name){
    return (name != '' && name.match(/^[A-Za-zА-ЯЁа-яё]+$/));
};

UserInput.isThisNameExist = function(name){
    return this.users.some(el => {
        return el.name == name
    });
};

UserInput.getUserByName = function (name) {
    var user;
    this.users.some(el => {
        if (el.name == name) user = el;
    }); 
    return user;
};