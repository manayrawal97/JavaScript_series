const accountId = 12345
let Name = "Manay Rawal"
var accountPassword = "manay@710"
accountCity = "Indore"          // not recommended

// accountId = 678910  // not allowed in const variable we cannot change the value of const

// console.log(accountId);
console.table([accountId, Name, accountPassword, accountCity]);


/*
Prefer not to use 'var'
because of issue in block scope and functional scope
*/