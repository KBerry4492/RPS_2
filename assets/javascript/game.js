$(document).ready(function(){

// VARIABLES

// wins #
// losses #
// lettersGuessed []
// wordBank []
// guessesLeft #
// wordBlanks []
// pickedWord ""

// FUNCTIONS

//newGame
	// on start
	// reset guessesLeft
	// empty lettersGuessed  (array and html)
	// empty wordBlanks

	//change pickedWord (using Math.floor(Math.random() * array.length))
	// split pickedWord into an array (array.split(""))
	   // splits word and creates array from each character
	// loop over pickedWord[] and create "_" for wordBlanks

	// wordBlanks.join(" ") and write to DOM

//letterPressed(valOfLet){

	// run for loop checking valOfLet against pickedWord[]
		// if valOfLet === pickedWord[i] 
			// its a match, wordBlanks[i] = valOfLet;
		// else
			// guessesLeft--;
			// if guessesLeft = 0
				// write to DOM Game Over and show word
				
// }

// on new game button click

// EVENT LISTNERS






});