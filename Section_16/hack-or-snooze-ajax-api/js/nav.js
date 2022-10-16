"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

// Show story submit form on clicking "submit"
function clickNavSubmit(evt) {
  console.debug("clickNavSubmit", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}
$navSubmitStory.on("click", clickNavSubmit);

// Show favorite stories form on clicking "favorites"
function clickNavFavorites(evt) {
  console.debug("clickNavFavorites", evt);
  hidePageComponents();
  putFavoritesListOnPage();
}
$body.on("click", "#nav-favorites", clickNavFavorites);

// Show my favorite stories on clicking "my stories"
function NavMyStories(evt) {
  console.debug("NavMyStories", evt);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
}
$body.on("click", "#nav-my-stories", NavMyStories);
/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
