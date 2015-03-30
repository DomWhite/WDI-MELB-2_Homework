var word = {
    secretWord: "",
    wordList: ['ruby', 'rails', 'javascript', 'devise', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'array', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],
    puzzle: [],

    // Selects a random word from the word list sets the secret word
    setSecretWord: function() {
        this.secretWord = _.sample(word.wordList).split(''); //can be written as game.secretWord = _.sample(word.wordList);
        console.log(word.secretWord);
    },

    setPuzzle: function() {
        word.puzzle = Array(word.secretWord.length + 1).join('_').split('');
    },
};


var player = {
    MAX_GUESSES: 8,
    guessedLetters: [],

    // Takes a new letter as input and updates the game
    makeGuess: function(letter) {
        this.guessedLetters.push(letter);

        _.each(word.secretWord, function(secretLetter, index) {
            if (secretLetter === letter) {
                word.puzzle[index] = letter; //this. cannot be used due to underscore changing the context
                player.guessedLetters.pop(); //remove correct letter from array
                document.getElementById("wordString").innerHTML = word.puzzle;
            }
            document.getElementById("guessedLetters").innerHTML = player.guessedLetters;
        })
    },

    // Check if the player has won and end the game if so
    checkWin: function() {
        if (document.getElementById("wordString").innerHTML === Array(word.secretWord).join()) {
            // document.getElementById("gameControlArea").style.backgroundColor = "green";
            document.getElementById("winOrLose").innerHTML = "YOU LIVE!";
        }
    },

    // Check if the player has lost and end the game if so
    checkLose: function() {
        if (parseInt(document.getElementById("guessesLeft").innerHTML, 10) === 0) {
            document.getElementById("winOrLose").innerHTML = "YOU DEAD!";
            setTimeout(function() {
                game.resetGame()
            }, 10000);
        }
    },
};

var game = {

    // Resets the game.
    resetGame: function() {
        word.secretWord = "";
        word.puzzle = [];
        player.guessedLetters = [];
        word.setSecretWord();
        word.setPuzzle();
        player.MAX_GUESSES = 8;
        clearCanvas();

        document.getElementById("guessesLeft").innerHTML = player.MAX_GUESSES;
        document.getElementById("guessedLetters").innerHTML = player.guessedLetters;
        document.getElementById("winOrLose").innerHTML = "Just Hanging Around...";
        document.getElementById("wordString").innerHTML = word.puzzle;
    },

    // Reveals the answer to the secret word and ends the game
    giveUp: function() {
        document.getElementById("wordString").innerHTML = word.secretWord;
        setTimeout(function() {
            game.resetGame()
        }, 10000);
        document.getElementById("winOrLose").innerHTML = "YOU DEAD!";
    },

    guessesLeft: function() {
        return player.MAX_GUESSES - player.guessedLetters.length;
    }
};

/*
DRAW HANGMAN ********************************************/

var drawHangMan = {
    ground: function() {
        hangGame.fillRect(30, 450, 350, 20)
    },
    /*ground*/

    upright: function() {
        hangGame.fillRect(60, 90, 20, 370)
    },
    /*upright*/


    horizontal: function() {
        hangGame.fillRect(60, 90, 200, 20)
    },
    /*horizontal*/

    noose: function() {
        hangGame.fillRect(220, 110, 10, 40)
    },
    /*noose*/

    head: function() {
        hangGame.beginPath();
        hangGame.arc(225, 170, 30, 0, 2 * Math.PI); /*head*/
        hangGame.fillStyle = "white";
        hangGame.fill();
        hangGame.stroke();
    },
    bod: function() {
        hangGame.fillRect(220, 200, 10, 100)
    },
    /*body*/

    arms: function() {
        hangGame.beginPath();
        hangGame.moveTo(190, 240);
        hangGame.lineTo(240, 180); /*Left Arm*/
        hangGame.lineWidth = 10;
        hangGame.strokeStyle = "white";
        hangGame.fill();
        hangGame.stroke();

        hangGame.beginPath();
        hangGame.moveTo(225, 200);
        hangGame.lineTo(260, 240); /*Right Arm*/
        hangGame.lineWidth = 10;
        hangGame.strokeStyle = "white";
        hangGame.fill();
        hangGame.stroke();
    },
    legs: function() {
        hangGame.beginPath();
        hangGame.moveTo(195, 330);
        hangGame.lineTo(225, 290);
        hangGame.lineWidth = 10; /*Left Leg*/
        hangGame.strokeStyle = "white";
        hangGame.fill();
        hangGame.stroke();

        hangGame.beginPath();
        hangGame.moveTo(225, 290);
        hangGame.lineTo(255, 330); /*Right Leg*/
        hangGame.lineWidth = 10;
        hangGame.strokeStyle = "white";
        hangGame.fill();
        hangGame.stroke();
    },
}

/********************************************************/

/*
DRAW SWITCH ********************************************/
function runSwitch() {
    switch (game.guessesLeft()) {
        case 7:
            drawHangMan.ground();
            break;
        case 6:
            drawHangMan.upright();
            break;
        case 5:
            drawHangMan.horizontal();
            break;
        case 4:
            drawHangMan.noose();
            break;
        case 3:
            drawHangMan.head();
            break;
        case 2:
            drawHangMan.bod();
            break;
        case 1:
            drawHangMan.arms();
            break;
        case 0:
            drawHangMan.legs();
            break;
        default:
            console.log("It's not working");
    }
}

/********************************************************/

/*
CLEAR CANVAS ********************************************/
function clearCanvas() {
    hangGame.clearRect(0, 0, hangGame.canvas.width, hangGame.canvas.height)
    hangGame.beginPath();
}

/********************************************************/

window.onload = function() {
    // Start a new game
    game.resetGame();

    // Add event listener to the letter input field to grab letters that are guessed

    var wordString = document.getElementById('wordString');
    wordString.innerHTML = word.puzzle;

    var guessesLeft = document.getElementById('guessesLeft');
    // guessesLeft.innerHTML = game.guessesLeft();
    guessesLeft.innerHTML = player.MAX_GUESSES;

    document.getElementById('letterField').addEventListener('keyup', function(event) {
        //get the value of the input box when user press enter
        if (event.keyCode === 13) {
            var inputValue = document.getElementById('letterField').value //this.value;     
                //make a guess
            player.makeGuess(inputValue);
            this.value = '';

            //update screen 
            if (parseInt(document.getElementById("guessesLeft").innerHTML, 10) > 0) {
                document.getElementById("guessesLeft").innerHTML = game.guessesLeft();
                player.checkWin();
                runSwitch();
                player.checkLose();
            } //else {
            //   player.checkLose();
            // }
        };
    });

    // Add event listener to the reset button to reset the game when clicked     
    var resetBtn = document.getElementById("resetButton");
    resetBtn.addEventListener("click", game.resetGame);

    // Add event listener to the give up button to give up when clicked
    var giveUpBtn = document.getElementById("giveUpButton");
    giveUpBtn.addEventListener("click", game.giveUp);
};

var hangGame = document.getElementById("hangGame").getContext("2d");
hangGame.fillStyle = "white";