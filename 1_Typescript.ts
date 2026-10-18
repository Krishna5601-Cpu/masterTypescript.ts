// // let userName: string = "Krishna";
// // // let age: number = 20;
// // const isSher: boolean = true;

// // let age: number = 20;

// // age = 25; // Valid
// // // age = "twenty"; // TypeScript error

// // console.log(userName);
// // console.log(age);
// // console.log(isSher);

// // function add(a: number, b: number): number {
// //   return a + b;
// // }

// // //  a: number -> Explicitly specify variable's type
// // // : after ) -> Enforces or tells the return type of function

// // let score = 20;
// // // score = "20"; Throws error

// let age: number = 20;
// age = 21; // Allowed

// const country: string = "India";
// // country = "USA"; // Error

// let username: string = "Krishna";
// let marks: number = 95;
// let isPassed: boolean = true;

// let marks = 95; // TypeScript infers number;

// let userid: string | number = "ID";
// userid = 15;
// // userid = true // error

// function printId(id: string | number): void {
//   console.log(id);
// }

// printId(101);
// printId("USR101");

// let data: any = 10;

// data = "Hello";
// data = true;

// console.log(typeof "String");

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20)); // 30

function print(a: number | string | boolean): void {
  console.log(a);
}

function welcome(name: string, age?: number): void {
  console.log(`Hello, ${name}`);

  if (age !== undefined) {
    console.log(`Age: ${age}`);
  }
}

welcome("Krishna");
welcome("Krishna", 20);

function greet(name: string = "Guest"): void {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Krishna"); // Hello, Krishna!

const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(4, 5)); // 20

const square = (n: number): number => n * n;

console.log(square(5)); // 25

const calculateTotal = (
  price: number,
  quantity: number,
  discount?: number,
): number => {
  let totalPrice: number;
  if (discount) {
    totalPrice = price * quantity - discount;
  } else {
    totalPrice = totalPrice = price * quantity;
  }

  return totalPrice;
};
