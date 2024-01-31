// There are two type of object declaration :
//1. litreal
//2. Contractor (Singleton) :
// Object.create





// 1. Object literals:
const mySym = Symbol("MyKey") // symbol declared here
const jsUser = {
    name: "Avinash",
    "full name": "Avinash Roy",
    [mySym]: "my symbole", // pass symbol here
    email: "Avinash@google.com",
    age: 18,
    isLoggedIn: false,
    lastLoginDays: ['Mon', 'wed', 'sat']
}

// Now we can call these object value by two ways:
//1.
console.log(jsUser.name);//Avinash

//2.
console.log(jsUser["email"]);//Avinash@google.com
//Why we need to call value through these type of declaration ?
// Beacase it is used in complex key calling means  spouse that here is a key called "full name" then there is only way to call this keys value via squire notation
// something like that:
console.log(jsUser["full name"]); //Avinash roy
console.log(jsUser[mySym]); //my symbole

jsUser.email = "Avinash@gmail.com" // modification in value we can do it like this
// Object.freeze(jsUser) //It is used to lock the object after using this syntax. we can not modify anything into this object.
jsUser.email = "Avinash@gmailsadad.com" // this changes not be updated into object beacuse jsUser object is freeze right now.
console.log(jsUser);//{
//     name: 'Avinash',
//     'full name': 'Avinash Roy',
//     email: 'Avinash@gmail.com',
//     age: 18,
//     isLoggedIn: false,
//     lastLoginDays: [ 'Mon', 'wed', 'sat' ],
//     [Symbol(MyKey)]: 'my symbole'
//   }

jsUser.greeting = function () {
    console.log("Hello Users");
}
jsUser.greetingTwo = function () {
    console.log(`Hello Users ${this.name}`);
}

console.log(jsUser.greeting); //undefined
console.log(jsUser.greeting()); //Hello Users
console.log(jsUser.greetingTwo()); //Hello Users Avinash
