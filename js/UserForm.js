function UserForm(){
    var self = this;
    this.formInput = document.getElementById('nameInput');
    this.formBtn = document.getElementById('addUserBtn');

    this.formBtn.addEventListener('click', function(){
        console.log(self.formInput.value);        
    });
}

new UserForm();

/*
function User(el){
    if (!el) return;
    this.input = this.el.querySelector('#nameInput');
    this.btn = this.el.querySelector('#addUserBtn');
    this.init();
}

User.prototype.init = function() {
    this.btn.addEventListener('click', this.addUser.bind(this))
}
User.prototype.addUser = function(e) {
    console.log(this.input.value)
}

fucntion App() {
    this.userForm = new User(document.querySelector('#userForm'));
}
window.addEventListener('DOMContentLoaded', function(){
  	new App();
})
*/
