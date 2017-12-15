function UserForm(el){
    if (!el) return;
    this.firstNameInput = el.querySelector('#firstNameInput');
    this.lastNameInput = el.querySelector('#lastNameInput');    
    this.btn = el.querySelector('#addUserBtn'); 
    this.emitter = new EventEmitter();
    this.init();    
}

UserForm.prototype.init = function () {
    this.btn.addEventListener('click', this.createUser.bind(this));  
}

UserForm.prototype.createUser = function() {
    if (this.firstNameInput.value.trim() == '' || this.lastNameInput.value.trim() == '') return;
    var name = `${this.firstNameInput.value} ${this.lastNameInput.value}`;    
    if (name.trim() == '' || !name.match(/^[A-Za-zА-ЯЁа-яё\s]+$/)) return;
    this.emitter.emit('createdUser', {name: name, id: Math.random() * 100, isConst: false});
}