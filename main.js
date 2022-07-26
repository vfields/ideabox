

//GLOBAL VARIABLE:
var ideas = []

//QUERY SELECTORS:
var saveButton = document.querySelector(".saveButton")
var userTitleInput = document.querySelector("#title-input")
var userBodyInput = document.querySelector("#body-input")
var ideaboxSection = document.querySelector(".ideabox-section")
var showStarredButton = document.querySelector(".showStarredButton")

//EVENT LISTENERS:
saveButton.addEventListener("click", createNewIdea)
saveButton.addEventListener("keyup", enableSaveButton)

//FUNCTIONS:


function createNewIdea() {
  var newIdea = new Idea(userTitleInput.value, userBodyInput.value)
  ideas.push(newIdea)
  var newIdeaElement = document.createElement("div")
  ideaboxSection.appendChild(newIdeaElement)
  newIdeaElement.classList.add("ideabox-container")
  newIdeaElement.innerHTML = `<div class="ideabox-container">
    <div class="ideabox-header">
      <div class="ideabox-header-image"><img src="assets/star-active.svg" alt="star to favorite"></div>
      <div class="ideabox-header-image"><img src="assets/delete.svg" alt="x to delete"></div>
    </div>
    <div class="ideabox-body">
      <h3>${newIdea.title}</h3>
      <p class="ideabox-body-text">${newIdea.body}</p>
    </div>
    <div class="ideabox-footer">
      <div class="ideabox-footer-image"><img src="assets/comment.svg"></div>
      <div class="ideabox-comment"><p>Comment</p></div>
    </div>
  </div>`
  userTitleInput.value = ""
  userBodyInput.value = ""
}

function enableSaveButton(){
  if (!userBodyInput && !userTitleInput) {
    return
  } else {
    saveButton.classList.remove("disabled")
  }
}
