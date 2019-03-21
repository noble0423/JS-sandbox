// VARIABLES
////////////////////////////////////////////////////////////////////////////

let headsCount    = 0;
let tailsCount    = 0;
let wins          = 0;
let losses        = 0;



// FUNCTIONS
////////////////////////////////////////////////////////////////////////////
const flipThatCoin = function(result) {

    const randomNumber = Math.round(Math.random() * 1);
    console.log("random num: " + randomNumber);

    if (randomNumber === 0) {
        $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg'>");
    }

    else {
        $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg'>");
    }

    // Compare
    if (result === randomNumber) {
        wins++;
        $("#win-lose").html("Winner!");
        $("#wins").html(wins);
    }

    else {
        losses++;
        $("#win-lose").html("You Lose!");
        $("#losses").html(losses);
    }

}


// MAIN PROCESS
////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    $("#heads").on("click", function() {
        headsCount++;
        $("#heads-chosen").text(headsCount);
        $("#guess").html("<b>Heads</b>");
        flipThatCoin(0);
    });

    $("#tails").on("click", function() {
        tailsCount++;
        $("#tails-chosen").text(tailsCount);
        $("#guess").html("<b>Tails</b>");
        flipThatCoin(1);
    });
    
}); 
    




