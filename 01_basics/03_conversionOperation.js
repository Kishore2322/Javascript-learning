let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN(value)  but type is still number (valueInNumber)
// true => 1; false => 0


let isLoggedIn = "Kishore"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Kishore" => true

 let someNumber = 33

 let stringNumber = String(someNumber)
 console.log(typeof stringNumber);
 console.log(someNumber);

// ********************** operations ****************************

let value = 3
let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);  power
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = "  Kishore"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2" + 2);

console.log(+true);
console.log(+"");

//not recommended
let num1, num2, num3
num1 = num2 = num3  = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
