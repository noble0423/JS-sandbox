// VARIABLES 
//============================================================================================
var array = [];
var arrayValues = array.values();
var groceries = ["apples", "oranges", "bananas"];
var officeSupplies = ["pens", "pencils", "paper"];

// FUNCTIONS
//============================================================================================
// Determine a range of numbers
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

// Sum of array values
function sum(array) {
    let total = 0;

    for (const value of arrayValues) {
        total = total + value;
    }

    return total;
};

// Reverse an array
function reverseArray() {
    let revArray = [];
    
    for (const num of arrayValues) {
        revArray.unshift(num);
    }

    return revArray;
};

// Another way to reverse an array
function reverseArray2(array) {
    let output = [];

    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
};

// Convery an array to a list
function arrayToList(array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list}; 
    }
    return list;
};

// Covert a list to an array
function listToArray(list) {
    let array = [];

    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
};

// Prepend a value/element to an array
function prependArray(element, array) {
    
    array.unshift(element);

    return array;
    // let newList = [];

    // for (let i = 0; i < list.length; i++) {
    //     newList.push(list[i]);
    // }
    // newList.unshift(element);

    // return newList;
};

// Prepend value/element to a list
function prependList(value, list) {
    return {value, rest: list};
};

// Return the position of a given element in a list
function nthList(list, n) {
    if (!list) {
        return undefined;
    }
    else if (n == 0) {
        return list.value;
    }
    else 
        return nthList(list.rest, n - 1);
};

// Return the element of a given position in an array
function nthArray(arrayName, number) {

    return arrayName[number];
};

// Return he position of a given element in an array
function nthRecursiveArray(arrayName, element) {

    for (let i = 0; i <= arrayName.length; i++) {
        if (arrayName[i] === element) {
            return arrayName.indexOf(element);
        }
    }
};

// Compare values in an object
function deepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    }
    if (value1 == null || typeof value1 != "object" ||
        value2 == null || typeof value2 != "object") {
            return false;
        }
    // The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop. Example below:
                            // const object1 = {
                            //     a: 'somestring',
                            //     b: 42,
                            //     c: false
                            //   };

                            //   console.log(Object.keys(object1));
                            // expected output: Array ["a", "b", "c"]
    // basically runs a for loop thru each object and creates an array of those values
    let keysA = Object.keys(value1);
    let keysB = Object.keys(value2);

    if (keysA.length != keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }
    
    return true;
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
        // console.log(arrayToList([1, 2, 3]));
        // console.log(listToArray(arrayToList([10, 20, 30])));
        // console.log(prependArray("envelopes", officeSupplies));
        // console.log(nthArray(groceries, 1));
        // console.log(nthRecursiveArray(officeSupplies, "paper"));
        // console.log(prependList(10, prependList(20, null)));
        // console.log(nthList(arrayToList([10, 20, 30]), 2));

        let obj = {here: {is: "an"}, object: 2};
        // console.log(deepEqual(obj, obj));
        // console.log(deepEqual(obj, {here: 1, object: 2}));
        console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
    });
});