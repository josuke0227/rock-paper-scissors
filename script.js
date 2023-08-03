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

// create a function that decides the result of the round - playRound.
// Input: text(playerSelection, computerSelection), Output: boolean or null
// IF player selected "rock"
//  IF computer selected "rock"
//    return null
//  IF computer selected "paper"
//    return false
//  IF computer selected "scissors"
//    return true
// IF player selected "paper"
//  IF computer selected "rock"
//    return true
//  IF computer selected "paper"
//    return null
//  IF computer selected "scissors"
//    return false
// IF player selected "scissors"
//  IF computer selected "rock"
//    return false
//  IF computer selected "paper"
//    return true
//  IF computer selected "scissors"
//    return null

// Create a function that call the "playRound" function 5 times - game().
// Create "playerSelection" and assign text that is convert into lower text to it.
// Create "computerSelection" and assign the result of "getComputerSelection" function.
// Create "playerWon" and assign number 0
// Create "computerWon" and assign number 0
// Create "youWinMessage" and assign text, "You Win!"
// Create "drawMessage" and assign text, "Draw"
// Create "youLoseMessage" and assign text, "You Lose!"
// Begin with "i" at 0 and add 1 to "i" on each pass until "i" is less than 5
//  Create "result" variable and assign the returned value of "playRound"
//  IF the result of the function is true, then count up the "playerWon" variable.
//  IF the result of the function is false, then count up "computerWon" variable.
//  IF the result of the function is null, then do nothing.
//IF "playerWon" is greater than "computerWon" then return the "youWinMessage".
//IF "computerWon" is greater than "playerWon" then return the "youLostMessage".
//ELSE return "drawMessage".

// take an input from console and store the value as playerSelection.
// convert the input to the lowercase letter and trim white spaces if any.
// call the game() function.
