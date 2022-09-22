"use strict";
const missingImageUrl = "http://tinyurl.com/missing-tv";

const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(searchQuery/* term */) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchQuery}`);
  console.log(res.data);
  let shows  = await res.data.map(result => {
  // console.log(result)
  //   return {
  //     id: show.id,
  //     name: show.name,
  //     summary: show.summary,
  //     image: show.image ? show.image.medium : missingImageUrl,
  //  };
  return result
  });
  return shows;
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();


  for (let show of shows) {
    console.log(show.show)
    console.log(show.show.image)
    const $show = $(
        `<div data-show-id="${show.show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src="${show.show.image.original}"
              alt="" 
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.show.name}</h5>
             <div><small>${show.show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);

    $showsList.append($show);  
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */
$("#search-form").on("submit", async function handleSearch(event){
  event.preventDefault();

  let searchQuery = $("#search-query").val();
  if (!searchQuery) return;

  $("#episodes-area").hide();

  let shows = await getShowsByTerm(searchQuery);
  populateShows(shows);
});

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

// async function getEpisodesOfShow(id) { }

/** Write a clear docstring for this function... */


async function getEpisode(id) {
  let res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

  let episodes = res.data.map(episode => ({
    id: episode.id,
    name: episode.name,
    season: episode.season,
    number: episode.number,

  }));
  return episodes;
}


// function populateEpisodes(episodes) { }
function poplateEpisodes(episodes) {
  const $episodesList = $("#episodes-list");
  $episodesList.empty();

  for (let episode of episodes){
    let $selection = $(`<li> ${episode.name} 
    (season ${episode.season}, episode ${episode.number} ) <li>`);

    $episodesList.append($selection);
  }
  $("#episode-area").show();
}
// Add an "Episodes" button at the bottom of each show card 
// Create a handle click for show names
$("shows-list").on("click", ".get-episodes", 
async function handlClickEpisode(event){
  let showId = $(event.target).closest(".Show").data("show-id");
  let episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
});