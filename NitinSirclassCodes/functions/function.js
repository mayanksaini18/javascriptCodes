//  A function is a block of code that performs a specific task and can be reused.

// Syntax:
// function functionName(parameters) {
//     // code to be executed
//     return value;  // optional
// }

// JavaScript functions
//  -> function Declarartion
//  -> function Definition 
//  -> function Expression  
//   - > function parameters


//  Function expresssion :

//  a function expression stores specified functionallity undder the reference of a name whixjch is  a variable that invokes function using IIFE pattern
//  IIFE -> Immediately Invoked Function Expression
//  ** imp point ->  it allow to change the fiunctionality dynaimically according to state / situation
  


let pass = prompt("Enter the password");
let msg = null;
if ( pass.length > 8){
    msg = function(){
        return "Strong Password";
    }
}
else{
    msg = function(){
        return "Weak Password";
    }
}

//  one variable can hold multiple functionallity - memory efficient

//  javascript  function can be configured by 2 ways
// 1. function declaration -Declares a function with a name.
// 2. function expression -a function store fin  a variable


// Function Declaration
console.log(declare());  // Works ✅
function declare() {
    return "I am a declaration!";
}

// Function Expression
// console.log(express()); // ❌ Error: Cannot access 'express' before initialization
const express = function() {
    return "I am an expression!";
};
console.log(express());  // Works ✅



// Anounymous Function
//  A function without a name is called an anonymous function.
// - A function can be anonymous taht is without name 
// - it can be used in function expression or IIFE


//  synatx:
(
    function(){
        console.log("I am an anonymous function");
    }
)
();  // IIFE pattern

//  Q : when to use  ananonymous function
//  ti is noramally used in callback function
// it i s tecnique in which fuynction is configured , but it executed  according to the situation implicitly    
// eg :  syntax : fetch().then(function(){}) ;


// Function Parameters and Arguments
// -in a function , parameters is required to modify the functionallity
// 