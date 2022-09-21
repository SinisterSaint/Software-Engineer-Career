/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

 const WIDTH = 7;
 const HEIGHT = 6;
 
 let currPlayer = 1; // active player: 1 or 2
 let board = []; // array of rows, each row is array of cells  (board[y][x])
 
 /** makeBoard: create in-JS board structure:
  *    board = array of rows, each row is array of cells  (board[y][x])
  */
 
 const makeBoard = () => {
   // TODO: set "board" to empty HEIGHT x WIDTH matrix array
   for (let y = 0; y < HEIGHT; y++){
       board.push(Array.from({length : WIDTH}));
   }
   
 }
 
 /** makeHtmlBoard: make HTML table and row of column tops. */
 
 const makeHtmlBoard = () => {
   // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
   const htmlBoard = document.getElementById('board');

 
   // TODO: add comment for this code
   // Create an eventListener for click on a box on the top row to make you move
   let top = document.createElement("tr");
   top.setAttribute("id", "column-top");
   top.addEventListener("click", handleClick);
 
   for (let x = 0; x < WIDTH; x++) {
     let headCell = document.createElement("td");
     headCell.setAttribute("id", x);
     top.append(headCell);
   }
   htmlBoard.append(top);
 
   // TODO: add comment for this code
   // create a code that creates an id for the x-y position on the board
   for (let y = 0; y < HEIGHT; y++) {
     const row = document.createElement("tr");

     for (let x = 0; x < WIDTH; x++) {
       const cell = document.createElement("td");
       cell.setAttribute("id", `${y}-${x}`);
       row.append(cell);
     }
     htmlBoard.append(row);
   }
 }
 
 /** findSpotForCol: given column x, return top empty y (null if filled) */
 
 const findSpotForCol = (x) =>  {
   // TODO: write the real version of this, rather than always returning 0
   for (let y = HEIGHT - 1; y >= 0; y-- ){
       if (!board[y][x]){
           return y;
       }
      
   }

   return null;
 }
 
 /** placeInTable: update DOM to place piece into HTML table of board */
 
 const placeInTable = (y, x) => {
   // TODO: make a div and insert into correct table cell
   const piece = document.createElement('div');
   piece.classList.add('piece');
   piece.classList.add(`player${currPlayer}`);
  //  piece.style.top = -50 * (y + 2);


 const spot = document.getElementById(`${y}-${x}`);
 spot.append(piece);
 }

 
 
 /** endGame: announce game end */
 
 const endGame = (msg) => {
     alert(msg);
   // TODO: pop up alert message
 }
 
 /** handleClick: handle click of column top to play piece */
 
 const handleClick = (evt) => {
   alert(currPlayer);
   // get x from ID of clicked cell
   let x = +evt.target.id;
   // get next spot in column (if none, ignore click)
   let y = findSpotForCol(x);
   console.log(y);
   if (y === null) {
     return;
   }
 
   // place piece in board and add to HTML table
   // TODO: add line to update in-memory board
   board[y][x] = currPlayer
   placeInTable(y, x);
 
   // check for win
   if (checkForWin()) {
     return endGame(`Player ${currPlayer} won!`);
     
   }
   console.log(currPlayer)
   // check for tie
   // TODO: check if all cells in board are filled; if so call, call endGame
   if (board.every(row => row.every(cell => cell))) {
       return endGame('IT IS A TIE :(');
   }

 
   // switch players
   // TODO: switch currPlayer 1 <-> 2
   currPlayer = currPlayer === 1 ? 2 : 1;
   console.log(currPlayer)
 }
 console.log(currPlayer);
 
 /** checkForWin: check board cell-by-cell for "does a win start here?" */
 
 const checkForWin = () => {
   const _win = (cells) => {
     // Check four cells to see if they're all color of current player
     //  - cells: list of four (y, x) cells
     //  - returns true if all are legal coordinates & all match currPlayer
 
     return cells.every(
       ([y, x]) =>
         y >= 0 &&
         y < HEIGHT &&
         x >= 0 &&
         x < WIDTH &&
         board[y][x] === currPlayer
     );
   }

   
 
   // TODO: read and understand this code. Add comments to help you.
 
   for (var y = 0; y < HEIGHT; y++) {
     for (var x = 0; x < WIDTH; x++) {
       const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
       const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
       const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
       const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
 
       if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
         return true;
       }
     }
   }
 }
 
 makeBoard();
 makeHtmlBoard();
 