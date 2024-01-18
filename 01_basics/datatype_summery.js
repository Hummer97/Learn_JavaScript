// Types of datatypes:
//1. primitive dataType.
//2. Non primitive dataType (Reference dataType)


//Primitive Data Type :
//String,Numbers,Boolean,null,undefined,symbol,BigInt
const name = "Avinsh" //String
const age = 26 //number
const marks = 98.7 //number
const area = null //null
const isLoggedIn = false //boolean
let address; //undefined

let value1 = Symbol('123')
let value2 = Symbol('123') //both value is different because symbol treated this value as unique. 

//let check the authentication as well :
console.log(value1 == value2); //false
console.log(value1 === value2); //false
console.log(value1); //Symbol(123) 
console.log(value2); //Symbol(123) 

//Non primitive dataType (Reference dataType)
// Array, objects, functions

const heros = ["Shaktiman","Iron Man","Spider Man"]; //array
const objetList = {
    name:"Avinash",
    age:22
} //object

const myFunction = function(){
    console.log("This is my function");
} //function

// ++++++++++++++++++++++++++About Memory+++++++++++++++++++++++++++++++++++++
//There are two types of memory are used:
//1. Stack : all the premitive dataType are stored in stack and stack always given copy of the data whenever we want to use that data.
//2.Heap : Other hand no premitive dataType are stored in heap and whenever we want to use the data it give the refrence of the original data.

//Stack example:
let myName = "Avinash"
let yourName = myName
console.log(yourName); //Avinash
yourName = "Sameer"
console.log(myName); //Avinash
console.log(yourName); //Sameer
//In this variable gives the copy of the original value so there is no change reflecting on the original value.

//Heap example:
let userOne = {
    email : "avinash@gmail.com",
    code : "IN",
}
console.log(userOne.email); //avinash@gmail.com
let userTwo = userOne
userTwo.email = "Ramesh@gmail.com"
console.log(userOne.email); //Ramesh@gmail.com
console.log(userTwo.email);//Ramesh@gmail.com
// In this case variable gives the original refrence of the data so whenever we change the value it changed into original reference value.