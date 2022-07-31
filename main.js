//GLOBAL VARIABLE:
var ideas = []
var ideaFavorites = []

//QUERY SELECTORS:
var saveButton = document.querySelector(".saveButton")
var userTitleInput = document.querySelector("#title-input")
var userBodyInput = document.querySelector("#body-input")
var ideaboxSection = document.querySelector(".ideabox-section")
var showStarredButton = document.querySelector(".showStarredButton")
var starButtonContainer = document.querySelector(".ideabox-container")
var starHeader = document.querySelectorAll(".ideabox-image")
var formContainer = document.querySelector(".form-container")
var searchBar = document.querySelector("#search-ideas");

//EVENT LISTENERS

 saveButton.addEventListener('click', saveIdea)
// formContainer.addEventListener('input', saveButtonDisplay)
 ideaboxSection.addEventListener('click', deleteIdea)
 searchBar.addEventListener('input', searchIdea)
starButtonContainer.addEventListener("click", updateStarStatus)

//EVENT HANDLERS
var idea = new Idea({tite: title.value,
                    body: body.value,
                    star: star.value})

function saveIdea() {
  ideas.push(idea)
  displayIdeas()
}

function searchIdea() {
  if(ideas.contains(idea)) {
    displayIdeas()
  }
}

function deleteIdea() {
    if (ideas.contains(idea)) {
    ideas.pop(idea)
    displayIdeas()
  }
}

function displayIdeas() {
  for (var i = 0; i < ideas.length; i++) {
  title.innerText = ${ideas[i].title}
  body.innerText = ${ideas[i].body}
  star.src = ${ideas[i].star}
  clearInput()
  }
}

function updateStarStatus() {
  idea.updateIdea()
  starHeader.classList.toggleAttribute('hidden')
  displayIdeas()
  if (idea.star) {
  ideaFavorites.push(idea)
} else if (!idea.star) {
    ideaFavorites.pop(idea)
  }
}

function clearInput() {
  title.innerText= '';
  body.innerText = '';
  star.src = ''
}

//////CHANGE HTML TO LOOK LIKE BELOW
// <div class="ideabox-header-image"><img class="star-btn white-star" src="assets/star.svg" alt="white star visible"></div>
// <div class="ideabox-header-image hidden"><img class="star-btn red-star" src="assets/star-active.svg" alt="red star visible"></div>
