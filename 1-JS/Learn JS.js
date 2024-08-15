document.write('Hello in JS') // write in page
console.log('hello in JS') // write in console
window.alert('Hello in my JS lesrn page') // write in popup

//(example)                                  //(The result)
document.write('<h1>Hello World in JS (h1)</h1>') //hello world
//window.alert('<h1>hello world</h1>') //<h1>hello world</h1>
console.log('<h1>hello world</h1>') //<h1>hello world</h1>
////                                                                               
//Data types
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
////                                                                               
//Variables
var username;
username = "Joe";
console.log(username)
let name ;
name = "Joe2";
console.log(name)
const name2 = "Joe3";
console.log(name2)
////                                                                               
//Array
// let beyou = ['joe','nour', 'ali' , 'halol']
// //             0      1       2       3
// console.log(beyou(0));
////                                                                                
console.log(name.toUpperCase());  //toUpperCase() is a method that converts the string to uppercase
console.log(name.toLowerCase());  //toLowerCase() is a method that converts the string to lowercase
console.log(name.trim());  //trim() is a method that removes the whitespace from the string
// console.log(name.length()) // length() is a method that returns the length of the string
////                                                                                
//String methods
console.log(name.slice(0, 2)); // slice() is a method that returns a part of the string
console.log(name.slice(0, 2)); // slice() is a method that returns a part of the string
////                                                                                
//  && and
//  || or
//  ! not
// == equal
// != not equal
// === equal value and type
// !== not equal value and type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to 
////                                                                                
//if else
        let num1 = prompt("num1");
        let num2 = prompt("num2");
        if(num1+num2 == 10)
        {
            document.write("<h1>True</h1>");
        }
        else if(num1+num2 !== 10) {
            document.write("<h1>False</h1>");
        }


// if    اول شرط
// else if    لو اول شرط غلط يرجع الثاني
// else    لو الشرطين غلط يرجع الثالث
////                                                                                
//switch
let day = prompt("Enter a number between 1 and 7");
switch (day) {
    case "joe":
        console.log("Monday");
        break;
    case "joe2":
        console.log("Tuesday");
        break;
    default:
        console.log("Not a valid day");
}
////                                                                                
//Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}



