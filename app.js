// Person Constructor
// function Person(name, dob){
//     this.name = name; // property; "this" refers to the current instance of the object
//     //this.age = age;
//     this.birthday = new Date(dob);
//     // Method
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime(); // common formula to calc age from birthdate
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// // Instantiating an Object
// // const brad = new Person('Brad', 36);
// // const john = new Person('John', 30);

// const brad = new Person('Brad', '9-10-1981');

// console.log(brad.calculateAge());

// BUILT IN CONSTRUCTORS

// // String
// const name1 = 'Jeff';
// const name2 = new String('Jeff'); // this is weird and unlikely to be used

// // name2.foo = 'bar';
// // console.group(name1);
// // console.group(name2);

// console.log(typeof name1); // labeled as a string
// console.log(typeof name2); // labeled as an object

// if(name1 === 'Jeff'){ // returns yes
//     console.log('YES');
// } else{
//     console.log('NO');
// }

// if(name2 === 'Jeff'){ // returns no because it is checking the string TYPE; would have to use == to get yes
//     console.log('YES');
// } else{
//     console.log('NO');
// }

// // Number
// const num1 = 5; // labeled as a number
// const num2 = new Number(5); // labeled as an object

// // Boolean
// const bool1 = true; 
// const bool2 = new Boolean(true); //object

// // Function
// const getSum1 = function(x,y){
//     return x+y;
// }

// const getSum2 = new Function('x', 'y', 'return 1 + 1');

// console.log(getSum1(1,1));
// console.log(getSum2(1,1));

// // Object
// const john1 = {
//     name: 'John'
// }
// const john2 = new Object({
//     name: "John"
// })

// console.log(john1);
// console.log(john2);

// // Arrays
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// console.log(arr1);
// console.log(arr2);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re1);
// console.log(re2);

// PROTOTYPES
