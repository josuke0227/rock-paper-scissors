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

// create a function that decides computer's selection - getComputerSelection.
// Input: none, Output: text
//  create "selections" variable and let it have an array with value "rock", "paper" and "scissors"
//  create "index" variable that random number between 0 - 2 is assigned when the function called
//  return the value of the array in the location of "index".

// create a function that decides the result of the round - playRound().
// Input: text(playerSelection, computerSelection), Output: boolean or null
//  Create rock variable an assign the 1st element of the SELECTION array.
//  Create paper variable an assign the 2nd element of the SELECTION array.
//  Create scissors variable an assign the 3rd element of the SELECTION array.
//  IF player selected "rock"
//   IF computer selected "rock"
//     return null
//   IF computer selected "paper"
//     return false
//   IF computer selected "scissors"
//     return true
//  IF player selected "paper"
//   IF computer selected "rock"
//     return true
//   IF computer selected "paper"
//     return null
//   IF computer selected "scissors"
//     return false
//  IF player selected "scissors"
//   IF computer selected "rock"
//     return false
//   IF computer selected "paper"
//     return true
//   IF computer selected "scissors"
//     return null

// Create a function that call the "playRound" function 5 times - game().
//  Create SELECTIONS variable and assign the array with "rock", "paper", "scissors".
//
//  Initialize isValid with false.
//  Continue loop as long as isValid is false. Inside the loop, change the isValid true IF:
//    Take input from console and assign text value to "playerSelection" variable.
//    Re assign the value of the "playerSelection" variable with lower case letter alphabets.
//    Check the playerSelection's value is valid selection
//    IF playerSelection has valid value, change the isValid to true.
//    ELSE display the message - <selection> is wrong selection. Please enter "Rock", "Paper" or "Scissors".
//
//   Create "computerSelection" and assign the result of "getComputerSelection" function.
//  Create "playerWon" and assign number 0
//  Create "computerWon" and assign number 0
//  Create "youWinMessage" and assign text, "You Win!"
//  Create "drawMessage" and assign text, "Draw"
//  Create "youLoseMessage" and assign text, "You Lose!"
//  Begin with "i" at 0 and add 1 to "i" on each pass until "i" is less than 5
//    Create "result" variable and assign the returned value of "playRound"
//    IF the result of the function is true, then count up the "playerWon" variable.
//    IF the result of the function is false, then count up "computerWon" variable.
//    IF the result of the function is null, then do nothing.
//
//  IF "playerWon" is greater than "computerWon" then return the "youWinMessage".
//  IF "computerWon" is greater than "playerWon" then return the "youLostMessage".
//  ELSE return "drawMessage".

// call the game() function.
