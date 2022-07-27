const gameContainer = document.getElementById("game");
let stopClick = false;
let matchesFound = 0;
let choice = null;
card1 = null;
card2 = null;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // const onclick = document.createEvent(onclick)
    newDiv.classList.add("backOfCard")
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
     // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
flipcard(event.target) 
checkForMatch();
checkGameOver();
resetCards();
  console.log("you just clicked", event.target);

}

// Function for when card is clicked, it removes the backOfCard class
function flipcard(e) {
  // element.classList.remove("backOfCard")
  const pickedCard = card;
  console.log(e.currentTarget) 
  e.classList.toggle("backOfCard");

  if (stopClick || pickedCard === choice ||
    pickedCard.classList.contains("match")) {
      e.classList.remove("backOfCard");
      pickedCard.classList += "match";
    return;
  }
  // pickedCard.className = element.classList.remove("backOfCard");
}

function checkForMatch() {

}

function checkGameOver() {


}

function resetCards() {

}



function cardclicked () {
  addEventListener("click", flipcard);
 
   if (!choice) {
  // if card not clicked, track and display color 
  choice = pickedCard;
 
}
  else if (choice){
  // If card clicked, confirm that new card matches the previous
  stopClick = true;
  if (choice.className !==
   pickedCard.className){
    // choice.className += "match";
    // pickedCard.className += "match";
    stopClick = true;
    console.log("Cards are a MATCH!!");
    choice = null;
    choice.classList.remove("backOfCard");
    pickedCard.classList.remove("backofCard");
  }

  else if (choice) {
    matchesFound++;
    choice = null;
    if (matchesFound === 8){
      alert("CONGRATULATIONS! YOU WIN!");
    }
     
  }
  else {
    console.log("Cards are NOT a MATCH!")
    setTimeout(() => {
    choice.className.replace("match", "");
    pickedCard.className.replace("match", "");
      choice = null; 
      stopClick = false;
    }, 1000);
  }
  
  

}

 }
 
// // when the DOM loads
createDivsForColors(shuffledColors);

/* */