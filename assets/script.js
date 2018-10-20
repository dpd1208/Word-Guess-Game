var gameWords = [
      ["P", "I", "O", "N", "E", "E", "R"],
      ["F","O","R","D","I","N","G"],
      ["C","H","O","L","E","R","A"],
      ["D","Y","S","E","N","T","E","R","Y"],
      ["W","A","G","O","N"],
      ["O","R","E","G","O","N"]
    ]
    var random = Math.floor((Math.random()*(gameWords.length-1))); 
    
    var gameWord = gameWords[random]; // the game word will be chosen from gameWords array
    var wordArray = new Array(gameWord.length);
    var wrongGuesses = 0;
    
    // the letters in the game word are converted to underscores
    for (var i = 0; i < wordArray.length; i++){
        wordArray[i] = "_ ";
    }
    
    // shows the game word as underscores
    function showWordArray(){
        for (var i = 0; i < wordArray.length; i++){
        var guessSection = document.getElementById("guessSection"); // shows the game word in the #worArray <p> element
        var letters = document.createTextNode(wordArray[i]); 
        guessSection.appendChild(letters);
        }
    }
    
    //checks if the the guessed letter matches one or more of the letters in the game word
    var checkEntry = function(){
        var f = document.inputForm; 
        var b = f.elements["letter"]; 
        var entry = b.value; // the letter provided by the user
        entry = entry.toUpperCase();
        for (var i = 0; i < gameWord.length; i++){
            if(gameWord[i] === entry){
                wordArray[i] = entry + " ";
                var correctGuess = true;
            }
        b.value = "";
        }
        
        //deletes the guessfield and replaces it with the new one
        var guessSection = document.getElementById("guessSection");
        guessSection.innerHTML=""; 
        showWordArray();
        
        // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
        if(!correctGuess){
            var guessedLetters = document.getElementById("guessedLetters");
            var letters = document.createTextNode(" " + entry);
            guessedLetters.appendChild(letters); 
            wrongGuesses++;
            var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + wrongGuesses + ".png";
        }
        
        //checks if all letters have been found
        var win = true;
        for (var i = 0; i < wordArray.length; i++){
            if(wordArray[i] === "_ "){
                win = false;
            }
        }
        if(win){
            window.alert("Winner!");
        }
        
        //once you got six wrong letters, you lose
        if(wrongGuesses === 6){
            window.alert("Uh...I guess you're dead now.");
        }
    }
    
    function init(){
        showWordArray();
    }
    
    window.onload = init;