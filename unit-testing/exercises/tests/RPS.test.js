const whoWon = require('../RPS');

describe("whoWon", function () {
  test("Should return 'TIE!' when both players choose the same option", function () {
    expect(whoWon('rock', 'rock')).toBe('TIE!');
    expect(whoWon('paper', 'paper')).toBe('TIE!');
    expect(whoWon('scissors', 'scissors')).toBe('TIE!');
  });

  test("Should return 'Player 2 wins!' when player 2 wins", function () {
    expect(whoWon('rock', 'paper')).toBe('Player 2 wins!');
    expect(whoWon('paper', 'scissors')).toBe('Player 2 wins!');
    expect(whoWon('scissors', 'rock ')).toBe('Player 2 wins!');
  });

  
});
