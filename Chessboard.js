/*
Wrie a program that creates a string  that represents an 8X8 grid , using new line characters to seperate lines . At each position  of the gridthere is either a space or a # character. The characters should form a chessboard . passing the string to console.log should show something like this.

    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #

when you have a program that generates this pattern, define a binding size = 8and change the programj so thatit  works fir any size , computtings grid of given width and height,
*/

function createChessboard(size) {
  let chessboard = '';

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      // Check if the sum of row and col is even
      if ((row + col) % 2 === 0) {
        chessboard += ' ';
      } else {
        chessboard += '#';
      }
    }
    chessboard += '\n'; // Add a new line character after each row
  }

  return chessboard;
}

console.log(createChessboard(8));


/*
  beggining we will use the row and column to determine if a space or a # character should be placed at each position.
  next writing a function called createChessboard which takes a size parameter representing the width and height of the  grid. This function will return a string representing the chessboard pattern.
  in this implementation, we use the size parameter to determine the number of rows and columns  in the chessboard. We iterate over each position and check if the sum of the row and column indices is even to determine which('' or'#') to place. We addd a new line character after each row to seperate the lines.')
/*