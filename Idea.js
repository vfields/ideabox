class Idea {
  constructor(title, body, star) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  updateIdea() {
    if (!this.star) {
      this.star = true
      favoriteIdeas.push(this);
    }
    else if (this.star) {
      this.star = false;
      for (var i = 0; i < favoriteIdeas.length; i++) {
        if (favoriteIdeas[i].id = this.id) {
          favoriteIdeas.splice(i, 1);
        }
      }
    }
  }
}
