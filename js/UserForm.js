function UserForm(){
    var self = this;
    this.formInput = document.getElementById('nameInput');

    this.formInput.addEventListener('change', function(){
        console.log(this.value);        
    });
}

new UserForm();