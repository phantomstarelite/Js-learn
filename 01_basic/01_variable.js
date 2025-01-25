const accountId = 144553
let accountEmail = "pratikkhumkar@hotmail.com"
var accountPassword = "phantom54321"
accountCity = "Akola"
let accountState;

//accountId = 2 //not allowed
accountEmail = "kckkc@outlook.com"
accountPassword = "645785"
accountCity = "Nagpur"


console.log(accountId);

/*
Prefer not to use var because of issue in block scope and function scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
