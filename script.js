let playerWon = 0;
let computerWon = 0;
const SELECTIONS = ['rock', 'paper', 'scissors'];

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

function initEventListeners() {
  const selections = document.querySelectorAll('.selections .selection');
  selections.forEach((selection) => {
    selection.addEventListener('click', handleSelectionClick);
  });
}

/**
 *
 * @param {String} elementId
 * @param {String} text
 * @returns {void}
 */
function addTextContentToElement(elementId, text) {
  const element = document.getElementById(elementId);
  element.innerText = text;
}

/**
 *
 * @param {String} elementId
 * @param {Boolean} reset
 * @returns {void}
 */
function highlightWinner(elementId, reset = false) {
  const element = document.getElementById(elementId);
  if (reset === true) {
    element.classList.remove('won');
  } else element.classList.add('won');
}

/**
 * @param {String} target
 * @param {Number} value
 * @returns {void}
 */
function updateCounter(target, value) {
  const { children } = document.getElementById(target);
  for (let count of children) {
    const countNumber = count.getAttribute('data-count');
    // Round counters are not image
    if (count.tagName === 'SPAN' && +countNumber === value) {
      count.classList.add('filled');
    }
    // Trophy counter is SVG image
    if (count.tagName === 'IMG' && +countNumber === value) {
      count.src = './images/trophy.svg';
    }
  }
}

/**
 *
 * @param {String} target
 */
function resetCounter(target) {
  const { children } = document.getElementById(target);
  for (let count of children) {
    if (count.tagName === 'IMG') {
      count.src = './images/trophy-outlined.svg';
    } else count.classList.remove('filled');
  }
}

function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function handleSelectionClick({ target }) {
  const selection = target.getAttribute('id');
  game(selection);
}

function init() {
  initEventListeners();
}

function game(playerSelection) {
  if (playerWon === 5 || computerWon === 5) {
    (playerWon = 0), (computerWon = 0);
    resetCounter('player-counter');
    resetCounter('computer-counter');
  }

  // const computerSelection = 'rock';
  const computerSelection = getComputerSelection(SELECTIONS);
  const roundResult = playRound(playerSelection, computerSelection, SELECTIONS);

  addTextContentToElement('selection-computer', computerSelection);
  addTextContentToElement('selection-player', playerSelection);

  let resultText = '';
  if (roundResult === true) {
    resultText = 'You Win! :)';
    updateCounter('player-counter', ++playerWon);
    highlightWinner('selection-player');
    highlightWinner('selection-computer', true);
  } else if (roundResult === false) {
    resultText = 'You Loose... :(';
    updateCounter('computer-counter', ++computerWon);
    highlightWinner('selection-computer');
    highlightWinner('selection-player', true);
  } else {
    resultText = 'Draw :|';
    highlightWinner('selection-computer', true);
    highlightWinner('selection-player', true);
  }

  addTextContentToElement('round-result-panel', resultText);

  if (playerWon === 5) {
    showConfetti();
  }
}

init();
