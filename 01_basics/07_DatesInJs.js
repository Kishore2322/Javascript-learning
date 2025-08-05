// Dates

let myDate = new Date();    //typeof is object
console.table([myDate.toString(), myDate.toDateString(), myDate.toLocaleString(), myDate.toLocaleDateString(), myDate.toJSON()])

// let myCreatedDate = new Date(2025, 0 , 5);  // 1/5/2025, 12:00:00 AM
// let myCreatedDate = new Date(2025, 0 , 5, 5, 3);  // 1/5/2025, 5:03:00 AM
// let myCreatedDate = new Date("2025-01-5");  // 1/5/2025, 12:00:00 AM
let myCreatedDate = new Date("2025-01-5");  // 1/5/2025, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})