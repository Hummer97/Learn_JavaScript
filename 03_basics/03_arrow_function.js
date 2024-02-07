const user = {
    userName: "Avinash",
    price: 999,
    //here, this is represent the current context of the object
    welcomeMessage: function () {
        console.log(`${this.userName} , welcome to the website.`); //Avinash , welcome to the website.
        console.log(this);/*
        {
            userName: 'Avinash',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        } 
          */
    }
}

// user.welcomeMessage()
// console.log(this); //{}
//Here, In node enviroment the this in global senario return {} "empty object" beacuse there are no global object are available.  
// but in the brawser the there are a global object are available which is window object thats why, 
// whenever we tryin to print consloe.log(this) in brawser it return a window object. always remamber that.

// function chai(){
//     console.log(this); // gives sevral data response
// }


// function chai() {
//     let name = "Avinash"
//     console.log(this.name); // undefined
// }
// chai()


// const chai = function() {
//     let name = "Avinash"
//     console.log(this.name); // undefined
// }
// chai()

//This is arrow function
const chai = () => {
    let name = "Avinash"
    console.log(this.name); // undefined
}
chai()

//arrow function syntext:
// ()=>{}

const addNum = (num1, num2) => {
    return num1 + num2
}

console.log(addNum(4, 5)); //9

//called Implecit return
// const addNum2 = (num1, num2) => num1 + num2
// console.log(addNum2(4, 5)); //9

// const addNum2 = (num1, num2) => (num1 + num2)

// console.log(addNum2(4, 5)); //9


// const addNum2 = () => { username: "Avinash" }

// console.log(addNum2()); //undefined


const addNum2 = () => ({ username: "Avinash" })

console.log(addNum2()); //{ username: "Avinash" }


