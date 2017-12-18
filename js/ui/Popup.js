function Popup(message){
    var popup = document.createElement('div'),
        header = document.createElement('div'),
        body = document.createElement('div');

    header.innerText = 'Message popup';
    header.classList.add('popupHeader');

    body.classList.add('popupBody');
    body.innerText = message || 'some text';
    popup.classList.add('popup');
    popup.appendChild(header);
    popup.appendChild(body);
    this.popup = document.body.querySelector('#popupsBlock').appendChild(popup);
    this.popup.body = this.popup.querySelector('.popupBody');
    this.popup.style.right = '-400px';
    this.openPopup();
}

Popup.prototype.openPopup = function(){
    this.popup.style.display = 'block';
    var self = this;
    var iter = setInterval(function(){
        self.popup.style.right = parseFloat(self.popup.style.right) + 50 + "px";
        if (parseFloat(self.popup.style.right) >= 0) {
            setTimeout(self.closePopup.bind(self), 1500);
            clearInterval(iter);
        }
    },20);
}

Popup.prototype.closePopup = function(){
    var self = this;
    self.popup.style.opacity = 1;
    var iter = setInterval(function(){
        self.popup.style.opacity = parseFloat(self.popup.style.opacity) - 0.1;
        if (parseFloat(self.popup.style.opacity) <= 0) {
            self.popup.style.display = 'none';
            self.popup.parentNode.removeChild(self.popup)
            clearInterval(iter);
        }
    },60);    
}
