// VARIABLES 
//============================================================================================


// FUNCTIONS
//============================================================================================
function every(array, predicate) {
    for (i = 0; i < array.length; i++) {
        if (!predicate(array[i]))
            return false
    }
    return true
};

function some(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i]))
            return true;
    }
    return false;
};

// MAIN PROCESS
//============================================================================================

$(document).ready(function() {
    $("#test-button").on("click", function() {
        // console.log("clicked");
        console.log(every([NaN, NaN, NaN], isNaN));
        console.log(every([NaN, NaN, 4], isNaN));
        console.log(some([NaN, 3, 4], isNaN));
        console.log(some([2, 3, 4], isNaN));
    });
});