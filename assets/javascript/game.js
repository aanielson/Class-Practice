//CoronaVirus theme

//create variables
    //wins
var wins = 0;
    //losses
var losses = 0;
    //word
var word = "";
    //letters guessed
var lettersGuessed = "";
    //letters remaining
var lettersRemaining = "";
    //alphabet array
var alphabet = "abcdefghijklmnopqrstuvwxyz"
        //check that pressed keys are letters

//array for words
var coronaVirus = ["tp", "covid", "pandemic", "costco", "sanitizer", "mask", "wipe", "corona", "hysteria", "panic", "clorox", "quarantine"];
    //word variable calls on word array
    //randomize word selection
var wordToGuess = coronaVirus[Math.floor(Math.random)*coronaVirus.length];
    console.log(wordToGuess);
//function to initialize game
    //pick word randomly
    //have reset call on function
    //display blank spaces
    //function for displaying underscores for the word to be guessed

//function to make sure that any key pressed is included in the alphabet
    //compare key pressed to array for words
    //if correct letters then replace underscores
    //if the letter has already been guessed
        //continue? y/n
    //function to display letters guessed and letters remaining
        //against alphabet
        //check keys pressed
    //ensure there are enough remaining guesses
        //continue?y/n

//function to replace empy array with guessed letters
    //fincd location of letters within word
    //replacing letters

