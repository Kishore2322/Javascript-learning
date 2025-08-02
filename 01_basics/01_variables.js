const accountId = 14423
let accountEmail = "Kishoreg4200@gmail.com"
var accountPassword = 345
accountCity = "Bengaluru"
let accountState;

// accountId = 2   //not allowed to change const variable

accountEmail = "Kishoreg14881@gmail.com"
accountPassword = 34512
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
