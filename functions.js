// function function_name() {
//   // function body
// }

// // how to use
// // invocation / call
// // function_name();

// // ? function declaration

// // function greet() {
// //   console.log("Good morning");
// // }

// // greet();

// // with parameter (input)
// // let name = "";
// // console.log(name);

// // function greet(name, age) {
// //   console.log("Good morning", name, age);
// // }

// // greet("Alice", 12);

// // greet("BOb", 30);

// // TODO : add(a,b)
// //! add() -

// // function add(a, b) {
// //   console.log(a + b);
// // }

// // add(23, 35);

// // ? Default parameters
// function greet(name = "Guest", age = 20) {
//   console.log("Good morning", name, age);
// }

// // console.log(name)
// greet("Alice");
// greet("Alice", 32);
// greet();

// // ? with return type
// // return

// function mult(a = 0, b = 0) {
//   return a * b;
// }

// const result = mult(10, 4);

// console.log(mult(10, 4));
// console.log(mult());

// // arith

// function isAdult(age = 18) {
//   return age >= 18;
// }

// console.log(isAdult(20));
// console.log(isAdult(16));
// console.log(isAdult());

// ? function expression (with no function name)
// ? anonymous function (nameless)
// const x = 10 + 20

// let x = 10 ,z =40;
// let y = 30;

// x = 10;

// function sayGoodMorning() {
//   console.log("Good morning");
// }

// sayGoodMorning();

// const greet = function () {
//   console.log("Hello world");
// };
// greet();

// add()

// const x = 123;

// console.log(false);

// let a = 10,
//   b = 20;

// console.log(a);

// const add = function (num1, num2) {
//   // const sum = num1 + num2;
//   // console.log(sum);
//   return num1 + num2;
// };

// const result = add(12, 23);

// console.log("result", result);

//! arrow function
// expression (anonymous)

// const mult = function (a, b)  {
//   return a * b;
// };

// const mult = (a, b) => {
//   return a * b;
// };

// const result = mult(12, 4);
// console.log("mult result", result);

// TODO:
//? declaration 3-5
// function add(a,b){

// }
//? expression 3-5
//const add =  function (a,b){

// }
//? arrow 3-5

//const add = (a,b) => {

// }

// function declaration

// {

// }

// function function_name (){
//   // body
// }

// function multiplication(a, b) {
//   // const result = a * b;
//   // console.log(result);
//   return a * b;
// }

// const result = multiplication(12, 4);

// console.log(result);

//? function expression

// const x = 10;
// const y = "";

const multiplication = function (a, b) {
  return a * b;
};

// const result = multiplication(12, 4);

// console.log(result);

//? arrow (es6)
const add = (a, b) => {
  return a + b;
};

const sum = add(10, 28);
// const sum = add(110, 28);

console.log(sum);

// anonyous fuction
// w/0 name

// callback function

// const parent = function (func) {
//   let x = 10;
//   console.log("parent");
//   // child()
//   func("variable form parent");
// };

// const child = function (a) {
//   console.log("children", a);
// };

// parent(child);
// child(parent);
// child();

// higher order function
// 1. takes function as input
// 2. return function as output
// 3. both at same time

// const parent = (func) => {
//   console.log(a);
//   func()
// };

// const child = () => {
//   console.log("passed as ");
// };

// let x = 10;
// parent(child);

const parent = () => {
  console.log("parent");

  const child = () => {
    console.log("returned function");
  };

  return child;
};

const result = parent();

result();

// array
