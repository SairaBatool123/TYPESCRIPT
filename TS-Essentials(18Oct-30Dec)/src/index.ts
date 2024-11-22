// ----------------------------------------- PRACTICE QUESTIONS---------------------------------
// Example
// Without strict mode:
// ​​function add(a, a) {
//   return a + a; // No error
// }
// With strict mode:
"use strict"; 
function Mul(c: number, d : number) { // Error: Duplicate parameter name not allowed return a + a; 
  return c + d;
}
console.log(Mul(4,4));


// ################# Explicit Type ################# 
// Example 
let userName: string = "Afeefa"; 
userName = "Mohsen";             
// userName = 123;               // ❌ Error: 'number' is not assignable to type 'string'

let isActive: boolean = true;    // ✅ assignable to type 'boolean'              

// ################# Implicit Type ################# 
// Example
let myName = "Saira";           // TypeScript infers that `name` is a string
// myName = 123;                 // ❌ Error: Type 'number' is not assignable to type 'string'

let a;           
a = "sana"; 
a = 1;                           // ✅ Valid but updated value appear!
console.log(a);  


// -----------------------------------DATA TYPES WITH EXAMPLE--------------------------------

// ##################### String ###########################

let firstName: string = "Saira";
let greeting: string = `Hello, ${firstName}`;
console.log(greeting); // Outputs: Hello, Saira

// ##################### Number ###########################

let age: number = 25;
let price: number = 99.99;

// ##################### Boolean ###########################

let isOnline: boolean = true;

// Example 
let isAuthenticated: boolean = false;
function login(username: string, password: string) {
   
    if (username === "user1234" && password === "password123") {
        isAuthenticated = true;
        console.log("User successfully logged in!");
    } else {
        console.log("Invalid credentials.");
    }
}
login("user123", "password123");  


// null and undefined
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// ##################### TUPLE ###########################

let person: [string, number] = ['Alice', 30];
console.log(person[0]);
console.log(person[1]);

// ##################### ENUM ###########################

enum Days{
  monday,tues,friday
}
console.log(Days.monday); //0
console.log(Days[2]);     //friday

enum dayInString{
  Monday="mon",Tuesday = "tues"
}
console.log(dayInString.Monday);  //mon


