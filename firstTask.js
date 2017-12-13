
var users = []
var letters = /^[A-Za-z]+$/;  

function addUser(){
  var name = document.getElementById("nameInput").value;
  if (name != '' && name.match(letters)){
    if(users.indexOf(name) == -1){
      users.push(name);
      updateTable(name);
      updateSelect(name);
    }    
  }  
}

function updateTable(name){
  var usersTable = document.getElementById("usersTable");
  var tr = document.createElement("tr");
  tr.setAttribute("data-user", name);
  tr.setAttribute("class", "tableRow");
  
  var nameCell = document.createElement("td");
  nameCell.innerHTML = name;
  
  var reviewCell = document.createElement("td");
  var innerTable = document.createElement("table");
  reviewCell.appendChild(innerTable);
  
  tr.appendChild(nameCell);
  tr.appendChild(reviewCell);
  usersTable.appendChild(tr);
}

function updateSelect(name){
  var usersSelect = document.getElementById("usersSelect");
  var newUser = document.createElement("option");
  newUser.value = name;
  newUser.innerHTML = name;
  usersSelect.appendChild(newUser);
}

function addReview(){
  var reviewText = document.getElementById("reviewText").value;
  
  if (reviewText !=''){    
    var name = document.getElementById("usersSelect").value;
    var user = document.querySelector('[data-user="' + name + '"]');
    var reviewBlock = user.lastChild.children[0];

    reviewBlock.appendChild(document.createElement("tr"));
    var newReview = document.createElement('td');
    newReview.innerHTML = reviewText; 
    reviewBlock.lastChild.appendChild(newReview);  
  } 
}



