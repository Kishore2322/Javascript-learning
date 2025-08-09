// Learning how this works

const user = {
    username: "Kishore",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        return `${this.username} , welcome to website`
    }
    // Here this refers to current object
}
console.log(user.welcomeMessage());
user.username = "sam"
console.log(user.welcomeMessage());


// How this works outside scope
console.log(this)      //{}

// this works only in objects
function chai(){
    let username = "Kishore"
    console.log(this.username);
}
chai()

// -------------------arrow Function-------------------------------

const chai = () => {
    let username = "Kishore"
    console.log(this);
}
chai()

// 1. when we use { } then return statement is compulsory
const addTwo = (num1, num2) => {
    return num1 + num2
}

// 2.implicit return
const addtwo = (num1, num2) => num1 + num2

// 3.implicit return happens here
const Addtwo = (num1, num2) => (num1 + num2)

// 4. implicit return objects
const AddTwo = (num1, num2) => ({username: "Kishore"})
console.log(addTwo(3, 4));





