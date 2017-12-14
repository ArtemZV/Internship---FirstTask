function Review(reviewText, user){
    this.reviewText = reviewText;
    this.user = user;
    this.id = Math.random() * 1000;
    user.reviews.push(this);
}