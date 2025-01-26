// #Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol ,BigInt

// Js is Dynamically type 
// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = true
const outsideTemp = null
// let userEmail = undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3455548878798748777n


// Reference type (Non Primitive)

// Array, Objects, Functions
const heros = ["iron-man", "hulk", "captain-america"]
let myob = {
    name: "Pratik",
    age: 20,
}

const myFunction = function()
{
    console.log("Hello world");
    
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);


// ******************************************************//

// Stack (Primitive), Heap (Non -Primitive)

let myYoutube = "phantomStarElite"

let anothername = myYoutube 
anothername = "pratikkhumkardotcom"

console.log(myYoutube);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "upi@ybl"
}

let userTwo =  userOne

userTwo.email = "pratik@google.com"

console.log(userOne);
console.log(userTwo);

// In js primitive value are taken from another data type original datatype will be not change

// In reference origanal value will be change 

/************************Extra Notes *******************************************************/

/*
In JavaScript, data types are broadly categorized into **primitive** and **non-primitive** types. Here's a detailed explanation of each:

---

### **Primitive Data Types**
Primitive data types are immutable and stored by value. These are the basic building blocks of JavaScript.

1. **String**: Represents textual data.
   - Example: `"Hello, World!"`, `'JavaScript'`

2. **Number**: Represents both integer and floating-point numbers.
   - Example: `42`, `3.14`, `-100`

3. **BigInt**: Used for integers that are too large to be represented by the `Number` type.
   - Example: `1234567890123456789012345678901234567890n`

4. **Boolean**: Represents a logical value: `true` or `false`.
   - Example: `true`, `false`

5. **Undefined**: A variable that has been declared but not assigned a value.
   - Example:
     ```javascript
     let x;
     console.log(x); // undefined
     ```

6. **Null**: Represents the intentional absence of a value.
   - Example:
     ```javascript
     let y = null;
     console.log(y); // null
     ```

7. **Symbol**: Represents a unique identifier, often used as object keys.
   - Example:
     ```javascript
     const sym = Symbol('unique');
     ```

---

### **Non-Primitive (Reference) Data Types**
Non-primitive data types are mutable and stored by reference.

1. **Object**: A collection of key-value pairs.
   - Example:
     ```javascript
     const person = { name: "John", age: 30 };
     ```

2. **Array**: A special type of object that stores elements in an ordered list.
   - Example:
     ```javascript
     const fruits = ["apple", "banana", "cherry"];
     ```

3. **Function**: A block of reusable code.
   - Example:
     ```javascript
     function greet() {
       console.log("Hello!");
     }
     ```

4. **Date**: Used to work with dates and times.
   - Example:
     ```javascript
     const today = new Date();
     ```

5. **RegExp**: Represents regular expressions used for pattern matching.
   - Example:
     ```javascript
     const regex = /hello/i;
     ```

6. **Map and Set**: Special types of objects for storing unique values or key-value pairs.
   - Example (Map):
     ```javascript
     const map = new Map();
     map.set('key', 'value');
     ```
   - Example (Set):
     ```javascript
     const set = new Set([1, 2, 3]);
     ```

---

### **Key Differences**
| **Primitive**                     | **Non-Primitive**                  |
|------------------------------------|-------------------------------------|
| Stored directly in the stack.      | Stored in the heap, with a reference in the stack. |
| Immutable (cannot be altered).     | Mutable (can be modified).          |
| Examples: `String`, `Number`.      | Examples: `Object`, `Array`.        |

Would you like examples or a code snippet to explain these further? 😊
*/