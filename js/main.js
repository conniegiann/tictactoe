/*
 * State: An array containing the current state of the game,
 * ie. whether a particular box has been chosen by a player or not.
 * Before a box has been chosen by either player, it's value is null,
 * so state is initialized with 9 elements, all null.
 */
var state = [null, null, null, null, null, null, null, null, null];

/*
 * The Current player will be initially set to 'X'.
 */
state.currentPlayer = 'X';

/*
 * Function to switch current player from 'X' to 'O' or vica versa.
 */
state.switchPlayer = function() {
  this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
};

/*
 * checkForWinner: To check if someone has won, this function is called during playerTurn.
 */
var checkForWinner = function() {

  // The current player.
  var p = state.currentPlayer;

  // Check for a row.
  if(state[0] == p && state[1] == p && state[2] == p || // First row.
     state[3] == p && state[4] == p && state[5] == p || // Second row.
     state[6] == p && state[7] == p && state[8] == p) { // Third row.

    //alert('Player ' + p + ' has won, Yay!');
    $('.result h2').text(p + ' has won the game!');
    return;
  }

  // Check for columns.
  if(state[0] == p && state[3] == p && state[6] == p || // First column.
     state[1] == p && state[4] == p && state[7] == p || // Second colum.
     state[2] == p && state[5] == p && state[8] == p) { // Third column.

    //alert('Player ' + p + ' has won, Yay!');
    $('.result h2').text(p + ' has won the game!');  
    return;
  }

  // Check for the two diagonals.
  if(state[0] == p && state[4] == p && state[8] == p || // Top left to bottom right.
     state[2] == p && state[4] == p && state[6] == p) { // Top right to bottom left.

    //alert('Player ' + p + ' has won, Yay!');
    $('.result h2').text(p + ' has won the game!');
    return;
  }

  // Check for tie.
  var emptySquares = false;

  state.forEach(function(element) {
    if(element === null) {
      emptySquares = true;
    }
    return;
  });

  if(emptySquares !== true) {
    //alert('There is a tie! The game ended. It was a draw.');
    $('.result h2').text('There is a tie! The game has ended. It was a draw.');
  };
}


/*
 * playerTurn is called when a player clicks on a square.
 */
var playerTurn = function() {

  // Get a reference to the 'istaken' attribute of the HTML element that was clicked.
  var isTaken = $(this).attr('istaken');

  // If this square has not already been taken by one of the players.
  if (isTaken == 'false') {

    // Take the square for the current player,
    // by first displaying the 'X' or 'O' in the corresponding div.
    $(this).append('<p>' + state.currentPlayer + '</p>');

    // Then change the elements 'istaken' attribute to true.
    $(this).attr('istaken', 'true');

    // Use 'id' attribute of the HTML element. Convert to integer.
    var id = parseInt($(this).attr('id'));

    // Use the id (which corresponds to an index),
    // to update the state array.
    state[id] = state.currentPlayer;

    console.log('Player %s took square %s', state.currentPlayer, id);

    // Check to see if someone has just won the game.
    checkForWinner();

    // Switch the player for the next turn.
    state.switchPlayer();

  // If the square was already taken by a player.
  } else {
    console.log('Square %s was already taken by %s', $(this).attr('id'), state[$(this).attr('id')]);
  }
}

$('.box').on('click', playerTurn);

/*
 * Reset Function.
 */
var reset = function() {
  state.forEach(function(element, index) {
    state[index] = null;
  });

  $('.box').each(function() {
    $(this).attr('istaken', false);
    $(this).empty();
  });
  $('.result h2').text('');
}

$('button').on('click', reset);
