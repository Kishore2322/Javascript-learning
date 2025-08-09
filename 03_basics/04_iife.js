// Immediately Invoked Function Expressions (IIFE)

// function dbConnection(){
//     console.log(`DB CONNECTED`);
// }
// dbConnection()


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Kishore')