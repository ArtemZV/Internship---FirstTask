function UserForm(el){
    if (!el) return;
    this.input = el.querySelector('#nameInput');
    this.btn = el.querySelector('#addUserBtn');
    this.init();    
}

UserForm.prototype.init = function () {
    this.btn.addEventListener('click', this.createUser.bind(this));    
}

UserForm.prototype.createUser = function() {
    var name = this.input.value;    
    if (name == '' || name.match(/^[A-Za-zА-ЯЁа-яё]+$/)) return;
    new User(name);
}