function Review(reviewText, userId){
    this.reviewText = reviewText;
    this.id = Math.random() * 1000;
    this.userId = userId; 
}