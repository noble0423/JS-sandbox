// VARIABLES 
//============================================================================================
var array = [];
var arrayValues = array.values();
var groceries = ["apples", "oranges", "bananas"];
var officeSupplies = ["pens", "pencils", "paper"];

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
    return array;
};

function sum(array) {
    let total = 0;

    for (const value of arrayValues) {
        total = total + value;
    }

    return total;
};

function reverseArray() {
    let revArray = [];
    
    for (const num of arrayValues) {
        revArray.unshift(num);
    }

    return revArray;
};

function reverseArray2(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  };

function arrayToList() {

};

function prepend(element, list) {
    
    list.unshift(element);

    return list;
    // let newList = [];

    // for (let i = 0; i < list.length; i++) {
    //     newList.push(list[i]);
    // }
    // newList.unshift(element);

    // return newList;
};

function nth(listName, number) {

    return listName[number];
};

function nthRecursive(listName, element) {

    for (let i = 0; i < listName.length; i++) {
        if (listName[i] === element) {
            return listName.indexOf(element);
        }
        else 
            return("not in list");
    }
};

// MAIN PROCESS
//============================================================================================

$(document).ready(function() {
    $("#test-button").on("click", function() {
        // console.log("clicked");
        // console.log(range(2, 10, 1));
        // console.log(sum(range(28, 6, 3)));
        // console.log(reverseArray(range(120, 5, 7)));
        // console.log(reverseArray2(["e", 4, "k", 8]));
        // console.log(prepend("envelopes", officeSupplies));
        console.log(nth(groceries, 1));
        // console.log(nthRecursive(officeSupplies, "pencils"));
    });
});