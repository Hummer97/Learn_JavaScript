//array
const myArr = [0,1,2,3,4,5,6,"Avinash",true]
const heros = ['Iron Man','Spider Man','Shaktiman']
console.log(myArr[0]);//0

//array method
myArr.push(7)
myArr.push(8)
myArr.pop()
myArr.unshift(9) // Basically this method is used to add data into front of the row. but, the disadvantage of this method is it shif all the older data index.
myArr.shift() //basically this method is used to remove data from front of the array. 
console.log(myArr);// [ 0, 1, 2, 3, 4, 5, 6, 'Avinash', true, 7 ]
console.log(myArr.includes(9));//false
console.log(myArr.indexOf(9));//-1 

const newArr = myArr.join()
console.log(newArr); //0,1,2,3,4,5,6,Avinash,true,7
console.log(typeof newArr);//String


console.log("A" , myArr);// A [ 0, 1, 2, 3, 4, 5, 6, 'Avinash', true, 7 ]
const myNA1 = myArr.slice(1,3)
console.log(myNA1); // [ 1, 2 ]
console.log("B" , myArr);// B [ 0, 1, 2, 3, 4, 5, 6, 'Avinash', true, 7 ]

// Here Splice is manipulat the original array and also remove the splice range value from the original array. 
const myNA2 = myArr.splice(1,3)
console.log(myNA2);// [ 1, 2, 3 ]
console.log("C" , myArr);// C [ 0, 4, 5, 6, 'Avinash', true, 7 ]

//The major difference between Slice and Splice is 
//Slice: fetch the value from given range excluding the last range value without manipulating the original array.
//Splice: But the Splice fetch the value from given rage including last range value and also it manipulated the original array.
