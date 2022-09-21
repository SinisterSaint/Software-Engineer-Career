const $giphySection = $('#results');
const $searchBtn = $('#search');


console.log("Let's get this party started!");

// Use Ajax to add a gif
function searchGif(res) {
  console.log(res);
    let searchResults = res.data.length;
    if (searchResults) {
      let randomIdx = Math.floor(Math.random() * searchResults);
      let $newColumn = $("<div>", { class: "giphColumn" });
      let $searchNewGiph = $("<img>", {src: res.data[randomIdx].images.original.url,  
        class: "searchNew" });
      $newColumn.append($searchNewGiph);                           
      $giphySection.append($newColumn);

      console.log("img");
    }
  }
// Create event for search button
$($searchBtn).on("click", async function(event){
  event.preventDefault();

  
  let searchValue = $("#searchValue").val();

  $("#searchValue").val("");
  
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchValue,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

    }
  });
  console.log(res)
  searchGif(res.data);
});
// remove Gif button
$("#remove").on("click", function(){
  $giphySection.empty();
});


