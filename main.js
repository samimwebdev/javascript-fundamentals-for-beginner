/* eslint-disable */

// string
// Number
// Boolean
// undefined
// symbol
// complex datatype
//     Array
//     object
//     function

// sample example datatype

// 'samim'   "Hasan"  -string
// 20  20.67864  -number
// true false  -boolean
// undefined -undefined
// Symbol ('samim')  -symbol

// let firstName = 'samim'; //string
// // const firstName = 'samim';
// const lastName = 'Fazlu';
// firstName = 'Anis';
// let age = 26; //number
// console.log(`${firstName} ${lastName}`); //calling reference
// console.log(age); //calling reference
// console.log(true); //calling reference
// console.log(undefined); //calling reference

//comment
// single line comment
/* Multi line  
    comment */
//symbol generate unique data
//console.log(Symbol('samim') === Symbol('samim'));

// const myArr = ['samim', 'Anis', 26, 'js']; //Array
// //console.log(myArr[2]);
// myArr[2] = 25;
// console.log(myArr[2]);

//function

// function profile(lng, age, myProfile) {
//   const myAge = myArr[2] - 1;
//   console.log(lng, myProfile);
//   return `I am ${myAge} and I am ${lng} programmer`;
// }
// console.log(profile('javascript', 30, myArr));

//object

// const myProfile = {
//   firstName: 'samim',
//   lastName: 'Fazlu',
//   age: 25,
//   getMyAge: function() {
//     return this.age;
//   }
// };
// myProfile.firstName = 'ANis';
// console.log(myProfile.firstName);
// console.log(myProfile.getMyAge());

//loop
//for loop
//while loop
//forEach loop
// let num = 0;
// for (; num < 10; num++) {
//   console.log(num);
// }

//while loop
// while (num < 10) {
//   console.log(num);
//   num++; //num = num +1
// }

// const myArr = ['samim', 'Anis', 25, 'js'];
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// myArr.forEach((tempVal, index) => {
//   console.log(index, tempVal);
// });

//logic
//if else

// if (myArr[2] === 26) {
//   console.log(`My age is ok`);
// } else if (myArr[2] === 25) {
//   console.log('You Are too old');
// } else {
//   console.log('My age is not right');
// }

// switch (myArr[2]) {
//   case 26:
//     {
//       console.log(`My age is ok`);
//     }
//     break;
//   case 25:
//     {
//       console.log('You Are too old');
//     }
//     break;
//   default: {
//     console.log('My age is not right');
//   }
// }

const firstName = 'samim';
const lastName = 'fazlu';
const age = 26;
const lng = ['html', 'css', 'js', 'python'];
const profile = {
  firstName,
  lastName,
  age,
  lng,
  canjoinBoot() {
    return this.lng[2] === 'js' ? 'I can join bootcamp' : "I can't join"; //ternary operator
  }
};

//function statement
//function expression
const profilBuilder = tempVar => {
  let { firstName, lastName, age } = tempVar; //object destructuring
  //Array function
  return `
  <h1>Profile</h1>
  <p>I am <i>${firstName} ${lastName}</i></p> 
  <p>and I am ${age} and  ${tempVar.canjoinBoot()}<p>`;
};
console.log(profilBuilder(profile));
document.body.innerHTML = profilBuilder(profile);

//Bonus
//======================================================
//comparision operator
//===  equal to (simple comparision)
//!== not equal  3 !== 5  //true

//3 === 5 && 5 === 5 //Multiple compaision
