// Code goes here!
const userName = "Balint";

let age = 30;

age = 29;

//var has global and function scope

// function add(a: number, b: number) {
//   var result;
//   result = a + b;
//   return result;
// }

//console.log(result);

//let is blockbased
// {
//     let...
// }

// if (age > 20) {
//     var isOld = true;
//     let isOld = true;
// }
// console.log(isOld);

//ARROW Functions
//short version
//with default args the order counts!
const add = (a: number, b: number = 1) => a + b;
//long version
const addLong = (a: number, b: number) => {
  return a + b;
};

// console.log(add(2, 5));

const printOutput = (output: string | number) => console.log(output);
// const printOutput:  (a: string | number) => void = output => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
// console.log(hobbies[0]);
//nice feature if we wanna extract all values in an array
const activeHobbies = ["Hiking"];

//activeHobbies.push(hobbies[0]); //<- old method
activeHobbies.push(...hobbies);

const person = {
  name: "Max",
  age: 30,
};

//the pointer will be given here to the copiedPerson variable
// const copiedPerson = person;

//perfect copy of the person object
const copiedPerson = { ...person };
