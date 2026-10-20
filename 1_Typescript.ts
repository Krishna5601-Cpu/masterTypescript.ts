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

// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(10, 20)); // 30

// function print(a: number | string | boolean): void {
//   console.log(a);
// }

// function welcome(name: string, age?: number): void {
//   console.log(`Hello, ${name}`);

//   if (age !== undefined) {
//     console.log(`Age: ${age}`);
//   }
// }

// welcome("Krishna");
// welcome("Krishna", 20);

// function greet(name: string = "Guest"): void {
//   console.log(`Hello, ${name}!`);
// }

// greet(); // Hello, Guest!
// greet("Krishna"); // Hello, Krishna!

// const multiply = (a: number, b: number): number => {
//   return a * b;
// };

// console.log(multiply(4, 5)); // 20

// const square = (n: number): number => n * n;

// console.log(square(5)); // 25

// const calculateTotal = (
//   price: number,
//   quantity: number,
//   discount: number = 0,
// ): number => {
//   const totalPrice = price * quantity - discount;
//   return totalPrice;
// };

// console.log(calculateTotal(100, 2)); // 200
// console.log(calculateTotal(100, 2, 50)); // 150

// Array, tuples and objects

// // Arrays
// const nums: number[] = [2, 2, 34, 56, 78];
// nums.push(3);
// nums.push(34);
// nums.pop();

// const marks: number[] = [85, 90, 95];
// const names: string[] = ["Krishna", "Rahul"];

// marks.push(88); //
// // marks.push("ninety"); Errors

// // Tuples
// const person: [string, number] = ["Krishna", 20];
// const user: [string, number] = ["Bugu", 20];

// console.log(user[0]); // Krishna
// console.log(user[1]); // 20

// // Objects

// const people: {
//   name: string;
//   age: number;
//   isAlive: boolean;
// } = {
//   name: "Bhumika",
//   age: 19,
//   isAlive: true,
// };

// console.log(people.isAlive, people.name, people.isAlive);

// const product: {
//   name: string;
//   price: number;
//   inStock: boolean;
//   tags: string[];
// } = {
//   name: "Divya kii ice cream",
//   price: 999999999,
//   inStock: true,
//   tags: ["D", "I", "V", "Y", "A"],
// };

// // Type and Interfaces

// // Type

// type Product = {
//   name: string;
//   price: number;
//   inStock: boolean;
// };

// const product1: Product = {
//   name: "Divya kii favourite ice cream",
//   price: 7678230251,
//   inStock: true,
// };

// const product2: Product = {
//   name: "Pizza",
//   price: 300,
//   inStock: false,
// };

// // Interface

// interface Student {
//   name: string;
//   price: number;
//   inStock: boolean;
// }

// const s1: Student = {
//   name: "Krishna",
//   price: 99999999999,
//   inStock: false,
// };

// interface Student2 {
//   name: string;
//   age: number;
//   course: string;
// }

// const student1: Student2 = {
//   name: "Krishna",
//   age: 20,
//   course: "BCA",
// };

// interface User {
//   name: string;
// }

// interface Admin extends User {
//   powers: string[];
// };

// interface User {
//   name: string;
// }

// interface Admin extends User {
//   permissions: string[];
// }

// const admin: Admin = {
//   name: "Krishna",
//   permissions: ["read", "write", "delete"],
// };

// type User = {
//   name: string;
// };

// type Admin = User & {
//   permissions: string[];
// };

interface Product {
  readonly id: number;
  name: string;
  discount?: number;
}

const item: Product = {
  id: 101,
  name: "Ice Cream",
};

item.name = "Chocolate Ice Cream";
item.discount = 10;
// item.id = 102;

interface Course {
  name: string;
  price: number;
  duration: string;
  isAvailable: boolean;
  rating?: number;
}

const webDev: Course = {
  name: "Web Dev",
  price: 1500,
  duration: "3 months",
  isAvailable: true,
  rating: 9.9,
};

const aiDev: Course = {
  name: "Ai Dev",
  price: 1499,
  duration: "3 months",
  isAvailable: true,
};
