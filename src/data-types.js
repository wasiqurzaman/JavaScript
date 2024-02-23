// typeof operator is used to know the type of data a variable is holding

let hello;

console.log(typeof hello);                     // undefined

let jsIsFun = true;

console.log(typeof jsIsFun);                   // boolean
console.log(typeof false);                     // boolean

console.log(typeof 34);                        // number
console.log(typeof "Hello World");             // string

jsIsFun = "yes";
console.log(typeof jsIsFun);                   // string

console.log(hello)                             // undefined
console.log(typeof undefined);                 // undefined =>> undefined is both a type and a value

console.log(typeof null);                      // object  =>> probably a bug in JS but it is never fixed probably for legacy reasons