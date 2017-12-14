function UserForm(){
    var self = this;
    this.formInput = document.getElementById('nameInput');
    this.formBtn = document.getElementById('addUserBtn');

    this.formBtn.addEventListener('click', function(){
        console.log(self.formInput.value);        
    });
}

new UserForm();