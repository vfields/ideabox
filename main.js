//GLOBAL VARIABLE:
var ideas = []

//QUERY SELECTORS:
var saveButton = document.querySelector(".saveButton")
var userTitleInput = document.querySelector("#title-input")
var userBodyInput = document.querySelector("#body-input")
var ideaboxSection = document.querySelector(".ideabox-section")
var showStarredButton = document.querySelector(".showStarredButton")
var formContainer = document.querySelector(".form-container");

//FUNCTIONS:

saveButton.addEventListener('click', addIdea);
saveButton.addEventListener('click', clearInput);
formContainer.addEventListener('input', saveButtonDisplay);

function addIdea() {
  if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
    var newIdea = new Idea(userTitleInput.value, userBodyInput.value);
    ideas.push(newIdea);
    console.log(ideas);

    ideaboxSection.innerHTML += `
    <div class="ideabox-container">
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
  }
  else if (userTitleInput.value.length === 0 || userBodyInput.value.length === 0) {
    console.log('else if fired')
    alert('You need to fill out the Title and Body sections to save an idea!');
  }
}

function clearInput() {
  saveButton.disabled = true;
  if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
    userTitleInput.value = '';
    userBodyInput.value = '';
  }
}

function saveButtonDisplay() {
  console.log('this is an input event');
  if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
    saveButton.disabled = false;
  }
  // else {
  //   saveButton.disabled = true; // I think this is redundant, since we reset the boolean in the clearInput function
  // }
}
