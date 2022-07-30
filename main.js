//GLOBAL VARIABLE:
var ideas = []
var ideaFavorites = []

//QUERY SELECTORS:
var saveButton = document.querySelector(".saveButton")
var userTitleInput = document.querySelector("#title-input")
var userBodyInput = document.querySelector("#body-input")
var ideaboxSection = document.querySelector(".ideabox-section")
var showStarredButton = document.querySelector(".showStarredButton")
var starButtonContainer = document.querySelector(//parent container of section
//of header star that changes star from red to white to red)
var formContainer = document.querySelector(".form-container")
var searchBar = document.querySelector("#search-ideas");

//EVENT LISTENERS

// saveButton.addEventListener('click', addIdea)
// formContainer.addEventListener('input', saveButtonDisplay)
// // saveButton.addEventListener('click', clearInput);
// ideaboxSection.addEventListener('click', deleteCard)
// ideaboxSection.addEventListener('click', favoriteCard)
// showStarredButton.addEventListener('click', displayFavorites)
// searchBar.addEventListener('input', filterSearch)
starButtonContainer.addEventListener("click", updateStarStatus)

//EVENT HANDLERS
var idea = new Idea({tite: userTitleInput.value,
                    body: userBodyInput.value,
                    star: updateStarStatus.value})

function addIdea() {
  ideas.push(idea)
  displayIdeas()
}

function findIdea() {
  if(event.target.classList.contains(//parentnode selector)) {
    displayIdeas()
  }
}

function deleteIdea() {
  if(event.target.classList.contains(//parentnode selector)) {
    ideas.pop()
    displayIdeas()
  }
}

function displayIdeas() {
  parentSection.innerHTML = ""
  for (var i = 0; i < ideas.length; i++) {
    parentSection.innerHTML +=
    `
    <section class="parent-section">
    <p>${ideas[i].title}
      ${ideas[i].body}
      ${ideas[i].star}
    `
  }
}

function updateStarStatus() {
  idea.updateIdea()
  starButtonContainer.classList.toggleAttribute('hidden')
  //or change innerText
  //if statement
  ideaFavorites.push(idea)
  //if statement
  ideaFavorites.pop()
}


  //star button starts with  white star image
  //changes to red star image when clicked
// <div class="ideabox-header-image"><img class="star-btn white-star" src="assets/star.svg" alt="star to favorite"></div>
// <div class="ideabox-header-image"><img class="star-btn red-star hidden" src="assets/delete.svg" alt="x to delete"></div>


// function addIdea() {
//   var newIdea = new Idea(userTitleInput.value, userBodyInput.value);
//   ideas.push(newIdea);
//
//   ideaboxSection.innerHTML += `
//     <div class="ideabox-container" id="${ideas[ideas.length - 1].id}">
//       <div class="ideabox-header">
        // <div class="ideabox-header-image"><img class="star-btn white-star" src="assets/star.svg" alt="star to favorite"></div>
        // <div class="ideabox-header-image"><img class="star-btn red-star hidden" src="assets/delete.svg" alt="x to delete"></div>
//       </div>
//       <div class="ideabox-body">
//         <h3>${ideas[ideas.length - 1].title}</h3>
//         <p class="ideabox-body-text">${ideas[ideas.length - 1].body}</p>
//       </div>
//       <div class="ideabox-footer">
//         <div class="ideabox-footer-image"><img src="assets/comment.svg"></div>
//         <div class="ideabox-comment"><p>Comment</p></div>
//       </div>
//     </div>
//     `
//   saveButton.disabled = true;
//   if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
//     userTitleInput.value = '';
//     userBodyInput.value = '';
//   }
// }
//
// function saveButtonDisplay() {
//   if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
//     saveButton.disabled = false;
//   }
//   else {
//     saveButton.disabled = true;
//   }
// }
//
// // function clearInput() {
// //   saveButton.disabled = true;
// //   if (userTitleInput.value.length > 0 && userBodyInput.value.length > 0) {
// //     userTitleInput.value = '';
// //     userBodyInput.value = '';
// //   }
// // }
//
// function deleteCard() {
//   if (event.target.classList.contains("delete-btn")) {
//     for (var i = 0; i < ideas.length; i++) {
//       var id = parseInt(event.target.closest(".ideabox-container").id)
//       if (id === (ideas[i].id)) {
//         ideas.splice(i, 1)
//         }
//       event.target.closest(".ideabox-container").remove()
//       }
//     }
//   }
//
// function favoriteCard() {
//   if (event.target.classList.contains("star-btn")) {
//     if (event.target.getAttribute('src') === "assets/star.svg") {
//       event.target.src = "assets/star-active.svg";
//       event.target.closest(".ideabox-container").classList.add("favorite")
//       // console.log(event.target.closest(".ideabox-container"))
//     }
//     else if (event.target.getAttribute('src') === "assets/star-active.svg") {
//       event.target.src = "assets/star.svg";
//       event.target.closest(".ideabox-container").classList.remove("favorite")
//       // console.log(event.target.closest(".ideabox-container"))
//     }
//     var id = parseInt(event.target.closest(".ideabox-container").id);
//       for (var i = 0; i < ideas.length; i++) {
//         if (id === (ideas[i].id)) {
//           ideas[i].updateIdea();
//           // console.log(ideas[i].star)
//         }
//       }
//   }
// }
//
// function displayFavorites() {
//   // console.log('showed star clicked');
//   var currentIdeaCards = Array.from(document.querySelectorAll(".ideabox-container"));
//   // console.log(currentIdeaCards[0]);
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
//
// function filterSearch() {
//   var userSearch = searchBar.value.toLowerCase();
//   var currentIdeas = Array.from(document.querySelectorAll(".ideabox-body"));
//   // console.log(currentIdeas);
//   for (var i = 0; i < currentIdeas.length; i++) {
//     var innerText = currentIdeas[i].innerText.toLowerCase();
//     if (innerText.indexOf(userSearch) === -1) {
//       // console.log("This does not match, no");
//       currentIdeas[i].closest('.ideabox-container').classList.add("hidden");
//     }
//     else if (innerText.indexOf(userSearch) > -1) {
//       // console.log("This does match, yes");
//       currentIdeas[i].closest('.ideabox-container').classList.remove("hidden");
//     }
//   }
// }

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
