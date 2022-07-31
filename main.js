//GLOBAL VARIABLE:
var ideas = []
var favorites = []

//QUERY SELECTORS:
var saveButton = document.querySelector(".saveButton")
var userTitleInput = document.querySelector("#title-input")
var userBodyInput = document.querySelector("#body-input")
var ideaboxSection = document.querySelector(".ideabox-section")
var showStarredButton = document.querySelector(".showStarredButton")
var formContainer = document.querySelector(".form-container")
var searchBar = document.querySelector("#search-ideas");

//EVENT LISTENERS

saveButton.addEventListener('click', addIdea)
formContainer.addEventListener('input', function() {
  enableSaveButton();
  disableSaveButton();
})
// saveButton.addEventListener('click', clearInput);
ideaboxSection.addEventListener('click', deleteCard)
ideaboxSection.addEventListener('click', updateStarDisplay)
showStarredButton.addEventListener('click', displayAllOrFavorites)
searchBar.addEventListener('input', filterSearch)

//EVENT HANDLERS
// function displayFavorites() {
//   var currentIdeaCards = Array.from(document.querySelectorAll(".ideabox-container"));
//
//   if (event.target.innerHTML === 'Show Starred Ideas') {
//     event.target.innerHTML = 'Show All Ideas';
//     for (var i = 0; i < currentIdeaCards.length; i++) {
//       if (!currentIdeaCards[i].classList.contains("favorite"))  {
//         currentIdeaCards[i].closest('.ideabox-container').classList.add("hidden");
//       }
//     }
//   }
//   else if(event.target.innerHTML === 'Show All Ideas') {
//     event.target.innerHTML = 'Show Starred Ideas';
//     for (var i = 0; i < currentIdeaCards.length; i++) {
//       if (currentIdeaCards[i].classList.contains("ideabox-container"))  {
//         currentIdeaCards[i].closest('.ideabox-container').classList.remove("hidden");
//       }
//     }
//   }
// }

function filterSearch() {
  var userSearch = searchBar.value.toLowerCase();
  var currentIdeas = Array.from(document.querySelectorAll(".ideabox-body"));
  // console.log(currentIdeas);
  for (var i = 0; i < currentIdeas.length; i++) {
    var innerText = currentIdeas[i].innerText.toLowerCase();
    if (innerText.indexOf(userSearch) === -1) {
      // console.log("This does not match, no");
      currentIdeas[i].closest('.ideabox-container').classList.add("hidden");
    }
    else if (innerText.indexOf(userSearch) > -1) {
      // console.log("This does match, yes");
      currentIdeas[i].closest('.ideabox-container').classList.remove("hidden");
    }
  }
}

function render(arrayOfIdeas) {
  ideaboxSection.innerHTML = ""
  for (var i = 0; i < arrayOfIdeas.length; i++) {
    if (!arrayOfIdeas[i].star) {
      ideaboxSection.innerHTML += `
      <div class="ideabox-container" id="${arrayOfIdeas[i].id}">
        <div class="ideabox-header">
          <div class="ideabox-header-image"><img class="star-btn" src="assets/star.svg" alt="star to favorite"></div>
          <div class="ideabox-header-image"><img class="delete-btn" src="assets/delete.svg" alt="x to delete"></div>
        </div>
        <div class="ideabox-body">
          <h3>${arrayOfIdeas[i].title}</h3>
          <p class="ideabox-body-text">${arrayOfIdeas[i].body}</p>
        </div>
        <div class="ideabox-footer">
          <div class="ideabox-footer-image"><img src="assets/comment.svg"></div>
          <div class="ideabox-comment"><p>Comment</p></div>
        </div>
      </div>
      `
    } else {
      ideaboxSection.innerHTML += `
      <div class="ideabox-container" id="${arrayOfIdeas[i].id}">
        <div class="ideabox-header">
          <div class="ideabox-header-image"><img class="star-btn" src="assets/star-active.svg" alt="star to favorite"></div>
          <div class="ideabox-header-image"><img class="delete-btn" src="assets/delete.svg" alt="x to delete"></div>
        </div>
        <div class="ideabox-body">
          <h3>${arrayOfIdeas[i].title}</h3>
          <p class="ideabox-body-text">${arrayOfIdeas[i].body}</p>
        </div>
        <div class="ideabox-footer">
          <div class="ideabox-footer-image"><img src="assets/comment.svg"></div>
          <div class="ideabox-comment"><p>Comment</p></div>
        </div>
      </div>
      `
    }
  }
}

function addIdea() {
  var newIdea = new Idea(userTitleInput.value, userBodyInput.value);
  ideas.push(newIdea);
  render(ideas);
  userTitleInput.value = "";
  userBodyInput.value = "";
  disableSaveButton();
}

function renderFavorites() {
  render(favorites);
}

function updateStarDisplay() {
  if (event.target.classList.contains("star-btn")) {
    if (event.target.getAttribute('src') === "assets/star.svg") {
      event.target.src = "assets/star-active.svg";
      event.target.closest(".ideabox-container").classList.add("favorite")
      addToFavorites()
    } else if (event.target.getAttribute('src') === "assets/star-active.svg") {
      event.target.src = "assets/star.svg";
      event.target.closest(".ideabox-container").classList.remove("favorite")
      removeFromFavorites()
    }
  }
}

function addToFavorites() {
  var id = parseInt(event.target.closest(".ideabox-container").id);
    for (var i = 0; i < ideas.length; i++) {
      if (id === (ideas[i].id)) {
        ideas[i].updateIdea();
        favorites.push(ideas[i]);
      }
    }
}

function removeFromFavorites() {
  var id = parseInt(event.target.closest(".ideabox-container").id);
    for (var i = 0; i < ideas.length; i++) {
      if (id === (ideas[i].id)) {
        ideas[i].updateIdea();
      }
    }
    for (var i = 0; i < favorites.length; i++) {
      if (id === (favorites[i].id)) {
        favorites.splice(i, 1)
      }
    }
}

function enableSaveButton() {
  if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
    saveButton.disabled = false;
  }
}

function disableSaveButton() {
  if (!userTitleInput.value.length || !userBodyInput.value.length) {
    saveButton.disabled = true;
  }
}

function deleteFromArrays(dataSet) {
  for (var i = 0; i < dataSet.length; i++) {
    var id = parseInt(event.target.closest(".ideabox-container").id)
    if (id === (dataSet[i].id)) {
      dataSet.splice(i, 1);
    }
  }
}

function deleteCard() {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest(".ideabox-container").remove()
    deleteFromArrays(ideas);
    deleteFromArrays(favorites);
  }
}

// function filterSearch() {
//   var userSearch = searchBar.value.toLowerCase();
//   var searchList = [];
//   for (var i = 0; i < ideas.length; i++) {
//     var lowerCaseTitle = ideas[i].title.toLowerCase();
//     var lowerCaseBody = ideas[i].body.toLowerCase();
//     if (lowerCaseTitle.indexOf(userSearch) > -1 || lowerCaseBody.indexOf(userSearch) > -1) {
//       searchList.push(ideas[i]);
//     }
//     }
//     // section.innerHTML = '';
//     // section.innerHTML += searchList, hide the others; (a loop to render through an array)
//     // want to display searchList, and hide the other DOM elements
//   }
// }

/************/

// grab the inner text of the different ideas currently in the ideas
// data set array, and force them to lower case
// loop through the ideas array, grabbing ideas[i].title & ideas[i].body

// affect the current display/DOM (we'd either have to use section.innerHTML = '';
// or we could use one of the other functions we've created)
// responding to input, the loop keep running, the event would work
// does the user input match the title/body
// var title = ideas[i].title & var body = ideas[i].body (?)
// still have an array with objects, but only objects that match the
// search criteria


//REFACTOR AREA:

// function whichStar() {
//   for (var i = 0; i < ideas.length; i++) {
//     var id = ideas[i].id;
//     if (ideas[i].star) {
//       document.getElementById(`img${id}`).src = "assets/star-active.svg"
//       console.log("I found favorited ideas!")
//     } else if (!ideas[i].star) {
//       document.getElementById(`img${id}`).src = "assets/star.svg"
//       console.log("I found non-favorited ideas")
//     }
//   }
//   return starImg
// }
function toggleStarredButton() {
  if (event.target.innerHTML === 'Show Starred Ideas') {
    event.target.innerHTML = 'Show All Ideas';
  } else {
    event.target.innerHTML = 'Show Starred Ideas';
  }
}

function displayAllOrFavorites() {
  if (event.target.innerHTML === 'Show Starred Ideas') {
    toggleStarredButton();
    renderFavorites();
  } else if (event.target.innerHTML === 'Show All Ideas') {
    toggleStarredButton();
    render(ideas);
  }
}
