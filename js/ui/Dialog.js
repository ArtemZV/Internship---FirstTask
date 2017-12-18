function Dialog(dialogSelector, question){
    this.dialog = dialogSelector;
    this.dialog.body = this.dialog.querySelector('.dialogBody');
    this.dialog.body.innerHTML = question || 'new dialog';
    this.dialog.onOKFunc = function(){};
    this.dialog.onCancelFunc = function(){};    
    this.init();    
}

Dialog.prototype.init = function(){
    this.dialog.addEventListener('click', this.initDialogButtons.bind(this));
}

Dialog.prototype.initDialogButtons = function(event){
    if (event.target.id == 'dialogBtnOk'){
        this.dialog.onOKFunc();        
        this.closeDialog();
    }
    if (event.target.id == 'dialogBtnCancel'){
        this.dialog.onCancelFunc();
        this.closeDialog();
    }
}

Dialog.prototype.openDialog = function(onOKFunc){
    this.dialog.style.display = 'block';
}

Dialog.prototype.closeDialog = function(result){
    this.dialog.style.display = 'none';
}
