/**
 * In Computer Science a queue is an abstract Data Structure where items are kept
 * in order. New items can be added at the back of the queue and old items are 
 * taken off from the front of the queue.
 * 
 * 
 * Write a function nextInLine which takes an array (arr) and a number (item)
 * as arguments.
 * 
 * 
 * Add the number to the end of the array, then remove the first element of the array.
 * 
 * 
 * The nextInLine function should then return the element that was removed.
 * 
*/

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    return arr.shift();
    return item;
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 5));
  console.log("After: " + JSON.stringify(testArr));
  
  
  
  /**
   * Understanding Boolean Values
   * 
   * 
   * Another data type is the Boolean. Booleans may only be one of two 
   * values: true or false. They are basically little on-off switches, 
   * where true is on and false is off. These two states are mutually 
   * exclusive.
   * 
   * 
  */
  
  function welcomeToBooleans() {
  
    // Only change code below this line
  
    return false; // Change this line
  
    // Only change code above this line
  }
  
  
  /**
   * Use Conditional Logic with If Statements
   * 
   * If statements are used to make decisions in code. The keyword if tells JavaScript to 
   * execute the code in the curly braces under certain conditions, defined in the 
   * parentheses. These conditions are known as Boolean conditions and they may only 
   * be true or false.
   * 
   * When the condition evaluates to true, the program executes the statement inside the
   * curly braces. When the Boolean condition evaluates to false, the statement inside the
   * curly braces will not execute.
   * 
   * 
  */
  
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
      if(wasThatTrue){
          return "Yes, This is True"
      }
      else{
          return "No, This is False"
      }
  
    // Only change code above this line
  
  }
  
  console.log(trueOrFalse(true));
  
  
  
  //Camparision with the strict equality operator
  
  /**
   * 
   * === (Triple equals) is a strict equality comparison operator in JavaScript,
   * which returns false for the values which are not of a similar type. This 
   * operator performs type casting for equality. If we compare 2 with "2" 
   * using ===, then it will return a false value.
   * 
  */
  
  function testEqual(val) {
    if (val === '10') { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testEqual(10)); //return false
  
  
  
  // Practice comparing different values
  
  //example with == operator
  function compareEquality(a, b) {
    if (a == b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(compareEquality(10, '10')); //return equal
  
  //example with === 
  function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(compareEquality(10, '10')); //return equal
  
  
  //Comparison with the inequality operator
  
  // Setup
  function testNotEqual(val) {
    if (val != 90) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testNotEqual(10));
  
  
  
  //Comparison with the Strict Inequality Operator
  //checking with strict equality operator
  
  function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testStrictNotEqual(10));
  
  
  
  //Comparison with the Greater Than Operator
  
  function testGreaterThan(val) {
    if (val > 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testGreaterThan(10));
  
  
  
  //Comparison with the Greater Than or Equal Operator
  
  //
  function testGreaterOrEqual(val){
      if(val >= 20){
          return '20 or Over';
      }
      
      if(val >= 10){
          return '10 or Over';
      }
      return "Less Than 10";
  }
  
  console.log(testGreaterOrEqual(10))
  
  
  
  
  
  
  
  
  
  