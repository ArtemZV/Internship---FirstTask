function ReviewInput(app){
    this.init(app);
}

ReviewInput.prototype.init = function(app){
    this.App = app;

    var self = this;

    document.getElementById('addReviewBtn').addEventListener('click', function(){
        addReview();
    });

    function addReview(){
        var reviewText = document.getElementById('reviewText').value,
            userName = document.getElementById('usersSelect').value;
        if (reviewText != '' && userName != ''){
            var review = new Review(reviewText, UserInput.getUserByName(userName)); 
            self.addReviewToTable.call(review);
        }    
    } 
}

ReviewInput.prototype.addReviewToTable = function(){;
    var userRow = document.querySelector('[data-user="' + this.user.name + '"]'),
        reviewsBlock = userRow.getElementsByTagName('table')[0],
        newReviewCell = document.createElement('td');

    newReviewCell.innerHTML = this.reviewText; 
    
    reviewsBlock.appendChild(document.createElement('tr'));
    reviewsBlock.lastChild.appendChild(newReviewCell);
}