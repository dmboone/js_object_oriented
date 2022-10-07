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
// Object.prototype
// Person.prototype

// function Person(firstName, lastName, dob){
//     this.firstName = firstName; // these stay in the constructor because they differ for each person
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now()- this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

// // Calculate age
// Person.prototype.calculateAge = function(){ // move this to the person prototype because the function will be the same for every person
//     const diff = Date.now()- this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);
// console.log(john.calculateAge());
// console.log(mary.getFullName());
// mary.getsMarried('Smith');
// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty('firstName')); // true
// console.log(mary.hasOwnProperty('getFullName')); // false

// PROTOTYPAL INHERITANCE
// Person constructor
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//  // Greeting
//  Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//  }

//  const person1 = new Person('John', 'Doe');

//  //console.log(person1.greeting());

//  // Customer constructor
//  function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName); // inherits these properties from the Person constructor

//     this.phone = phone;
//     this.membership = membership;
//  }

//  // Inherit the Person prototype methods
//  Customer.prototype = Object.create(Person.prototype);

//  // Make customer.prototype return Customer()
//  Customer.prototype.constructor = Customer;

//  // Create customer
//  const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

//  console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }

//  console.log(customer1.greeting());

// OBJECT.CREATE
// const personPrototypes = {
//     greeting: function(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName){
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// console.log(mary);
// console.log(mary.greeting());
// mary.getsMarried('Thompson');
// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Traversy'},
//     age: {value: 36},
// });

// console.log(brad);
// console.log(brad.greeting());

// ES6 CLASSES