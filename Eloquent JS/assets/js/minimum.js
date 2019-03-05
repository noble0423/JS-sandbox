// VARIABLES 
//============================================================================================



// FUNCTIONS
//============================================================================================
// Takes in 2 arguments and returns the minimum
function minimum (x, y) {

    if (parseInt(x) > parseInt(y)) {
        console.log(y + " is the smaller value.");
    }
    else if (parseInt(x) === parseInt(y)) {
        console.log(x + " and " + y + " are the value -- neither are smaller.");
    }
    else {
        console.log(x + " is the smaller value.");
    }
};


// MAIN PROCESS
//============================================================================================
$(document).ready(function() {
    $("#target-minimum").on("submit", function() {
        // console.log("clicked");
        minimum($("#num1").val(), $("#num2").val());
    });
});