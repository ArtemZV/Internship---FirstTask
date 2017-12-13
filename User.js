function User(name){    
    this.name = name;
    this.reviews = [];
    User.users.push(this);
}

User.prototype.addUserToTableAndSelect = function(){
    addUserToTable(this);
    addUserToSelect(this);

    function addUserToTable(user){
        var usersTable = document.getElementById("usersTable");
        var tableNewUserRow = document.createElement("tr");
        tableNewUserRow.setAttribute("data-user", user.name);
        
        var userNameCell = document.createElement("td");
        userNameCell.innerHTML = user.name;        
        var reviewCell = document.createElement("td");
        var innerTable = document.createElement("table");
        reviewCell.appendChild(innerTable);
        
        tableNewUserRow.appendChild(userNameCell);
        tableNewUserRow.appendChild(reviewCell);
        usersTable.appendChild(tableNewUserRow);
    }
      
    function addUserToSelect(user){
        var usersSelect = document.getElementById("usersSelect");
        var newUser = document.createElement("option");
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
}