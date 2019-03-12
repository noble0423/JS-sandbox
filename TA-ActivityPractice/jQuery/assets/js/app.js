// Activity 1 - DOM Manipulation
// alert("app.js linked");

// var targetDiv = document.getElementById("empty-div");

// targetDiv.textContent = "Hello Friends";

// This overwrites "Hello Friends" above
// targetDiv.textContent = "A pleasure to meet you.";

// var newDiv = document.createElement("div");

// newDiv.textContent = "A pleasure to meet you.";

// targetDiv.appendChild(newDiv);

// Apply CSS to new div
// newDiv.setAttribute("class", "fancy");

// Activity 2 - JS Drinklist
// var drinkList = [
//     "Coffee: $5",
//     "Espresso: $7",
//     "Cappuccino: $6",
//     "Latte: $4",
//     "Tea: $3",
//     "Iced Coffee: $6",
//     "Iced Espresso: $$8",
//     "Iced Lette: $6",
//     "Iced Tea: $4"
// ];

// Create code that "grabs" the div with the matching id (#drink-options);
// var targetDiv = document.getElementById("drink-options");

// Create a for loop that creates HTML content of all the drinks using JavaScript.
// for (let i = 0; i < drinkList.length; i++) {
//     var newDiv = document.createElement("div");

//     newDiv.textContent = drinkList[i];

//     targetDiv.appendChild(newDiv);
// }

// Same code, but using forEach
// drinkList.forEach(function(drink) {
//     var newDrinkDiv = document.createElement("div");

//     newDrinkDiv.textContent = drink;

//     targetDiv.appendChild(newDrinkDiv);
// })

// Same code, but using a slightly different forEach
// function createNewDrinkDiv (drinks) {
//     var newDrinkDiv = document.createElement("div");

//     newDrinkDiv.textContent = drinks;

//     targetDiv.appendChild(newDrinkDiv);
// }
// drinkList.forEach(createNewDrinkDiv);

// Activity 3 - jQuery Generators
// $("#empty-div").html("<h1>Hello Friends</h1>");
// $("#empty-div").append("A pleasure to meet you.");

// var newDiv = $("<div>");

// newDiv.text("A pleasure to meet you");

// $("#empty-div").append(newDiv);

// newDiv.attr("class", "fancy");

// Activity 4 - jQuery Drink List
// var drinkList = [
//     "Coffee: $5",
//     "Espresso: $7",
//     "Cappuccino: $6",
//     "Latte: $4",
//     "Tea: $3",
//     "Iced Coffee: $6",
//     "Iced Espresso: $$8",
//     "Iced Lette: $6",
//     "Iced Tea: $4"
// ];

// var drinkDiv = $("#drink-options");

// Using a for loop
// for (let i = 0; i < drinkList.length; i++) {
//     var newDrinkDiv = $("<div>" + drinkList[i] + "</div>");

//     drinkDiv.append(newDrinkDiv);
// }

// Using jQuery .each()
// $.each(drinkList, function(i, drink) {
//     drinkDiv.append("<div>" + drink + "</div>");
// });


// Activity 5 - OnClickBasic
// $(document).ready(function() {
//     $("#click-me").on("click", function() {
//         console.log("clicked");
//     });
// });


// Activity 6 - Sandwich Click
// $(document).ready(function() {

//     var pbjEaten = 0;
//     var grilledCheeseEaten = 0;
//     var roastBeefEaten = 0;

//     $("#pbj").on("click", function() {
//         console.log("PBJ clicked");
//         $("#sandwichImage").html(
//             "<img src='https://i1.wp.com/snotapwi.com/wp-content/uploads/2017/03/PBJ-Sandwiches.jpg?resize=590%2C368&ssl=1' />"
//         );
//         pbjEaten++;
//         $("#pbjCounter").text(pbjEaten);
//     });

//     $("#grilledCheese").on("click", function() {
//         console.log("grilled cheese clicked");
//         $("#sandwichImage").html(
//             "<img src='http://cdn.funcheap.com/wp-content/uploads/2014/04/The-Perfect-Grilled-Cheese-Sandwich-800-158111.jpg' />"
//         );
//         grilledCheeseEaten++;
//         $("#grilledCheeseCounter").text(grilledCheeseEaten);
//     });

//     $("#roastBeef").on("click", function() {
//         console.log("roast beef clicked");
//         $("#sandwichImage").html(
//             "<img src='https://www.cscassets.com/recipes/wide_cknew/wide_25336.jpg' />"
//         );
//         roastBeefEaten++;
//         $("#roastBeefCounter").text(roastBeefEaten);
//     });
// });


// Activity 7 - Trigger Random
// $(document).ready(function() {

//     let randy;

//     function generateRandomNum() {
//         randy = Math.floor(Math.random() * 1001);
//         console.log(randy);
//     }

//     $("#random-button").on("click", function() {
//         console.log("clicked");
//         generateRandomNum();
//         $("#randon-number").text(randy);
//     });
// });


// Activity 8 - 