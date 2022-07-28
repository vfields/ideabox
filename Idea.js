class Idea {
  constructor(title, body, star) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  updateIdea(clickedCardStar) {
    if (this.star) {
      this.star = false
      clickedCardStar.src="assets/star.svg"
    } else {
      this.star = true
      clickedCardStar.src="assets/star-active.svg"
    }
  }
}
