//GLOBAL VARIABLE:
var ideas = []

//QUERY SELECTORS:
var saveButton = document.querySelector(".saveButton")
var userTitleInput = document.querySelector("#title-input")
var userBodyInput = document.querySelector("#body-input")
var ideaboxSection = document.querySelector(".ideabox-section")
var showStarredButton = document.querySelector(".showStarredButton")
var formContainer = document.querySelector(".form-container");

//EVENT LISTENERS

saveButton.addEventListener('click', addIdea);
formContainer.addEventListener('input', saveButtonDisplay);
// saveButton.addEventListener('click', clearInput);
ideaboxSection.addEventListener('click', deleteCard);
ideaboxSection.addEventListener('click', favoriteCard);

//EVENT HANDLERS

function addIdea() {
  var newIdea = new Idea(userTitleInput.value, userBodyInput.value);
  ideas.push(newIdea);

  ideaboxSection.innerHTML += `
    <div class="ideabox-container" id="${ideas[ideas.length -1 ].id}">
      <div class="ideabox-header">
        <div class="ideabox-header-image"><img src="assets/star.svg" id="star-btn" alt="star to favorite" class="${ideas[ideas.length -1 ].id}"></div>
        <div class="ideabox-header-image"><img src="assets/delete.svg" id="delete-btn" alt="x to delete" class="${ideas[ideas.length -1 ].id}"></div>
      </div>
      <div class="ideabox-body">
        <h3>${ideas[ideas.length - 1].title}</h3>
        <p class="ideabox-body-text">${ideas[ideas.length - 1].body}</p>
      </div>
      <div class="ideabox-footer">
        <div class="ideabox-footer-image"><img src="assets/comment.svg"></div>
        <div class="ideabox-comment"><p>Comment</p></div>
      </div>
    </div>
    `
  saveButton.disabled = true;
  if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
    userTitleInput.value = '';
    userBodyInput.value = '';
  }
}

function saveButtonDisplay() {
  if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
    saveButton.disabled = false;
  }
  else {
    saveButton.disabled = true;
  }
}

// function clearInput() {
//   saveButton.disabled = true;
//   if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
//     userTitleInput.value = '';
//     userBodyInput.value = '';
//   }
// }

function deleteCard() {
if (event.target.id === "delete-btn") {
  for (var i = 0; i < ideas.length; i++) {
    if (event.target.classList.contains(ideas[i].id)) {
      ideas.splice(i, 1)
    } var unwantedCard = event.target.closest(".ideabox-container")
    unwantedCard.remove()
  }
}
}

function favoriteCard() {
  //make it able to toggle for favoriting/unfavoriting
  var newFav = event.target.closest(".ideabox-container")
  var newFavStar = newFav.querySelector("img")
  //if star buttton is clicked:
  if (event.target.id === "star-btn") {
    //and if the star is already active:
    if (newFavStar.src === "assets/star-active.svg") {
      //loop thru and find it in the ideas array, then make .star false
      console.log("Hi")
      for (var i = 0; i < ideas.length; i++) {
        if (event.target.classList.contains(ideas[i].id)) {
          ideas[i].star = false
          //and turn the star inactive:
          newFavStar.src = "assets/star.svg"
        }
      }
      // if this star button isn't already active:
    } else {
      for (var i = 0; i < ideas.length; i++) {
        if (event.target.classList.contains(ideas[i].id)) {
          ideas[i].star = true
          newFavStar.src = "assets/star-active.svg"
          newFavStar.
        }
      }
    }
}
}
