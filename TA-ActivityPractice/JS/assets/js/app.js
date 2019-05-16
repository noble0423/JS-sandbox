// alert("JS pg is linked");

// Pizza Variables Activity
    // var name = "Ryan";
    // var pizzaCount = 7;
    // var isHungry = true;
    // var totalCost = pizzaCount * 5.00;

    // alert("Welcome: " + name);

    // alert("Pizzas cost $5 each");

    // alert("Your total is: $" + totalCost);

    // alert("Still hungry: " + isHungry);

// Pizza Variables Activity 2
    // var name = "John Frasier";
    // var pizzaCount = 15;
    // var isHungry = true;
    // var totalCost = pizzaCount * 5.00;

    // console.log("Welcome: " + name);
    // console.log("Pizzas cost $5 each.");
    // console.log("Your total is: $" + totalCost);
    // console.log("Still hungry: " + isHungry);

// Prompt Demo 
    // alert("We definitely rock!");

    // var doYouRock = confirm("The question is, do *you* rock?");
    // var howMuchRock = prompt("How much do you rock?");

    // alert(doYouRock);
    // alert(howMuchRock);

// Prompt-Sushi
    // var likeSushi = confirm("Do you like Sushi?");
    // var sushiType = prompt("What kind of Sushi do you like?");

    // alert("RE the question: 'Do you like Sushi?', you answered " + likeSushi);
    // alert(sushiType + " is your favorite type of Sushi.");

// Conditional Demo
    // var confirmSushi = confirm("Do you like Sushi?");
    // var confirmGingerTea = confirm("Do you like Ginger Tea?");
    // var sushiType = prompt("What is your favorite type of Sushi?");

    // if (confirmSushi && confirmGingerTea) {
    //     alert("You like " + sushiType + " and Ginger Tea!");
    // }
    
    // else if (confirmSushi) {
    //     alert("You like " + sushiType + "!");
    // }

    // else if (confirmGingerTea) {
    //     alert("You like Ginger Tea!");
    // }

    // else {
    //     document.write("You don't like Sushi or Ginger Tea.");
    // }

// Conditional Activity
    // var confirmSteak = confirm("Do you like steak?");

    // if (confirmSteak) {
    //     document.write("Here's a steak sandwich.");
    // }

    // else {
    //     document.write("Here's a tofu stir-fry!");
    // }

    // var age = prompt("What year were you born?");

    // if (parseInt(age) < 1998) {
    //     alert("Sake Bombs away!");
    // }

    // else if (parseInt(age) === 1998) {
    //     alert("I'm going to need to see some ID.");
    // }

    // else {
    //     alert("No sake for you!");
    // }

// Arrays Demo
    // var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

    // console.log(zooAnimals.length);
    // console.log(zooAnimals[1]);
    // console.log(zooAnimals[4]);

// Bands Activity
    // var favBandsAllLowerCase = ["qotsa", "foo fighters", "eodm", "the kills"];
    // var userBand = prompt("What is your favorite band?");
    // var userBandLowerCase = userBand.toLowerCase();

    // if (favBandsAllLowerCase.indexOf(userBandLowerCase) === -1) {
    //     alert("Oh, I've never heard of " + userBand + " before. I'll have to check them out.");
    // }

    // else {
    //     alert("Yay! " + userBand + " is the shit!");
    // }

// Array-logs Activity
    // var coolPeople = ["bruce lee", "arnold schwarzenegger", "will smith", "esther", "marie curie", "joan of arc"];

    // console.log(coolPeople[0]);
    // console.log(coolPeople[1]);
    // console.log(coolPeople[2]);
    // console.log(coolPeople[3]);
    // console.log(coolPeople[4]);
    // console.log(coolPeople[5]);

// 


// Write a function that takes an array of numbers and returns an array with each number doubled. 
// Ex:
// Input: [1,2,3]
// Output: [2,4,6]

// Input: [-1,-2,-3]
// Output: [-2, -4, -6]

// const doubleArrayNums = function (numArray) {
//     const doubledArray = numArray.map(arrayIndex => arrayIndex * 2);
//     return console.log(doubledArray);
// }

// array2 = array.map((function (x) { return x * 5; }).bind(this));

// const doubleArrayNums = function (numArray) {
//     const doubledArray = numArray.map((function(arrayIndex) {
//         return arrayIndex * 2;
//     }).bind(this));
//     console.log(doubledArray);
// }

// doubleArrayNums([2, 4, 6]);

// Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should run the function parameter on every element in the array parameter and , if it returns true, add the element to a new array. Return the new array. 

// Ex:

// Input: [1,2,3]  function(num){return num === 2}
// Output: [2]

// Input: [1,2,3,4,5,6]  function(num){return num % 2 === 0}
// Output: [2,4,6]

// Input: [1,2,3,4,5,6]  function(num){return num > 3}
// Output: [4,5,6]

// const runFunctionOnArray = function(array, cbFn) {
//     const newArray = [];

//     for (let i = 0; i <= array.length; i++) {

//         const cbFnOutput = cbFn(array[i]);

//         if (cbFnOutput) {
//             newArray.push(array[i]);
//         }
//     }
//     return console.log(newArray);
// }

// runFunctionOnArray([1, 2, 3], function(num){return num === 2});
// runFunctionOnArray([1, 2, 3, 4, 5, 6], function(num){return num % 2 === 0});
// runFunctionOnArray([1, 2, 3, 4, 5, 6], function(num) {return num >3});

    