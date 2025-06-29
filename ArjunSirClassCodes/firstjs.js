console.log("first js")

var x = 10 ; 
//  variable declared with var have function scope ,it can be redeclared in the same scope and it can be used before declaring it


// let x = 10; // 
// variable declared with let  have block scope , it must be declared before using it  and it can not be redeclared  in the same scope
let myNum = 10 ; 
let Text = "my text";
console.log(myNum);
console.log(Text);


// const x = 10; 
// const x = 10; // variable declared with const have block scope , it must be declared before using it and it can not be redeclared in the same scope and it can not be reassigned

//  Primitive data types in js
let Num = 10; // number
let Text1 = "my text"; // string
let isTrue = true; // boolean
let myNull = null; // null
let myUndefined; // undefined
let myBigInt = 1234567890123456789012345678901234567890n; // bigint


let a = 5;
let b = "5";

console.log(a == b);  // true - loose equality, checks value only
log(a === b); // false - strict equality, checks value and type

// functions in js
function add(a, b) {
    return a + b;
}