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


// Rest(...) operator :
// When we don't know that how many parameters pass in the function then we use rest operator and it gives the value in the form of array

// this "..." also known as sprade operator in the terms of uses

function calculateCartItemPrice(...price) {
    return price

}

console.log(calculateCartItemPrice(23234, 123, 123, 343, 546, 567));//[ 23234, 123, 123, 343, 546, 567 ]

//pass object in function:
const userData = {
    username: 'Avinash',
    mobile: '348762873'
}

const userData2 = {
    username: 'Avinash',
    phone: '348762873'
}

function passObjectData(anyObject) { //it is a genrice form of passing the any object into the this function

    console.log(`My name is ${anyObject.username} and my mobile no is ${anyObject.mobile}`)

}

passObjectData(userData)//My name is Avinash and my mobile no is 348762873
passObjectData(userData2)//My name is Avinash and my mobile no is undefined
//in the above function call, function had return an undefined value. beacuse in the above funcation calling we pass an another object which is "userData2"
// and the "userData2 has not any parameter named mobile but we are trying to call mobile under the function thats why we are getting undefined value behalf of mobile argument"

passObjectData({
    username: "Mukesh",
    mobile: "95769857465"
})//My name is Mukesh and my mobile no is 95769857465


const dataList = ["Avi", "sam", "suju"]

function passArrayData(anyArray) {
    console.log(anyArray[0]);
}

passArrayData(dataList)//Avi
passArrayData([1, 2, 3, 3, 4, 4, 4, 4, 3, 555, 567])//1



