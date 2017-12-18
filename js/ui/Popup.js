var RIGHT = '-400px';
function Popup(popupSelector){
    this.popup = popupSelector;
    this.popup.body = this.popup.querySelector('.popupBody');
    this.popup.onOKFunc = function(){}; 
    this.popup.style.right = RIGHT;  
    this.init();    
}

Popup.prototype.init = function(){
    this.popup.addEventListener('click', this.initPopupButtons.bind(this));
}

Popup.prototype.initPopupButtons = function(event){
    if (event.target.id == 'popupBtnOk'){      
        this.closePopup();
    }
}

Popup.prototype.openPopup = function(message){
    this.popup.body.innerText = message;
    this.popup.style.display = 'block';
    var self = this;
    var iter = setInterval(function(){
        self.popup.style.right = parseFloat(self.popup.style.right) + 25 + "px";
        if (parseFloat(self.popup.style.right) >= 0) clearInterval(iter);
    },50);
}

Popup.prototype.closePopup = function(result){
    this.popup.style.right = RIGHT;
    this.popup.style.display = 'none';
}
