/*

-Render a game tictactoe game in the browser.
-Use jquery and js to access the dom.


The functions I need:

- Load board.

    Create an array of arrays. Collumns and rows of divs.
    Need 9 divs.
    1 container to hold everything in ->> That is is my css.

- Clear the board.

- Player1 move.
  Assign img1 to player1.

- Player2 move.
  Assign img2 to player2.

- Computer Random move?

- Create the logic of the game / possible wins.

- Final Score.
  Create new div with celebratory message. Possibly a dancing dinosaur gif? DANCING DINOS!

*/




document.get



// MY FUNCTIONS.. for now..

// Using arrays?
// All possible starting positions. 

var positions = [[0,1], [0,2], [0,3],
                 [1,1], [1,2], [1,3], 
                 [2,1], [2,2], [2,3]]; 
               

// random computer play / idea from scissors/paper/rock.
var randPlay = function () {
  var randMove = Math.random();
  if (randMove < 0.50) {
    return 'X';
  } else {
    return '0'
  }
}


// Set up the board.
var setBoard = function (player, row, col) {
  positions[row][col] = player;
}


// Clear the board for a new game.
// Run after either player1/player2 or computer wins.
var clearBoard = function () {
}


// Player1 move.
// If the move is true? Then assign image and append to selected box with mouseclick.

var player1 = function () {
}


// Player2 move.
// var player1 = function () {
// }


// Win array?
// To win, either player1, player2 or computer need to get:

var winRow0 = [[0,1], [0,2], [0,3]];
var winRow1 = [[1,1], [1,2], [1,3]];
var winRow2 = [[2,1], [2,2], [2,3]];

var winCol0 = [[0,1], [0,2], [0,3]];
var winCol1 = [[1,1], [1,2], [1,3]];
var winCol2 = [[2,1], [2,2], [2,3]];

// Not sure how to access the diagonal wins? Is the below right?

var diagonal1 = [[0,1], [1,2], [2,3]];
var diagonal2 = [[2,1], [1,2], [0,3]];



// Winner function.
var winner = function () {

}


// Create an event handler that listens for when you click on one of the boxes/divs.
// Do I want to create the boxes/divs with dom manip? Or have it already in the html?
// Read up on dom mannip & event handlers.










