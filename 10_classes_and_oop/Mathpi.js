console.log(Object.getOwnPropertyDescriptor(Math , 'PI'))

// console.log(Math.PI.va)

const myObject = {
    name: 'Kishore G',
    ID: '1VE20CS065',
    isAvailable: true,

    orderCart: function(){
        console.log("Cart is empty");
    }
}

console.log(Object.getOwnPropertyDescriptor(myObject, "name"));

Object.defineProperty(myObject, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(myObject, "name"));

for(let [key, value] of Object.entries(myObject)){
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}