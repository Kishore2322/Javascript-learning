const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)      // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

const allHeros = marvel_heros.concat(dc_heros)      //concat returns a new array
console.log(allHeros);


// Spread Operator
const all_new_heros = [ ...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const flat_array = another_array.flat(3)    //flat(infinity) can also be given but not recomended
console.log(flat_array);

console.log(Array.isArray("Kishore"))    //false
console.log(Array.from("Kishore"))
console.log(Array.from({name: "Kishore"}))    // we should mention whether array should be made of keys/values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

