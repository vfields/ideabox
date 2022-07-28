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
ideaboxSection.addEventListener('click', deleteCard)
ideaboxSection.addEventListener('click', favoriteCard)
// showStarredButton.addEventListener('click', showStarredIdeas)
showStarredButton.addEventListener('click', toggleShowStarredBtn)

//EVENT HANDLERS

function toggleShowStarredBtn() {
  if (showStarredButton.innerText === "Show Starred Ideas") {
    showStarredButton.innerText = "Show All Ideas"
  } else {
    showStarredButton.innerText = "Show Starred Ideas"
  }
}


// function showStarredIdeas() {
//   var favoriteCards = []
//   for (var i = 0; i < ideas.length; i++) {
//     if (ideas[i].star) {
//       favoriteCards.push(ideas[i])
//
//     }
//   }
// //loop thru array of ideas to find fav'd ones

// //if a favorite, add it to a new array
// //loop thru all ideabox-containers
// //if ideabox-container id is not in new array,
// // add .hidden to classList
// }

function favoriteCard() {
  if (event.target.classList.contains("star-btn")) {
    var favCardId = parseInt(event.target.closest(".ideabox-container").id)
    var favCardStar = event.target

    for (var i = 0; i < ideas.length; i++) {
      if (ideas[i].id === favCardId) {
        ideas[i].updateIdea(favCardStar)
      }
    }
  }
}

function addIdea() {
  var newIdea = new Idea(userTitleInput.value, userBodyInput.value);
  ideas.push(newIdea);

  ideaboxSection.innerHTML += `
    <div class="ideabox-container" id="${ideas[ideas.length -1 ].id}">
      <div class="ideabox-header">
        <div class="ideabox-header-image"><img class="star-btn" src="assets/star.svg" alt="star to favorite"></div>
        <div class="ideabox-header-image"><img class="delete-btn" src="assets/delete.svg" alt="x to delete"></div>
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

function deleteCard(event) {
if (event.target.classList.contains("delete-btn")) {
  for (var i = 0; i < ideas.length; i++) {
    var id = parseInt(event.target.closest(".ideabox-container").id)
    if (id === (ideas[i].id)) {
      ideas.splice(i, 1)
    } event.target.closest(".ideabox-container").remove()
  }
}
}
