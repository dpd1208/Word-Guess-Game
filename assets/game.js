var gameOn = false;
window.onkeyup = function(e) {
    
var gameWords = [   // set up game words as an array of their letters
      ["P", "I", "O", "N", "E", "E", "R"],
      ["F","O","R","D","I","N","G"],
      ["C","H","O","L","E","R","A"],
      ["D","Y","S","E","N","T","E","R","Y"],
      ["W","A","G","O","N"],
      ["O","R","E","G","O","N"]
    ]
    var random = Math.floor((Math.random()*(gameWords.length))); // set a random word to the random variable 
    
    var gameWord = gameWords[random]; // the game word will be chosen from gameWords array
    var wordArray = new Array(gameWord.length); // an array is created under wordArray variable set to the length of the random game word
    var wrongGuesses = 0; // creates variable to hold # of wrong guesses
    
    // the letters in the game word are converted to underscores
    for (var i = 0; i < wordArray.length; i++){
        wordArray[i] = "_ ";
    }
    
    // shows the game word as underscores in the document
    function showWordArray(){
        for (var i = 0; i < wordArray.length; i++){
        var guessSection = document.getElementById("guessSection"); // creates a variable to store underscores in the guessSection div
        var letters = document.createTextNode(wordArray[i]); //creates a variable to replace underscores as letters are guessed correctly
        guessSection.appendChild(letters);
        }
}
    
    //checks if the the guessed letter matches one or more of the letters in the game word
        //while (gameOn = true) {     
        window.onkeyup = function(event) { 
            var guess = event.key;
            var entry = guess.toUpperCase(); 
            //var entry = b; // the letter provided by the user
           

        for (var i = 0; i < gameWord.length; i++){
            if(gameWord[i] === entry){
                wordArray[i] = entry + " ";
                var correctGuess = true;
            }
       guess = "";
       gameOn = true;
        }
        
        //deletes the applicable underscore and replaces it with the new one
        var guessSection = document.getElementById("guessSection");
        guessSection.innerHTML=""; 
        showWordArray();
        
        // if a guessed letter is not in the word, the letter will be put on the "guessed letters"-list
        if(!correctGuess){
            var guessedLetters = document.getElementById("guessedLetters");
            var letters = document.createTextNode(" " + entry);
            guessedLetters.appendChild(letters); 
            wrongGuesses++; // wrongGuesses variable set at begining is increases
        }
        
        //checks if all letters have been found
        var win = true;
        for (var i = 0; i < wordArray.length; i++){
            if(wordArray[i] === "_ "){
                win = false;
            }
        }
        if(win){
            window.alert("You made it to Oregon!");
        }
    
        
        //once you got six wrong letters, you lose
        if(wrongGuesses === 6){
            window.alert("You died of typhoid fever");
            gameOn = false;
            location.reload();
            
        }
    }
    function init(){
        showWordArray();
    }
}