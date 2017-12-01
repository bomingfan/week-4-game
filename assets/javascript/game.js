
$(document).ready(function(){
    
    // Create variables
    var initialScore; 
    var yourScore = 0;
    var crystalScore = [];
    var numCrystals = 4;
    var win = 0;
    var loss = 0;
    
    
    // Function that generate an initial random number min <= x <= max
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // confirm everything works
    // console.log(getRandom(12, 30))
    


    // Reset Function
    function reset() {
        initialScore; 
        yourScore = 0;
        crystalScore = [];
        $("#status").html("");
        $("#yourScore").html("0");
        initialScore = getRandom(19, 120);
        $("#initialScore").html(initialScore);
        for (i=0; i < numCrystals; i++) {
            crystalScore.push(getRandom(1, 12));
        }
        console.log(crystalScore)
    
        // assign the value to each crystal image
        $("#crystal-0").attr("cryvalue", crystalScore[0]);
        $("#crystal-1").attr("cryvalue", crystalScore[1]);
        $("#crystal-2").attr("cryvalue", crystalScore[2]);
        $("#crystal-3").attr("cryvalue", crystalScore[3]);
    }
    
    // The player will be shown a random number between 19-120 at the start of the game.
        initialScore = getRandom(19, 120);
        $("#initialScore").html(initialScore);
    // Randomly assign a value between 1-12 to crystalScore array
    
    for (i=0; i < numCrystals; i++) {
        crystalScore.push(getRandom(1, 12));
    }
    console.log(crystalScore)

    // assign the value to each crystal image
    $("#crystal-0").attr("cryvalue", crystalScore[0]);
    $("#crystal-1").attr("cryvalue", crystalScore[1]);
    $("#crystal-2").attr("cryvalue", crystalScore[2]);
    $("#crystal-3").attr("cryvalue", crystalScore[3]);

    // When the player clicks on a crystal, it will add a specific amount of points to the player's total score
    $("img").on("click", function() {
        // Confirm click works;
        // alert("Hello");
        var crystalValue = $(this).attr("cryvalue");
        crystalValue = parseInt(crystalValue);
        
        // When they do click one, update the player's score counter.
        yourScore += crystalValue;
        $("#yourScore").html(yourScore);

    

    // The player wins if their total score matches the random number from the beginning of the game.
        if (yourScore === initialScore) {
            win++;
            $("#status").html("You Win! Game will be reset in 3 seconds...");
            $("#win").html("Wins: " + win);
            setTimeout(reset, 3000);
        } else if (yourScore > initialScore) {
            loss++;
            $("#status").html("You Loses! Game will be reset in 3 seconds...");
            $("#loss").html("losses: " + loss);
            setTimeout(reset, 3000);
        }

    });
    // The player loses if their score goes above the random number.
    // The game restarts whenever the player wins or loses.
    // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
    // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
    
    
    
    
    
    });