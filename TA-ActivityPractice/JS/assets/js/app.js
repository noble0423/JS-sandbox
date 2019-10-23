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


// Function that takes in a number and reverses it
// const numReverse = function (num) {
//     // create empty array
//     let newNum = "";

//     // convert num to string
//     const numString = num.toString();
    
//     // reverse the new string of numbers
//     for (let i = numString.length -1; i >= 0; i--) {
//         newNum += numString[i];
//     }
//     console.log(parseInt(newNum));

// }

// numReverse(456789);

// Algo Practice
// var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

// // random_value picks a random number in the stuff array
// var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

// console.log(stuff);
// console.log(random_value);

// for (let i = 0; i < stuff.length; i++) {
//     if (random_value === stuff[i]) {
//         console.log(i);
//         console.log (`Random value of ${random_value} was found at index ${i} in the stuff array`);
//         break;
//     }
//     console.log(i);
// }



// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

// Ex:
// Input: 2
// Output: 3 (because 1 + 2 = 3)

// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)

// Input: 10
// Output: 55

// let sum = 0;
    
// const sumOfAllNums = function(integer) {

//     for (let i = 1; i <= integer; i++) {

//         sum =+ i;
//     }

//     return sum;
// }

// sumOfAllNums(10);
// console.log(sum);


// Write a function that takes in an array of numbers and outputs the maximum number.

// Ex:
// Input: [ 1, 2, 3 ]
// Output: 3

// Input: [ 3, 6, 4, 5, 2, 1 ]
// Output: 6

// Input: [ 3, 3, 3 ]
// Output: 3

// function maxNumInArr(arr) {
//     let maxNum = arr[0]; 

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNum) {
//             maxNum = arr[i];
//         }
//     }
//     console.log(maxNum);
//     return maxNum;
// }

// maxNumInArr([229, 1, 2, 4, 7, 950, 5, 9, 20, 3, -1, 150]);


// Write a function that takes in a string and outputs the number of vowels (not counting y).

// Ex:
// Input: "hello"
// Output: 2

// Input: "you are great!"
// Output: 6

// Input: "why?"
// Output: 0

// function numVowels(str) {
//     let aCount = 0;
//     let eCount = 0;
//     let iCount = 0;
//     let oCount = 0;
//     let uCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a") {
//             aCount++;
//         }
//         else if (str[i] === "e") {
//             eCount++;
//         }
//         else if (str[i] === "i") {
//             iCount++;
//         }
//         else if (str[i] === "o") {
//             oCount++;
//         }
//         else if (str[i] === "u") {
//             uCount++;
//         }
//     }
    
//     if (aCount > 0) {
//         console.log(`There are ${aCount} A/s in this string`);
//     }
//     if (eCount > 0) {
//         console.log(`There are ${eCount} E/s in this string`);
//     }
//     if (iCount > 0) {
//         console.log(`There are ${iCount} I/s in this string`);
//     }
//     if (oCount > 0) {
//         console.log(`There are ${oCount} O/s in this string`);
//     }
//     if (uCount > 0) {
//         console.log(`There are ${uCount} U/s in this string`);
//     }

// }

// numVowels("aleleleltuioshqkenfbp");


// Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

// Ex:
// Input: "noon"
// Output: true

// Input: "horse"
// Output: false

// Input: "racecar"
// Output: true

// function palindrome(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[str.length - (i + 1)]) {
//             // console.log(true);
//             return true;
//         }
//         // else {
//         //     console.log(false);
//         // }
//     }
//     return false;
// }

// // console.log(palindrome("noyton"));

// // palindrome("noyton");

// function palindromeOpt(str) {
//     // let pally = str.split("").reverse().join("");

//     // if (str === pally) {
//     if (str.toLowerCase() === str.toLowerCase().split("").reverse().join("")) {
//         console.log("this is a palindrome");
//     }

//     else {
//         console.log("not a palindrome");
//     }

//     // return str.split("").reverse().join("");

//     // console.log(pally);
// }

// palindromeOpt("Noon");


// Bubble Sort
// var unsortedArr = [
//     1, 326, 251, 24, 284, 364, 287, 74, 89,
//     63, 455, 130, 408, 378, 333, 49, 69, 335,
//     195, 145, 122, 454, 30, 277, 208, 293, 311,
//     88, 32, 5, 304, 239, 448, 61, 98, 382, 401,
//     452, 233, 150, 109, 252, 305, 51, 161, 480,
//     191, 44, 206, 451, 141, 182, 320, 355, 402,
//     439, 13, 430, 449, 119, 166, 493, 396, 139,
//     99, 262, 163, 410, 422, 275, 212, 416, 272,
//     394, 379, 211, 491, 11, 133, 361, 160, 338,
//     87, 199, 373, 38, 269, 73, 68, 359, 165, 291,
//     418, 159, 481, 289, 469, 23, 432, 2, 315, 247,
//     462, 189, 134, 330, 164, 153, 274, 371, 267,
//     377, 347, 201, 19, 475, 66, 260, 497, 466, 426,
//     12, 214, 306, 386, 194, 129, 219, 10, 288, 348,
//     188, 59, 440, 498, 447, 297, 446, 57, 313, 175,
//     80, 461, 312, 7, 215, 248, 107, 389, 46, 358,
//     229, 72, 15, 492, 240, 217, 420, 110, 20, 383,
//     124, 321, 183, 174, 374, 17, 488, 33, 256, 235,
//     353, 387, 117, 479, 147, 483, 424, 428, 205, 28,
//     392, 398, 216, 350, 34, 342, 135, 366, 125, 258,
//     329, 362, 308, 295, 441, 242, 95, 406, 411, 286,
//     14, 352, 433, 123, 340, 499, 101, 276, 37, 468,
//     298, 75, 438, 131, 138, 96, 64, 246, 476, 487, 151,
//     283, 106, 83, 273, 202, 323, 357, 414, 478, 172, 60,
//     121, 127, 152, 48, 415, 234, 156, 8, 171, 176, 41,
//     100, 413, 76, 128, 399, 132, 154, 423, 404, 302, 42,
//     341, 173, 126, 427, 369, 26, 453, 180, 184, 55, 167,
//     77, 307, 111, 445, 237, 16, 344, 290, 25, 356, 114,
//     316, 39, 336, 90, 3, 465, 162, 470, 343, 429, 303,
//     363, 29, 136, 203, 241, 4, 93, 221, 271, 395, 317,
//     339, 86, 225, 436, 325, 47, 442, 137, 285, 474, 337,
//     230, 376, 345, 245, 43, 236, 484, 318, 255, 105, 388,
//     397, 27, 6, 31, 148, 372, 35, 393, 460, 384, 349, 490,
//     264, 84, 300, 204, 482, 168, 67, 218, 331, 21, 473,
//     210, 496, 467, 431, 116, 405, 450, 327, 407, 261, 309,
//     157, 458, 223, 464, 224, 18, 142, 471, 457, 52, 82, 380,
//     263, 367, 324, 281, 97, 412, 85, 149, 346, 265, 368, 193,
//     266, 243, 434, 254, 456, 115, 118, 381, 70, 190, 94, 228,
//     296, 314, 257, 403, 170, 232, 250, 360, 65, 417, 351, 71,
//     62, 158, 365, 322, 500, 282, 375, 177, 187, 459, 112, 319,
//     155, 489, 391, 178, 463, 22, 53, 91, 435, 231, 56, 103, 36,
//     253, 477, 186, 45, 425, 120, 50, 140, 443, 146, 108, 259,
//     238, 192, 222, 213, 200, 227, 354, 437, 280, 207, 143, 310,
//     385, 370, 58, 444, 198, 278, 54, 494, 390, 113, 328, 144,
//     268, 78, 9, 102, 197, 301, 226, 220, 334, 419, 299, 409, 421,
//     292, 332, 209, 244, 196, 179, 472, 279, 40, 486, 270, 185,
//     181, 485, 495, 81, 169, 294, 79, 400, 92, 104, 249
//   ];

//   const sortedArr = [];

//   let sorted = false;

//   while(!sorted) {
//       sorted = true;

//       for (let i = 0; i < unsortedArr.length; i++) {
    
//         if (unsortedArr[i] > unsortedArr[i + 1]) {
//             sorted = false;
//             var temp = unsortedArr[i];
//             unsortedArr[i] = unsortedArr[i + 1];
//             unsortedArr[i + 1] = temp;
//         }
//       }
//   }
//   console.log(unsortedArr);