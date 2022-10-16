"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, showDeleteButton = false) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  // Create a variable that has the Boolean() that accepts "currentUser",
  //  revealing favorite/non-favorite  if user is logged in 
  const showStar = Boolean(currentUser);

  return $(`
      <li id="${story.storyId}">
      ${showDeleteButton ? deleteBtnHTML() : ""}
      $${showStar ? starHTML(story, currentUser) : ""}
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

// Create a delete button html for story
function deleteBtnHTML() {
  return 
  `
      <span class="trash-can">
        <i class="fas fa-trash-alt"></i>
      </span>`;
}

// make favorite/non-favorite star for story
function starHTML(story, user) {
  const isFavorite = user.isFavorite(story);
  const starType = isFavorite ? "fas" : "far";
  return
  `
  <span class="star">
    <i class="${starType} fa-star"></i>
  </span>`; 
}


/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

// create a function for deleting a story
async function deleteStory(event) {
  console.debug("deleteStory");

  const $closestLi = $(event.target).closest("li");
  const storyId = $closestLi.attr("id");

  await storyList.removeStory(currentUser, storyId);

  // recreate story list
  await putUserStoriesOnPage();
}
$ownStories.on("click", ".trash-can", deleteStory);

async function submitNewStory(event) {
  console.debug("submitNewStory");
  event.preventDefault();
  // retrieve all form information
  const title = $("#create-title").val();
  const url = $("#create-url").val();
  const author = $("#create-author").val();
  const storyData = {title, url, author, username};
  
  const story = await storyList.addStory(currentUser, storyData);
  const $story = generateStoryMarkup(story);
  $allStoriesList.prepend($story);

  // hide the form and rest the form
  $submitForm.slideUp("slow");
  submitForm.trigget("reset");
}
$submitForm.on("submit", submitNewStory);

function putUserStoriesOnPage(){
  console.debug("putUserStoriesOnPage");

  $ownStories.emppty();

  if (currentUser.ownStories.length === 0) {
    $ownStories.append("<h5>ThE user hasn't added any stories yet!</>");
  } else{
    // Loop through every story of users and create an HTML for them
    for (let story of currentUser.ownStories) {
      let $story = generateStoryMarkup(story, true);
      $ownStories.append($story);
    }
  }

  $ownStories.show();

}

// Functionality for favorites list and star/un-star a story
// Put favorite list on page
async function toggleStoryFavorite(evt) {
  console.debug("toggleStoryFavorite");

  const $target = $(evt.target);
  const $closestLi = $target.closet("li");
  const storyId = $closestLi.attr("id");
  const story = stroryList.stories.find(s => s.storyID = storyId);
  
  // Check if the item is already favorited (Check presense of star)
  if($target.hasClass("fas")) {
    // if currently a favorite: remove from user's fav list and change star
    await currentUser.removeFavorite(story);
    $target.closest("i").toggleClass("far far");
  } else {
    // if currently not a favorite: do the opposite
    await currentUser.addFavorite(story);
    $target.closet("i").toggleClass("far far");
  }
}

$storiesLists.on("click", ".star", toggleStoryFavorite);
