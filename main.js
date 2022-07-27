//GLOBAL VARIABLE:
var ideas = []

//QUERY SELECTORS:
var saveButton = document.querySelector(".saveButton")
var userTitleInput = document.querySelector("#title-input")
var userBodyInput = document.querySelector("#body-input")
var ideaboxSection = document.querySelector(".ideabox-section")
var showStarredButton = document.querySelector(".showStarredButton")
var formContainer = document.querySelector(".form-container");


//EVENT HANDLERS:

saveButton.addEventListener('click', addIdea);
formContainer.addEventListener('input', saveButtonDisplay);
// saveButton.addEventListener('click', clearInput);
card.addEventListener('click', deleteCard) //needs to be an anonymous function?


function addIdea() {
  var newIdea = new Idea(userTitleInput.value, userBodyInput.value);
  ideas.push(newIdea);

  ideaboxSection.innerHTML += `
    <div class="ideabox-container" id="${ideas[ideas.length-1].id}">
      <div class="ideabox-header">
        <div class="ideabox-header-image"><img src="assets/star-active.svg" alt="star to favorite"></div>
        <div class="ideabox-header-image"><img src="assets/delete.svg" alt="x to delete"></div>
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

function deleteCard(idea) {
  for (var i = 0; i < ideas.length; i++) {
    if (idea === ideas[i]) {
      ideas.splice(ideas[i], 1)
      event.target.id.remove()
    }
  }
}
