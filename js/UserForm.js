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
    if (name == '' || name.match(/^[A-Za-zА-ЯЁа-яё]+$/)) return;
    var user = new User(name);
}