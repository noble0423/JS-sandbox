// VARIABLES 
//============================================================================================



// FUNCTIONS
//============================================================================================

// My way
function isEven(x) {
    if (x % 2 === 0) {
        console.log("The number " + $("#isEvenNum1").val().trim() + " is even. " + true);
    }
    else
        console.log("The number " + $("#isEvenNum1").val().trim() + " is even. " + false);
};

// Recursive way
function isEvenRecursive(n) {
    if (n === 0) {
        return true;
    }
    else if (n === 1) {
        return false;
    }
    else if (n < 0) {
        return isEvenRecursive(-n);
    }
    else 
        return isEvenRecursive(n - 2);
};

// console.log("isEvenRecursive(50) " + isEvenRecursive(50));
// console.log("isEvenRecursive(75)  " + isEvenRecursive(75));
// console.log("isEvenRecursive(-1) " + isEvenRecursive(-1));


// MAIN PROCESS
//============================================================================================
$(document).ready(function() {
    $("#target-isEven").on("submit", function() {
        // console.log("clicked");
        isEven($("#isEvenNum1").val().trim());
    });
});