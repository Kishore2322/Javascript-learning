// const tinderUser = new Object();       //singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// Objects inside objects
const regularUser = {
    email: "Kishoreg4200@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kishore",
            lastname: "G"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }     // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const ExpectedTarget = Object.assign(Target, source)
// above source object is copied into target object and same is assigned to ExpectedTarget

// For better practise we follow the below code where target is empty and multiple sources,
// so that target is not changed
const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);      // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// even better method would be to use spread operator
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h1@gmail.com"
    },
    {
        id: 3,
        email: "h2@gmail.com"
    },
]

console.log(users[1].email);
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// When data comes from database

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Kishore"
}

// course.courseInstructor

// Destructuring the object
const {courseInstructor : Instructor} = course      //here Instructor is programmer given name
console.log(Instructor);

// API
// {
//     "name": "Kishore",
//     "age": "222",
//     "location": "Bengaluru"
// }