// VARIABLES 
//============================================================================================
var array = [];
var arrayValues = array.values();

// FUNCTIONS
//============================================================================================
function range(start, end, step) {
    

    if (start < end) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    else if (start > end) {
        for (let i = start; i >= end; i -= step) {
            array.push(i);
        }
    }
    return console.log("range() : " + array);
};

function sum(array) {
    let total = 0;

    for (const value of arrayValues) {
        total = total + value;
    }

    return console.log("sum of the stepped array is : " + total);
}


// MAIN PROCESS
//============================================================================================

$(document).ready(function() {
    $("#test-button").on("click", function() {
        // console.log("clicked");
        // range(2, 10);
        sum(range(28, 6, 3));
    });
});