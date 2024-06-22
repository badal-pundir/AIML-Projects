const  accountId = 144553 // can't be update later
let accountEmail = "badal2pundir@gmail.com" //
var accountPassowrd = "12345"
accountCity = "Roorkee"
let accountState;  // undefined
// accountId = 2 // not allowed because it is a constant variable

/*
Prefer to not use var
because of issue in block scope and functional scope
*/
accountEmail = "pundirG@gmail.com"
var accountPassowrd = "1234566"
console.log(accountEmail)
// console.log([accountId, accountEmail, accountPassowrd, accountCity, accountState])
console.table([accountId, accountEmail, accountPassowrd, accountCity, accountState])

// Summary ----------------
function example() {
    if (true) {
        var a = 1;  // Function-scoped
        let b = 2;  // Block-scoped
        const c = 3; // Block-scoped and constant
    }
    console.log(a); // 1
    console.log(b); // ReferenceError: b is not defined
    console.log(c); // ReferenceError: c is not defined
}

