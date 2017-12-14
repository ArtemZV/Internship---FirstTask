function Review(reviewText, user){
    this.reviewText = reviewText;
    this.user = user;
    user.reviews.push(this);
}