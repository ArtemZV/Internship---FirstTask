function UserForm(el){
    if (!el) return;
    this.input = el.querySelector('#nameInput');
    this.btn = el.querySelector('#addUserBtn');
    this.init();    
}

UserForm.prototype.init = function () {
    this.btn.addEventListener('click', this.addUser.bind(this));    
}

UserForm.prototype.addUser = function() {
    var name = this.input.value;    
    if (!UserForm.isValidName(name) || UsersTable.isThisNameExist(name)) return;
    var user = new User(name);
    eventEmmiter.emit('newUserCreated', user);
}

UserForm.isValidName = function(name){
    return (name != '' && name.match(/^[A-Za-zА-ЯЁа-яё]+$/));
};

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
