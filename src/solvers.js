/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

function isValidBoardState(board) {
  if (!(board.hasAnyColConflicts()) && !(board.hasAnyRowConflicts())) {
    return true;
  }

  return false;
}

window.findNRooksSolution = function(n, board, row) {
  var solutions = [];
  var board = board || new Board({n:n}); //
  var row = row || 0;

  for (var x = n - 1; x >= 0; x--) {
    if (x < (n - 1)) {  // reset earlier toggle
      board.togglePiece(row, x + 1);
    }
    board.togglePiece(row, x);   // put piece at n,n

    if (isValidBoardState(board)) {
      if (row ===(n - 1)) {  // last row, this is a fully valid boardstate
        solutions.push(board);
      } else {
        return findNRooksSolution(n, board, row + 1);
      }
    }
  }

  // console.log('Number of solutions for ' + n + ' rooks:', solutions.length);
  if (solutions.length !== 0) {
    return solutions[0].rows();  //
  } else {
    return null;
  }
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, board, row) {
  if (n === 0) {
    return 1;
  }

  var solutions = 0;

  function branch(n, board, row) {
    var row = row || 0;

    for (var x = 0; x < n; x++) {
      /* if (x > 0) {  // reset earlier toggle
        board.togglePiece(row, x - 1);
      } */
      board.togglePiece(row, x);   // put piece at n,n

      if (isValidBoardState(board)) {
        if (row === (n - 1)) {  // last row, this is a fully valid boardstate
          solutions += 1;
        } else {
          branch(n, board, row + 1);
        }
      }
      board.togglePiece(row, x);
    }
  }
  branch(n, new Board({n:n}));

  console.log('Number of solutions for ' + n + ' rooks:', solutions);
  return solutions;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
