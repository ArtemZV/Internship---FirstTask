function User(name){    
    this.name = name;
    this.reviews = [];
    User.users.push(this);   

    this.addUserToTableAndSelect = function(){
        addUserToTable(this);
        addUserToSelect(this);
    };

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

    this.addReviewToTable = function(reviewText){
        this.reviews.push(reviewText);
        var userCell = document.querySelector('[data-user="' + this.name + '"]');
        var reviewBlock = userCell.lastChild.children[0];

        reviewBlock.appendChild(document.createElement("tr"));
        var newReview = document.createElement('td');
        newReview.innerHTML = reviewText; 
        reviewBlock.lastChild.appendChild(newReview);
    }
}

User.users =  [];

User.isValidName = function(name){
    return (name != '' && name.match(/^[A-Za-zА-ЯЁа-яё]+$/));
};

User.isThisNameExist = function(name){
    return User.users.some(el => {
        return el.name == name
    });
}

User.addReviewToTable = function(){
    var reviewText = document.getElementById("reviewText").value;
    
    if (reviewText !=''){
        var user,
            name = document.getElementById("usersSelect").value;      

        this.users.some(el => {
            if (el.name == name) user = el;
        });   
        user.addReviewToTable(reviewText);        
    } 
}