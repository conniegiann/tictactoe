// Hash of current state of each box.
var boxes = {
  a: null,
  b: null,
  c: null,
  d: null,
  e: null,
  f: null,
  g: null,
  h: null,
  i: null
}

// Initializes the current player (used in the setBox function)
var currentPlayer = 'X'

var setBox = function() {
  // Get a reference to the 'clicked' attribute of the box element.
  var isSet = $(this).attr('clicked');

  // If peice is not already set on the board
  if (isSet === 'false') {

    // Check the current player. 
    if (currentPlayer === 'X') {

      // Write the symbol 'X' into the box.
      $(this).append('X');

      // Get the 'id' attribute of the current element.
      var id = $(this).attr('id');

      // Set the value of the box.
      boxes[id] = 'X';

      // Check for a winner
      checkForWinner();
      $(this).attr('clicked', 'true');

      // Switch to the next player.
      currentPlayer = 'O'

    // Other player.
    } else {

      // Write the symbol 'O' into the box.
      $(this).append('O');

      // Get the 'id' attribute of the current element.
      var id = $(this).attr('id');

      // Set the value of the box.
      $(this).attr('clicked', 'true');

      // Set the value of this box.
      boxes[id] = 'O';

      // Switch to the next player.
      currentPlayer = 'X'
    }
  }
}

// On 'click' event execute the onClick
$('.box').on('click', setBox);

// Check whether or not someone has won.
var checkForWinner = function() {

  for (var i = 1; i <= 2; i++) {

    // Win Row 1.
    if (boxes.box1 === i && boxes.box2 === i && boxes.box3 === i) {
      alert('WIN');

      // Win Row 2.
    } else if (boxes.box4 === i && boxes.box5 === i && boxes.box6 === i) {
      alert('WIN');

      // Win Row 3.
    } else if (boxes.box7 === i && boxes.box8 === i && boxes.box9 === i) {
      alert('WIN');

      // Win Col 1.
    } else if (boxes.box1 === i && boxes.box4 === i && boxes.box7 === i) {
      alert('WIN');

      // Win Col 2.
    } else if (boxes.box2 === i && boxes.box5 === i && boxes.box8 === i) {
      alert('WIN');

      // Win Col 3.
    } else if (boxes.box3 === i && boxes.box6 === i && boxes.box9 === i) {
      alert('WIN');

      // Win diagonal 1.
    } else if (boxes.box7 === i && boxes.box5 === i && boxes.box3 === i) {
      alert('WIN');

      // Win diagonal 2.
    } else if (boxes.box7 === i && boxes.box5 === i && boxes.box3 === i) {
      alert('WIN');
    }
  }
};


