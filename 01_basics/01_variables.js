const accountID = 1234123;
let acountName = "Avinash";
var accountEmail = "avinash@gmail.com";
address = "Uttarakhand";
let accountState; // in this scenario the value of this variable is undefined

//accountID = 434; // not allowed
console.log(accountID);//This syntext is used to showing single line output in terminal

/*
Prefer not to use var keyword
because of issue in block scope and functional scope 
*/

acountName = "Roy"
accountEmail = "roy@gmail.com"
address = "Noida"
//This syntext is used to showing output in tabular formate and basically use it for showing multiple variable output in same time
console.table([acountName,accountEmail,address,accountState]);