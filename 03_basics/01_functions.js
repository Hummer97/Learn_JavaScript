//Learn About Function

function myDemoFunction() {
    console.log(" This is my dummy function");
}

myDemoFunction // this is called function refrence 

myDemoFunction() // this is called function excution. this syntext excute the function


// Pass the parameters in function

function writeMyName(name) {
    console.log(`${name} is my name`);
}

writeMyName("Avinash") //Avinash is my name

//Return the value from the function

function addTwoNumber(num1, num2) {
    return num1 + num2
}

const result = addTwoNumber(73, 23)
console.log(result);//96


// Check the data write or not

// function userLoggedIn(username) {

//     return `${username} logged in successfully`

// }
// console.log(userLoggedIn()); //undefined logged in successfully
// console.log(userLoggedIn("Avinash")); //Avinash logged in successfully

function userLoggedIn(username) {
    if (username === undefined) {
        console.log('Please pass the username');
        return
    }
    return `${username} logged in successfully`

}

console.log(userLoggedIn());
/*
    Please pass the username
    undefined //this undefined value come from the empty return which we return in the condition of no user name. 
*/
console.log(userLoggedIn("Avinash")); //Avinash logged in successfully

