function UserForm(el){
    if (!el) return;
    this.input = el.querySelector('#nameInput');
    this.btn = el.querySelector('#addUserBtn');
    this.handler = new UserFormHandler();
    this.init();    
}

UserForm.prototype.init = function () {
    this.btn.addEventListener('click', this.addUser.bind(this));    
}

UserForm.prototype.addUser = function(e) {
    this.handler.addUser(this.input.value)
}

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
