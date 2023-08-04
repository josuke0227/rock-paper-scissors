/**
 * Rock paper scissors requirements
 * This game is to be played against the computer.
 * Selections: "Rock", "Paper", "Scissors"
 * There is only single round
 * The player get the result of the game with the text like:
 *   "You Lose! Paper beats Rock"
 * The player enters the selection as text.
 *  text should be case-insensitive.
 *
 */

/**
 *
 * @param {Array<String>} selections
 * @returns {String}
 */
function getComputerSelection(selections) {
  const index = getRandomInt(selections.length);
  return selections[index];
}

/**
 *
 * @param {Integer} max
 * @returns {Integer}
 * range: greater than or equal to 0 or smaller than max.
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 *
 * @param {String} playerSelection
 * @param {String} computerSelection
 * @param {Array<String>} computerSelection
 * @returns {Boolean || null}
 */
function playRound(playerSelection, computerSelection, selections) {
  const [rock, paper, scissors] = selections;

  if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper && computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    return true;
  }

  if (playerSelection === computerSelection) {
    return null;
  }

  return false;
}

/**
 *
 * @param {Integer} playerScore
 * @param {Integer} computerScore
 * @returns {Boolean}
 */
function didPlayerWon(playerScore, computerScore) {
  return playerScore > computerScore;
}
/**
 *
 * @param {Integer} playerScore
 * @param {Integer} computerScore
 * @returns {Boolean}
 */
function didDraw(playerScore, computerScore) {
  return playerScore === computerScore;
}

/**
 *
 * @param {String} result
 * @param {Integer} playerScore
 * @returns {String}
 */
function getGameOverMessage(result, playerScore) {
  const tryAgainMessage = '\nGame Over! Refresh this page to try again! :)';
  const score = `\nYou won ${playerScore} ${
    playerScore > 1 ? 'times' : 'time'
  }.`;
  const youWinMessage = 'You Win!' + score + tryAgainMessage;
  const drawMessage = 'Draw' + tryAgainMessage;
  const youLooseMessage = 'You Lose... :(' + score + tryAgainMessage;
  const message = {
    win: youWinMessage,
    loose: youLooseMessage,
    draw: drawMessage,
  };
  return message[result];
}

/**
 * Main method.
 */
function game() {
  const SELECTIONS = ['rock', 'paper', 'scissors'];

  let playerWon = 0;
  let computerWon = 0;
  let rounds = 5;
  while (0 < rounds) {
    let playerSelection;
    while (true) {
      playerSelection = prompt(
        `Please enter your selection. ${rounds} out of 5 rounds left.`
      );
      if (playerSelection === null) {
        alert('Thanks for Playing! \nSee Ya!');
        return;
      }
      if (playerSelection === '') {
        alert('Please enter your selection.');
        continue;
      }
      playerSelection = playerSelection.toLocaleLowerCase().trim();
      if (SELECTIONS.indexOf(playerSelection) >= 0) {
        break;
      } else {
        alert(
          `Oops, "${playerSelection}" does not seem like to be valid selection...\n Please choose from "Rock", "Paper" or "Scissors" ;)`
        );
      }
    }
    const computerSelection = getComputerSelection(SELECTIONS);
    const result = playRound(playerSelection, computerSelection, SELECTIONS);
    if (result === true) {
      alert('You win! :)');
      playerWon++;
    } else if (result === false) {
      computerWon++;
      alert('You lose... :(');
    } else {
      alert('Draw :|');
    }
    rounds--;
  }

  if (didDraw(playerWon, computerWon)) {
    alert(getGameOverMessage('draw', playerWon));
  } else if (didPlayerWon(playerWon, computerWon)) {
    alert(getGameOverMessage('win', playerWon));
  } else {
    alert(getGameOverMessage('loose', playerWon));
  }
}

// call the game() function.
game();
