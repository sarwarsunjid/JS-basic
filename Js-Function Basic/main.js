//Function basic 
function ourReusableFunction(){
    console.log("Hi! This is Sarwar");
}
ourReusableFunction();


//Passing Values to function with Arguments
function ourFunctionWithArgs(a, b){
    console.log(a - b);
}

ourFunctionWithArgs(100, 50);

// Global Scope and Function 

//Declare your variable here 
var myGlobal = 10;

function fun1(){
    //assign 5 to oppGlobalHere
    oppsGlobalHere = 5;
}

//only change code above this line 
function fun2(){
    var output = "";
    
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    
    if(typeof oppsGlobal != "undefined"){
        output += "oppsGlobal: " + oppsGlobal;
    }
    
    console.log(output);
}

fun1();
fun2();




//Local Scope 
function myLocalScope(){
    var myVal = 10;
    console.log(myVal); //display output 10
}

myLocalScope();

// console.log(myVal); //display myVal not defined 




/**
 * Global VS Local Scope in function
 */

var outerWear = "T-shirt";

function myOutfit(){
    //this will took percedence over global variable outerwear
    var outerWear = "Full Sleeve T-shirt";
    return outerWear;
}

console.log(myOutfit()); //display Full Slleve T-shirt
console.log(outerWear);// display value of global variable outerWear




//Return a value from a function with Return 

//example-1
function minusSeven(num){
    return num -7;
}
console.log(minusSeven(10)); //display output three

//example2
function timesSeven(num){
    return num * 7;
}
console.log(timesSeven(10));

