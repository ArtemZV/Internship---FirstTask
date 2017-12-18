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
    this.emitter.on('editUser', this.editUser.bind(this));
}

UserForm.prototype.createUser = function() {    
    if (this.firstNameInput.value.trim() == '' || this.lastNameInput.value.trim() == '') return;
    var name = `${this.firstNameInput.value} ${this.lastNameInput.value}`;    
    if (name.trim() == '' || !name.match(/^[A-Za-zА-ЯЁа-яё\s]+$/)) return;

    if (this.btn.getAttribute('data-user-id') != null){
        var id = this.btn.getAttribute('data-user-id');
        this.emitter.emit('updateUser', {name: name, firstName: this.firstNameInput.value, lastName: this.lastNameInput.value, id: id, isConst: true});                
    }
    else this.emitter.emit('createdUser', {name: name, firstName: this.firstNameInput.value, lastName: this.lastNameInput.value, id: Math.random() * 100, isConst: false});    
    this.btn.removeAttribute('data-user-id');        
    this.firstNameInput.value = '';
    this.lastNameInput.value = '';
}

UserForm.prototype.editUser = function(user){
    this.firstNameInput.value = user.firstName;
    this.lastNameInput.value = user.lastName;
    this.btn.setAttribute('data-user-id', user.id);   
}