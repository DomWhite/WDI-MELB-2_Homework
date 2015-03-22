var game = {

	MAX_GUESSES: 8,
	guessedLetters: [],
	secretWord: [],
	puzzle:[],

	wordList: ['pudding','cake', 'hotdog', 'calepudding'],

	init: function() {
			game.setSecret();
			game.setPuzzle();
	},

	setSecret: function() {
			this.secretWord = _.sample(this.wordList).split('');
	},

	setPuzzle:  function() {
		game.puzzle = Array(game.secret.length+1).join('_').split(''); 
	},

	guessesLeft: function () {
		return game.MAX_GUESSES - game.guessedLetters.length;
	},
}

//window.onload is the event of the page loading
window.onload = function () {
	game.init();

	var wordString = document.getElementById('wordString');
	wordString.innerHTML = game.puzzle;   			//game.puzzle array is forced to be a string because it is written to the page

	var guessesLeft = document.getElementById('guessesLeft');
	guessesLeft.innerHTML = game.guessesLeft();

	document.getElementById('letterField').addEventListener('keyup', function(event) {

	});


}