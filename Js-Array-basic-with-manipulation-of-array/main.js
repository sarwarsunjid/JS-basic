/**
 * An array is a special variable, which can hold more than one value at a time.
 */

//Using an array literal is the easiest way to create a JavaScript Array.

//syntax -> var array_name = [item1, item2, ...];    



//Declaring an array 
var myArr = ['Sarwar', '28'];

//printing array
console.log(myArr);



/**
 * Nested Array
 * An array is an ordered collection of values: each value is called an 
 * element, and each element has a numeric position in the array, known 
 * as its index. JavaScript lets us create arrays inside array called 
 * Nested Arrays.
 * 
 * 
 * Nested Arrays have one or many arrays as the element of an array.
 */

//Nested array declaration
var ourArr = [
    ["1", "Bike"],
    ["2","Car"]
];

console.log(ourArr);





//Accessing array data with indexes 
var srcArr = ['100','200','300'];

var chkArray = srcArr[0];

console.log(chkArray);





//Modify array data with indexes
var srcArr = ['100','200','300'];

//update specific index
srcArr[2] = '40';

console.log(srcArr);





//Access multidimensional array with indexes
var mulArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12],
         13,14
    ]
];

var myData = mulArr[3][2];

//check output
console.log(myData);





/**
 * some method for array manipulation
 * push()
 * pop()
 * shift()
 * unshift()
 */



//Manipulate Array with Push

/***
 * push()
 * The easiest way to add a new element to an array is
 * using the push() method:
 */
var myArr = [
    ['1','book'],
    ['2','car'],
    ['3','bike']
]

myArr.push(['4','watch']);

console.log(myArr);



/**
 * pop()
 * Remove the last element of an array:
 */
var myArr = [
    ['1','book'],
    ['2','car'],
    ['3','bike']
]


var popFromArr = myArr.pop();

console.log(myArr);



/**
 * Shift()
 * Remove the first item of an array:
 */

 var myArr = [
    ['1','book'],
    ['2','car'],
    ['3','bike']
]

var popFromArr = myArr.shift();

console.log(myArr);


/**
 * Unshift()
 * Add new items to the beginning of an array
 */

 var myArr = [
    ['Lemon'],
    ['Orange'],
    ['Strawberry']
]

myArr.unshift(['Pineapple']);
console.log(myArr);

