function Popup(el){
    if (!el) return;
    this.popupsBlock = el;
}

Popup.prototype.showPopup = function(message){    
    var popup = this.createPopup(message);
    popup = this.popupsBlock.appendChild(popup);
    setTimeout(() => this.closePopup(popup), 2000);
}

Popup.prototype.createPopup = function(message){
    var popup = document.createElement('div');
    popup.innerText = message || 'some text';
    popup.classList.add('popup');
    return popup;
}

Popup.prototype.closePopup = function(popup){
    popup.classList.add('close');
    setTimeout(() => this.popupsBlock.removeChild(popup), 700);
}
