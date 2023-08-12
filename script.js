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
 *
 * @param {Integer} rounds
 * @param {Array<String>} selections
 * @returns {String}
 */
function getPlayerSelection(rounds, selections) {
  let selection;
  while (true) {
    selection = prompt(
      `Please enter your selection. ${rounds} out of 5 rounds left.`
    );
    if (selection === null) {
      alert('Thanks for Playing! \nSee Ya!');
      return null;
    }
    if (selection === '') {
      alert('Please enter your selection.');
      continue;
    }
    selection = selection.toLocaleLowerCase().trim();
    if (selections.indexOf(selection) >= 0) {
      return selection;
    } else {
      alert(
        `Oops, "${selection}" does not seem like to be valid selection...\n Please choose from "Rock", "Paper" or "Scissors" ;)`
      );
    }
  }
}

/**
 * Main method.
 */
function game() {
  const SELECTIONS = ['rock', 'paper', 'scissors'];

  let playerWon = 0;
  let computerWon = 0;
  while (true) {
    const playerSelection = getPlayerSelection(rounds, SELECTIONS);
    if (playerSelection === null) {
      return;
    }
    const computerSelection = getComputerSelection(SELECTIONS);
    const result = playRound(playerSelection, computerSelection, SELECTIONS);
    const combinationMessage = `You chose "${playerSelection}" and computer chose "${computerSelection}"`;
    if (result === true) {
      alert(`You win! :) \n${combinationMessage}`);
      playerWon++;
    } else if (result === false) {
      computerWon++;
      alert(`You lose... :( \n${combinationMessage}`);
    } else {
      alert(`Draw :| \n${combinationMessage}`);
    }
  }

  if (didDraw(playerWon, computerWon)) {
    alert(getGameOverMessage('draw', playerWon));
  } else if (didPlayerWon(playerWon, computerWon)) {
    alert(getGameOverMessage('win', playerWon));
  } else {
    alert(getGameOverMessage('loose', playerWon));
  }
}

game();

//User interactivity
