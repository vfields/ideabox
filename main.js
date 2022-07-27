//GLOBAL VARIABLE:
var ideas = []

//QUERY SELECTORS:
var saveButton = document.querySelector(".saveButton")
var userTitleInput = document.querySelector("#title-input")
var userBodyInput = document.querySelector("#body-input")
var ideaboxSection = document.querySelector(".ideabox-section")
var showStarredButton = document.querySelector(".showStarredButton")

//FUNCTIONS:

saveButton.addEventListener('click', addIdea);
saveButton.addEventListener('click', clearInput);

function addIdea() {
  if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
    var newIdea = new Idea(userTitleInput.value, userBodyInput.value);
    ideas.push(newIdea);
    console.log(ideas);
    // displayIdeas(); I should see a new idea card with the provided title and body appear on the DOM
  }
  else if (userTitleInput.value.length === 0 || userBodyInput.value.length === 0) {
    console.log('else if fired')
    // alert('You need to fill out the Title and Body sections to save an idea!');
  }
}

function clearInput() {
  userTitleInput.value = '';
  userBodyInput.value = '';
}

// brainstorm for save button disabled;

var formContainer = document.querySelector(".form-container");

formContainer.addEventListener('input', function() {
  console.log('this is an input event');
})

formContainer.addEventListener('change', function() {
  console.log('this is a change event');
  //saveButton.classList.add('saveButtonDisabled');
})
