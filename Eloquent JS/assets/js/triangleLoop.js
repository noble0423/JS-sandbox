// VARIABLES 
//============================================================================================
let line = "#";


// FUNCTIONS
//============================================================================================
function triangleLoop() {
    console.log(line);
    for (i = 0; i <= 10; i++) {
        console.log(line += "#");
    }
}

// Simplified code
function triangleLoop2() {
    for (let line = "*"; line.length <= 10; line += "*") {
        console.log(line);
    }
}


// MAIN PROCESS
//============================================================================================

$(document).ready(function() {
    $("#test-button").on("click", function() {
        // console.log("clicked");
        triangleLoop();
        triangleLoop2();
    });
});