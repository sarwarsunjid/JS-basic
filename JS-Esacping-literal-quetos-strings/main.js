//escaping string quetos
//var myStr = "I am "double quoted" string inside " double quotes""; // wrong way of declaration


/**
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

