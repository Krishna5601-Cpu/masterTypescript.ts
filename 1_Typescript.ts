let userName: string = "Krishna";
// let age: number = 20;
const isSher: boolean = true;

let age: number = 20;

age = 25; // Valid
// age = "twenty"; // TypeScript error

console.log(userName);
console.log(age);
console.log(isSher);

function add(a: number, b: number): number {
  return a + b;
}

//  a: number -> Explicitly specify variable's type
// : after ) -> Enforces or tells the return type of function

let score = 20;
// score = "20"; Throws error
