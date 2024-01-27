const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

//Because precision range depands on my number so always take care of it.
const otherName = 23.8907
console.log(otherName.toPrecision(3));// 23.9
const otherName1 = 123.8907
console.log(otherName1.toPrecision(3));// 124
const otherName2 = 1123.8907
console.log(otherName2.toPrecision(3));// 1.12e+3

const bigNumber = 1000000000
console.log(bigNumber.toLocaleString());//1,000,000,000
console.log(bigNumber.toLocaleString('en-IN'));//1,00,00,00,000


// -----------------------Maths-----------------------------

console.log(Math);

console.log(Math.abs(-56));//56

console.log(Math.round(4.7));//5

console.log(Math.ceil(4.2));//5 //taking high value
console.log(Math.floor(4.9));//4 //taking low value 

console.log(Math.min(4,6,3,2,1)); //1
console.log(Math.max(4,6,3,2,1)); //6


console.log(Math.random()); //rendom number between  0-1
console.log((Math.random()*10)+1);

const min =10
const max =20

console.log(Math.floor(Math.random()*(max -min +1))+min) //important 
