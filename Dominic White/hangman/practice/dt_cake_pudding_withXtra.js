var game = {

    MAX_GUESSES: 8,
    guessedLetters: [],
    secret: [],
    puzzle: [],

    wordList: ['pudding', 'cake', 'hotdog', 'cakepudding'],

    init: function() {
        this.setSecret();
        this.setPuzzle();
        this.MAX_GUESSES = 8;

    },

    setSecret: function() {
        this.secret = _.sample(this.wordList).split('');
    },

    setPuzzle: function() {
        game.puzzle = Array(game.secret.length + 1).join('_').split('');
    },

    guessesLeft: function() {
        return game.MAX_GUESSES - game.guessedLetters.length;
    },

    guess: function(letter) {
        this.guessedLetters.push(letter);

        //work out the puzzle display
        //secret = ["c","a","k","e"]
        //puzzle = ['_','_','_','_'] => ['_','_','k','_']

        _.each(this.secret, function(secretLetter, index) {
            if (secretLetter === letter) {
                game.puzzle[index] = letter; //this. cannot be used due to underscore changing the contexts
                game.guessedLetters.pop(); //remove correct letter from array
                document.getElementById("wordString").innerHTML = game.puzzle;
            }
            document.getElementById("guessedLetters").innerHTML = game.guessedLetters;
        })
        // game.guessesLeft();
    },
    giveUp: function() {

    },

    resetGame: function() {

    }
}

//window.onload is the event of the page loading
window.onload = function() {
    game.init();

    var wordString = document.getElementById('wordString');
    wordString.innerHTML = game.puzzle; //game.puzzle array is forced to be a string because it is written to the page

    var guessesLeft = document.getElementById('guessesLeft');
    guessesLeft.innerHTML = game.guessesLeft();

    //var letterField = document.getElementById('letterField');

    document.getElementById('letterField').addEventListener('keyup', function(event) {
        //get the value of the input box when user press enter
        if (event.keyCode === 13) {
            var inputValue = document.getElementById('letterField').value //this.value; 		
                //make a guess
            game.guess(inputValue);  //pushes to game.guess on approx line 29
            this.value = '';

            //update screen 
            if (game.MAX_GUESSES > 0) {
                document.getElementById("guessesLeft").innerHTML = game.guessesLeft();
            } else {}
        };
    });

    var resetBtn = document.getElementById("resetButton");
    resetBtn.addEventListener("click", game.resetGame);

    var giveUpBtn = document.getElementById("giveUpButton");
    giveUpBtn.addEventListener("click", game.giveUp);
}