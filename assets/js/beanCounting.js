// VARIABLES 
//============================================================================================
count = 0;


// FUNCTIONS
//============================================================================================
function countChars(string) {
    console.log("The number of characters in " + string + " is " + string.length + ".");
}

function countBs(string, ch) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ch) {
            count++
        }
    }
    console.log("The number of times that " + ch + " appears is " + count + ".");
}


// MAIN PROCESS
//============================================================================================
$(document).ready(function() {
    $("#target-beanCounting").on("submit", function() {
        // console.log("clicked");
        countChars($("#beanCountingString").val().trim());
        countBs($("#beanCountingString").val().trim(), $("#beanCountingChar").val().trim());
    });
});