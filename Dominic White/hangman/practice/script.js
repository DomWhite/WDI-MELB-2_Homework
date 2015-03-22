var wordList = ['ruby', "rails", "javascript", "devise"];

var secretWord = "";
var blanks;
var splitToLetters;
var guessedLetters = [];

function setSecretWord () {
	secretWord = _.sample(wordList);
}

function splitToLetters(string) {
	splitToLetters = string.split('');
	console.log(splitToLetters);
	// blanks = turnToBlank(splitToLetters);
	// console.log(blanks);
}

function turnToBlank(secretLetters) {
	_.each(secretLetters, function(letters){
			letters += "_"
		});
	console.log(letters);
}

// function turnToBlank(secretLetters) {
// 	var result = '';
// 	for (var i = 0; i < secretLetters.length; i++) {
// 			result += "_ ";
// 	};
// 	console.log(result);
// }


window.onload = function() {
  var input = document.getElementById("letterField");		
  input.addEventListener("keyup", function() {
  var letter = document.getElementById("letterField").value;
  	guessedLetters.push(letter); 
    console.log(guessedLetters);
    input.value = '';
    });
  }

  function takeLetter() {
  		input = document.getElementById("letterField").value;
  		console.log(input);
  		guessedLetters.push(input);
  }

// window.onload = function() {
//   var submitBtn = document.getElementById("submitButton");
//   submitBtn.addEventListener("click", takeLetter);
// }


