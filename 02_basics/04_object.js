//2. Contractor (Singleton) :
// Object.create

const tinderUser = new Object() //There is no diffrence bitween object dic
// console.log(tinderUser);// {}

tinderUser.id = "1"
tinderUser.name = "Avinash"
tinderUser.email = "avinash@google.com"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
//Response:
/*{
    id: '1',
    name: 'Avinash',
    email: 'avinash@google.com',
    isLoggedIn: false
  }*/

const newUser = new Object()
newUser.id = 1234342
newUser.email = "ak@google.com"
newUser.fullName = {
    name: "Avinash",
    middleName: "Kumar",
    lastName: "Roy"
}

// console.log(newUser);

//Now We can see how we concatinate the two or more object

//wrong way
const obj3 = { tinderUser, newUser }
// console.log(obj3);
//response:
/*{
  tinderUser: {
    id: '1',
    name: 'Avinash',
    email: 'avinash@google.com',
    isLoggedIn: false
  },
  newUser: {
    id: 1234342,
    email: 'ak@google.com',
    fullName: { name: 'Avinash', middleName: 'Kumar', lastName: 'Roy' }
  }
} */

//Right Way:
const obj4 = Object.assign({}, tinderUser, newUser)//Always remamber that the source object straucture should be same otherwise 
// it should be return an unexpected result like this:



console.log(obj4);
/*
Here our soure object:
tinderUser: {
    id: '1',
    name: 'Avinash',
    email: 'avinash@google.com',
    isLoggedIn: false
  },
  newUser: {
    id: 1234342,
    email: 'ak@google.com',
    fullName: { name: 'Avinash', middleName: 'Kumar', lastName: 'Roy' }
  } */

// After concatinate it return this result:
/*
{
id: 1234342,
name: 'Avinash',
email: 'ak@google.com',
isLoggedIn: false,
fullName: { name: 'Avinash', middleName: 'Kumar', lastName: 'Roy' }
}

If key will same then after concatinate it update the last source value into this key value.
*/

const obj1 = {
    1: 'a',
    2: 'b',
}
const obj2 = {
    3: 'a',
    4: 'b',
}
const obj5 = {
    5: 'a',
    6: 'b',
}
//syntext: Object(target,...source)
const obj6 = Object.assign({}, obj1, obj2, obj5)
console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// other way to concatinate is: (Mostly used syntext)
const obj7 = { ...obj1, ...obj2, ...obj5 }
console.log(obj7); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


console.log(tinderUser);
/*{
  id: '1',
  name: 'Avinash',
  email: 'avinash@google.com',
  isLoggedIn: false
} */
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'email', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '1', 'Avinash', 'avinash@google.com', false ]
console.log(Object.entries(tinderUser));
/**[
  [ 'id', '1' ],
  [ 'name', 'Avinash' ],
  [ 'email', 'avinash@google.com' ],
 ] */
console.log(tinderUser.hasOwnProperty('name'));//true


