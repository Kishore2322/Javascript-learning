function sayMyName(){
    console.log("K");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("O");
    console.log("R");
    console.log("E");
}

sayMyName()   // way to call function to execute

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);   
}

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
const result = addTwoNumbers(3 , "a")
console.log("Result: ", result);



// here "sam" is the default value given which can be used 
// incase argument is not passed while calling the function
function loginUserMessage(userName = "sam"){
    if(!userName){                          // userName === undefined can also be given
        console.log("Please enter username");
        return;
    }
    return `${userName} just logged in`      
}
console.log(loginUserMessage("Kishore"));
console.log(loginUserMessage());


// another way to pass parameter
// rest operator "...num1" is used to collect all arguments passed
// val1 & val2 takes the fisrt two values in arguments
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

// How to pass objects to function
const user = {
    username: "Kishore",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

//  How to pass arrays
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

