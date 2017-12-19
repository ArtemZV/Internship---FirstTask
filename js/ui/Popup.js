function Popup(el){
    if (!el) return;
    this.popupsBlock = el;
}

Popup.prototype.showPopup = function(message){    
    var popup = this.createPopup(message);
    popup = this.popupsBlock.appendChild(popup);
    popup.style.display = 'block';
    var self = this;
    var iter = setInterval(function(){
        popup.style.right = parseFloat(popup.style.right) + 50 + "px";
        if (parseFloat(popup.style.right) >= 0) {
            setTimeout(() => self.closePopup(popup), 1500);
            clearInterval(iter);
        }
    }, 20);
}

Popup.prototype.createPopup = function(message){
    var popup = document.createElement('div'),
        body = document.createElement('div');
    body.classList.add('popupBody');
    body.innerText = message || 'some text';
    popup.classList.add('popup');
    popup.style.right = '-400px';    
    popup.appendChild(body);
    return popup;
}

Popup.prototype.closePopup = function(popup){
    popup.style.opacity = 1;
    var iter = setInterval(function(){
        popup.style.opacity = parseFloat(popup.style.opacity) - 0.1;
        if (parseFloat(popup.style.opacity) <= 0) {
            popup.style.display = 'none';
            popup.parentNode.removeChild(popup)
            clearInterval(iter);
        }
    }, 60);    
}
