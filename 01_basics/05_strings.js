const name = "Kishore"
const repoCount = 50

// console.log(name + repoCount + "value");   not a better way to write code

// use back ticks - String interpolation
// ${} - placeholder
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("key-value-pair");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);   //3
console.log(gameName.toUpperCase());    //KEY
console.log(gameName.charAt(2));    //y
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   kishore   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kishore.com/kishore%20G"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
