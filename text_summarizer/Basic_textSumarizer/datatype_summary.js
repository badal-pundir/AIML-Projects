// Primitive
// primitive DTs are call by value.
// 7 types : String, Number, Boolearn, null(empty), 
//           Undefined(memory is reserved but the value is missing), 
//           Symbol, BigInt.
// const bigNumber = 23449543506454n // use n as postfix to convert a number into big number.
// const myNumber = 23.343 // is a number.
// Reference Type (Non primitive)
// objects and browser-event are the most important topics to master tha JS.
// Arrays, Objects, Functions.

// Array
const heros = ["shaktiman", "naagraj", "doga"];
// objects
let myObj = {
    name: "badal",
    age: 23
}
// functions
// there are many ways to declare fucntion
// valriable way
const myFunction = function() {
    console.log("Hello World")
}
console.log("---------------------------------------")
console.log(typeof heros)   // object
console.log(typeof myObj)   // object
console.log(typeof myFunction)  // function
console.log("---------------------------------------")
// JS is dynamic type lanuage
/**
 * In JavaScript, variable types are determined at runtime rather than at compile-time.
 * We can change the type of a variable at any time by assigning a value of a different type to it.
 **/
let myVar = 42;       // myVar is a number
console.log(typeof myVar); // "number"

myVar = "Hello";      // myVar is now a string
console.log(typeof myVar); // "string"

myVar = true;         // myVar is now a boolean
console.log(typeof myVar); // "boolean"
/**
 * JavaScript can automatically convert values from one type to another when necessary, 
 * often called type coercion.
 **/
console.log(5 + "5"); // Outputs "55" (number 5 is coerced to string "5")
console.log(5 - "2"); // Outputs 3 (string "2" is coerced to number 2)

/**
 * Advantages of Dynamic Typing:
 *  Greater flexibility.
 *  Faster prototyping and iteration.
 * 
 * Disadvantages of Dynamic Typing:
 *  More prone to runtime errors.
 *  Harder to manage large codebases without proper tooling (e.g., TypeScript for JavaScript).
 **/

