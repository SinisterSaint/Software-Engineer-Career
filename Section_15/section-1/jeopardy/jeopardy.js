// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
const numOfCategories = 6;
const numOfQuestionsPerCategory = 5;
const apiUrl = "http://jservice.io/api/"


let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

// getCategoryIds functions will pick from 50 categories
async function getCategoryIds() {
    let res = await axios.get(`${apiUrl}categories?count=50`);
    let categoryIds = res.data.map(category => category.id);
    return _.sampleSize(categoryIds, numOfCategories);
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(categoryId) {
    
    const res = await axios.get(`${apiUrl}categories?id=${categoryId}`);
    const gameCategory = res.data;
    // console.log(gameCategory[0].title);
    const gameClues = gameCategory[0].clues;
    const randomizedGameClues = _.sampleSize(gameClues, numOfQuestionsPerCategory);
    const questionClue = randomizedGameClues.map(clue => ({
        question: clue.question,
        answer: clue.answer,
        showing: null
    }));
    console.log(res.data);
    return {title: gameCategory[0].title, clues: questionClue};
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    hideLoadingView();
    let catIds = await getCategoryIds();
    
    for (let i = 0; i < await catIds.length; i++){
        categories.push();
        // console.log(getCategory(2))
     }
   

    
    
    // add row with headers for each category 
    $("#jeopardy thead").empty();
    const $tableRow = $("<tr>");
    for (let category of categories) {
        $tableRow.append($("<th>").text(category.title));
        // $tableRow.append($("<th>").text(category[i].title));
    }
    $("#jeopardy thead").append($tableRow);
    // For each category, create rows contatining questions
    $("#jeopardy tbody").empty();
    for (let questionIdx = 0; questionIdx < numOfQuestionsPerCategory; questionIdx++) {
        let $tableRow = $("<tr>");
        for (let categoryIdx = 0; categoryIdx < numOfCategories; categoryIdx++) {
            $tableRow.append($("<td>").attr("id", `${categoryIdx}-${questionIdx}`).text("?"));
        }  
    }
    
    $("#jeopardy tbody").append($tableRow);

}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    const id = evt.target.id;
    console.log(id);
    const [categoryId, clueId] = id.split("-");
    const clue = categories[categoryId].clues[clueId];

    let message = " ";
// if currenetly null, show question and set .showing to "question"
    if (!clue.showing) {
        message = clue.question;
        clue.showing = "question";
// if currently "question", show answer and set .showing to "answer"
}   else if (clue.showing === "question") {
    message = clue.answer;
    // if currently answer, ignore click
}   else {
    return;
}
}
// to update cell text
// $(`#${categoryId}-${clueId}`).html(message);
/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
    // clear game board
    $("#jeopardy thead").empty();
    $("#jeopardy tbody").empty();
    // show loading spinner + update the button used to fetch data
    $("#spin-container").show();
    $("#start")
        .addClass("disable")
        .text("Your game will begin shortly");

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    $("#start")
    .removeClass("disable")
    .text("Restart Game!");
    $("#spin-container").hide();
   
}
/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    let gameLoading = $("#start").text() === "Your game will begin shortly";
    if (!gameLoading) {
        showLoadingView();
        let categoryIds = await getCategoryIds();
    categories = [];

    for (let categoryId of categoryIds) {
        categories.push(await getCategory(categoryId))
    }
    // for (let categoryId of categoryIds) {
    //     categories.push(getCategory(categoryId));
    // }
    fillTable();
    shuffleCategories(getCategory);

    }
    
}

/** On click of start / restart button, set up game. */
$("#start").on("click", setupAndStart);
// TODO

/** On page load, add event handler for clicking clues */
$(async function pageLoad () {
    
    $("#jeopardy").on("click","td", handleClick);
});
// TODO


/**
 * Shuffles array in place. 
// * at param {Array} a items An array containing the items.
**Code is incorperated from research from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
I have changed the name of the function from shuffle to shuffleCategories
*/

function shuffleCategories(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    return a;
}
