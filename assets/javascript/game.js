
$(document).ready(function(){
    
    // Create variables
    var initialScore; 
    var yourScore = 0;
    var crystalScore = [];
    var numCrystals = 4;
    
    
    // Function that generate an initial random number min <= x <= max
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // confirm everything works
    console.log(getRandom(12, 30))
    
    
    // The player will be shown a random number between 19-120 at the start of the game.
    var initialScore = getRandom(19, 120)
    $("#initialScore").html(initialScore);

    
    // Randomly assign a value between 1-12 to crystalScore array
    
    for (i=0; i < numCrystals; i++) {
        crystalScore.push(getRandom(1, 12));
    }
    console.log(crystalScore)

    // assign the value to each crystal image




    // When the player clicks on a crystal, it will add a specific amount of points to the player's total score
    

    
    // When they do click one, update the player's score counter.
    // The player wins if their total score matches the random number from the beginning of the game.
    // The player loses if their score goes above the random number.
    // The game restarts whenever the player wins or loses.
    // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
    // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
    
    
    
    
    
    });