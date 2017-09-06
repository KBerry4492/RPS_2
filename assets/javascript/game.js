$(document).ready(function(){


var gameInfo = {
	wins: 0,
	losses: 0,
	lettersGuessed: [],
	wordBank: ["a herring", "deadly peril", "caerbannog", "knights who say ni", "black knight", "tim the enchanter", "king arthur", "holy grail", "castle anthrax", "camelot"],
	wordBlanks: [],
	guessesLeft: 10,
	pickedWord:"",
	pickedWordArray: [],
	guessedWordArray: [],
	alphabet:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

	newGame: function(){
		this.lettersGuessed =  [];
		this.wordBlanks =  [];
		this.guessesLeft =  10;
		$(".btn-div").empty();

		

		$("#wins-div").text("Wins: " + this.wins);
		$("#losses-div").text("Losses: " + this.losses);
		$("#blank-spaces").text("Word Hint: ");
		$("#guesses-div").text("Guesses Left: "+ this.guessesLeft);
		$("#letters-guessed").text("Letters Guessed: ");
		
		for (var j = 0; j < gameInfo.alphabet.length; j++) {
			
			var letBtn = $("<Button>");
			letBtn.attr("class", "letter-btn btn btn-info");
			letBtn.attr("data-value", gameInfo.alphabet[j]);
			letBtn.text(gameInfo.alphabet[j]);
			$(".btn-div").append(letBtn);
		}


		this.pickedWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		console.log(this.pickedWord)
		this.pickedWordArray = this.pickedWord.split("");

		for (var i = 0; i < this.pickedWordArray.length; i++) {
			if (this.pickedWordArray[i] != " "){
				this.wordBlanks[i] = "_";
			}
			else{
				this.wordBlanks[i] = "&nbsp;"
			}
		}

		console.log(this.wordBlanks.join(" ")); 
		$("#blank-spaces").append(this.wordBlanks.join(" "));
	},

	letterPressed: function(btnVal){
		console.log(btnVal)
		for (var i = 0; i < this.pickedWordArray.length; i++) {
			if (btnVal === this.pickedWordArray[i]) {
				console.log("Yup");
				this.wordBlanks[i] = btnVal;
			} 

			else{
				console.log("Not in array");
			}
		}
	},
}

gameInfo.newGame();


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

// EVENT LISTENERS


$(document).on("click", "#new-game", function(){
	gameInfo.newGame();
});
// New Game Button
	// run newGame()


$(document).on("click", ".letter-btn", function(event){

	if (gameInfo.guessesLeft != 0) {
		gameInfo.letterPressed($(this).attr("data-value"));
	}

	else{
		console.log("Woops?");
	}
});
//on document.on(keyup) event
	// $(document).on("keyup" function(event))
	// console.log(event.value)
	
	//var keyVal = event.value

	// check the game isnt over

	// check that the key pressed is a letter 

	// check if the key was pressed already
	// indexOf[-1]
		// if not push to array
		// call letterPressed(keyVal)

	// else let them know they guessed it already





});