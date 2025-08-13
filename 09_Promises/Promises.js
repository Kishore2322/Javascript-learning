// 1. Creating new Promise Object 
const newPromise = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, network
    setTimeout(function(){
        console.log(`Async task completed`);
        resolve();
    }, 1000);
});

newPromise.then(function(){
    console.log(`Promise consumed`); 
})


// // 2. promise object is chained with then to handle resolve
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async task2 completed`);
        resolve();
    }, 1000);
}).then(function(){
    console.log(`Async task2 resolved`);
})


// 3. Promise here resolve is returning data and is handled by then method
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Kishore",email: "kishoreg4200@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})


// 4. Promise resolve and reject are handled
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Kishore", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

const username = promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// 5. Promise handled by async await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// asnc function handling promiseFive
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


// 6. fetch intro , fetch returns promise
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


fetch('https://api.github.com/users/Kishore2322')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    console.log(typeof data);
    console.log(data.login , " " , data.url);
})
.catch((error) => console.log(error))