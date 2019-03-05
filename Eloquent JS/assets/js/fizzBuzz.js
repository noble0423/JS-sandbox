// VARIABLES 
//============================================================================================



// FUNCTIONS
//============================================================================================
function fizzBuzz() {
    for (let number = 1; number <= 100; number++) {
        if (number % 5 === 0 && number % 3 === 0) {
            console.log("FizzBuzz");
        }
        
        else if (number % 3 === 0) {
            console.log("fizz");
        }

        else if (number % 5 === 0) {
            console.log("buzz");
        }

        else {
            console.log(number);
        }  
            
    }
}

// Simplified Code
function fizzBuzz2() {
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 === 0) output += "Fizz";
        if (n % 5 === 0) output += "Buzz";
        console.log(output || n);
    }
}

// MAIN PROCESS
//============================================================================================
$(document).ready(function() {
    $("#test-button").on("click", function() {
        // console.log("clicked");
        // fizzBuzz();
        fizzBuzz2();
    });
});