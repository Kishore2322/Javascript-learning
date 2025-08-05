// Primitive

// 7 Types : String, Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456345634555n;


// References (Non Primitive)
// Arrays , Objects , Function

const heros = ["shaktiman" , "naagraj" , "daga"];

let myObj = {
    name: "Kishore",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let variable = "Stack"

let anotherVariable = variable
anotherVariable = "Heap"

console.log(variable);
console.log(anotherVariable);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Kishoreg@google.com"

console.log(userOne.email);
console.log(userTwo.email);