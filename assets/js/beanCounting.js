// VARIABLES 
//============================================================================================
count = 0;


// FUNCTIONS
//============================================================================================
function countChars(string) {
    console.log("Char count ='s " + string.length);
}

function countBs(string, ch) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ch) {
            count++
        }
    }
    console.log(count);
}


// MAIN PROCESS
//============================================================================================
$(document).ready(function() {
    $("#test-button").on("click", function() {
        // console.log("clicked");
        // console.log(("Bagwell, Biggio, Berkman, Bregman".length));
        // countChars("Bagwell, Biggio, Berkman, Bregman");
        countBs("Bagwell, Biggio, Berkman, Bregman", "B");
    });
});