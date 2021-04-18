// Declaring String
var myName;
myName = "Sarwar Jahan Bhuiyan";

console.log(myName);



//escaping string quetos
//var myStr = "I am "double quoted" string inside " double quotes""; // wrong way of declaration


/**
 * note:
 * When you need to use a special character such as " inside a string you need to escape it using \.
 * If you use double quotes " for the string, single quotes ' in the string do not need to be escaped.
 * If you use single quotes ' for the string, double quotes " in the string do not need to be escaped.
 */


//correct way  
var myStr = "I am \"double quoted\" string inside \"double quotes\"";

console.log(myStr);


//Qouting String with Single quote

//before
//var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

//correct way
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(myStr);



//Escaspe Sequence in Strings

/*****
 * \' single quote
 * \" double quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 */



//check the output
/**
 * Output:
 * First Line
 *  Second Line 
 *      Third Line
 */
var myStr = "First line\n\t\Second Line\n\t\tThird Line"

console.log(myStr);





//Concateneting string with plus operator with some example

//string concate basic
var plsStr = "I am Sarwar Jahan Bhuiyan. " + "I am also a software developer";

console.log(plsStr);






//represent same meaning
var plsStr = "I am Sarwar Jahan Bhuiyan. ";
plsStr += "I am a also frontend developer";

console.log(plsStr);





//Constructing Strings with variable
var myOrg = "Software";

var myTask = "I am a programmer. I love to make "+myOrg;

console.log(myTask);






//Appending Variable to strings 
var myName =  "Hi! This is Sarwar";
var myJob = "I love to do programming";

myName += myJob;

console.log(myName);





//Find the length of a string 

var str = "I love my country";
chklength = str.length;

//also count blankspace
console.log(chklength);






//Bracekt notation to find the first charecter of a string 
var firstLetterOfFirstName = "";
var firstName = "Sarwar";

//to find the first letter 
firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName);






//Bracekt notation to find nth charecter of a string 
var firstLetterOfFirstName = "";
var firstName = "Sarwar";

//to find the first letter 
firstLetterOfFirstName = firstName[4];

console.log(firstLetterOfFirstName);





//Bracekt notation to find the last charecter of  a string 
var lastLetterOfLastName = "";
var lastName = "Sarwar";

//to find the first letter 
lastLetterOfLastName = lastName[lastName.length-1];

console.log(lastLetterOfLastName);





//Bracekt notation to find nth to last charecter of a string 
secondToLastLetterOfLastName=""
var lastName = "Sarwar";

secondToLastLetterOfLastName = lastName[lastName.length-3];

console.log(secondToLastLetterOfLastName);




//Check String Immutability
var myStr = "Jello World";

//to replace the first character of myStr variable
myStr[0] = "H"; //Because of string immutabilty, it won't work.

console.log(myStr);

//correct way
myStr = "Hello World";
