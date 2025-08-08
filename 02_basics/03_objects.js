// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")    //way of declaring Symbol variable

const JsUser = {
    name : "Kishore",
    "Full name": "Kishore G",
    age: 22,
    // mySym: "myKey1",    //here mySym is not taken as symbol but has a string 
    [mySym]: "myKey",   // This is a proper way to add key-value pair of symbol
    location: "Bengaluru",
    email: "Kishoreg4200@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["monday", "Tuesday"]
}
// Here name is stored as "name" - as a string literal. Key can be given as "email" also.

console.log(JsUser.email);      //first way of accessing
console.log(JsUser["email"]);   //second way of accessing  - prefered
console.log(JsUser["Full name"]);       //we can't access fullaname by (JsUser.Full name)
console.log(JsUser[mySym]);       // syntax for symbol

// How to change value in objects
JsUser.email = "Kishoreg@chatgpt.com"

// We can lock the value
Object.freeze(JsUser)
JsUser.email = "Kishoreg@.com"
console.log(JsUser);    //Email is still 'Kishoreg@chatgpt.com'

// functions are treated as type one citizen. Treated same as variables
// Functions in objects
JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);





