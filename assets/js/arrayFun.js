// VARIABLES 
//============================================================================================
var array = [];
var arrayValues = array.values();
// var revArray = [];

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
    return console.log("var array : [" + array + "]");
};

function sum(array) {
    let total = 0;

    for (const value of arrayValues) {
        total = total + value;
    }

    return console.log("sum of the stepped array is : " + total);
};

function reverseArray() {
    let revArray = [];
    
    for (const num of arrayValues) {
        revArray.unshift(num);
    }
    // for (let i = 0; i < array.length; i++) {
    //     revArray.unshift(i);
    // }

    return console.log("reversed array : [" + revArray + "]");
};


// MAIN PROCESS
//============================================================================================

$(document).ready(function() {
    $("#test-button").on("click", function() {
        // console.log("clicked");
        // range(2, 10);
        // sum(range(28, 6, 3));
        // reverseArray(range(5, 15, 1));
        reverseArray(range(120, 5, 7));
    });
});