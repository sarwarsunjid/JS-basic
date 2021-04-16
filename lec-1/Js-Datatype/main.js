/* Data Types:
Undefined, Null, boolean, string, symbol, number, number and object
*/


/**
 * primitive data type:
 *  number,
 *  string,
 *  boolean,
 *  undefined,
 *  null
 */


/**
 *Number: JavaScript has only one type of numbers.
 * numbers can be written with, or without decimals:
 */

var weight = 40;

//to check the datatype
console.log(typeof(weight));

//to check the datatype
var weight1= 44.4;
console.log(typeof(weight1));



/**
 *String: A string (or a text string) is a series of characters like "Sarwar Sunjid".
 * Strings are written with quotes. You can use single or double quotes:
 */

var x = "Toyota Car";

//to check the datatype
console.log(typeof(x));

//to check the datatype
var y = "BMW Car";
console.log(typeof(y));



/**
 * Boolean:
 * Booleans can only have two values: true or false.
 */

var x = 5;
var y = 5;
var z = 6;

console.log(x == y);

console.log(x == z);




/**
 * Undefined: In JavaScript, a variable without a
 * value, has the value undefined. The type is also 
 * undefined.
*/
var a;

//to check the datatype - use typeof function
console.log(typeof(a))


/**
* In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
* Unfortunately, in JavaScript, the data type of null is an object.
*/
var person = {firstName:"sarwar", lastName:"sunjid", age:28, eyeColor:"black"};
person = null; 


//to check the datatype - use typeof function
console.log(typeof(person));

//it will show output null
console.log(person)



/**
 * Non Primitive data type
 * Array, object, function
 */



