// VARIABLES 
//============================================================================================
var arrays = [[1, 2, 3], [4, 5], [6]];
var numbers = [1, 2, 3, 4,];

// FUNCTIONS
//============================================================================================
// reduce practice (remember, you have to pass the reduce method a function)
function reducePractice() {
    console.log(numbers.reduce(
        function reducer(accumulator, currentValue) {
            return accumulator + currentValue;
        }
    ));
    // below is shorter and cleaner, but a little harder for me to read at this point
    // console.log(numbers.reduce((accumulator, currentValue) => accumulator + currentValue));
};


// use reduce and concat to flatten an array of arrays into a single array that has all the elements of the input array
function flatten() {
    console.log(arrays);
    console.log(arrays.reduce((accumulator, currentValue) => (accumulator + currentValue)));
    console.log(arrays.reduce((accumulator, currentValue) => (accumulator.concat(currentValue))));
    // console.log(arrays.reduce((flat, current) => flat.concat(current)));
};

// MAIN PROCESS
//============================================================================================

$(document).ready(function() {
    $("#test-button").on("click", function() {
        // console.log("clicked");
        // reducePractice();
        flatten();
    });
});