# JavaScript

## JavaScript Basics

JavaScript is a high-level, object oriented, multi-paradigm programming language which is mainly used for web development.

> i. It's _high-level_ because we don't have to worry about complex low level stuffs like memory management (like C or C++)
>
> ii. Base on Objects, for storing most kinds of data.
>
> iii. _Multi-paradigm_ because we can use different styles of programming like imperative, declarative etc.

### Role of JavaScript in Web Development

3 core technologies of the are HTML, CSS and JavaScript

HTML - Hypertext Markup Language. HTML is used to structure the contents of the page.

CSS - Cascading Style Sheet. CSS is used for presentation of the content like styling, layouts etc.

JavaScript is used to add dynamic and interactive effects on a webpage.

Web Application Development can divided into

1. Front end Web Development
2. Back end Web Development

Linking a JavaScript file

to link an external JavaScript file with a HTML file we use the <script> tag

```
    <script src="./index.js"></script>
    <script async src="./index.js"></script>
    <script defer src="./index.js"></script>
```

If we add the _async_ or the _defer_ attribute then the script file will be downloaded asynchronously. We'll discuss this in details later.

### Value and Variables

A value is basically a piece of data. It's the most fundamental unit of information that we have in programming.
Example: "hello", 100, 23 etc.

Variables: We can use vaiables to store values an reuse them whenever we want to.
Example: `let firstName = "John";`

Think of variable as box in real world which can hold diffrent types of items and the variable name is the label on the box.
We can use that label to find the box later. Similarly we can use the variable name to reference the variable.

```
    let firstName = 'John';
    console.log(firstName);                 // This will print John in the console
```

There are few benefits of using variables"

1. We can reuse the values stored in the variable.
2. We we need to change the value, we only need to change it once, not every instances of the variable.

#### Rule of Naming Variables in JavaScript

1. Variable name can not start with a number

`let 5years = 5;                          // This will cause error`

2. Variable names can only contain letters, numbers and underscore (\_) and dollar sign ($).
3. Variable names can not be reserved keywords in JavaScript.
   `let new = "New;         // This is invalid`
4. Variable names should be descriptive and meaningful. This makes our code more readable and understandable.

```
    let x = "Wasiqur"                     // bad practice
    let firstName = "Wasiqur"             // good practice
```

### Data Types in Javascript

In every programming language values can have different types, depending on the type of data they hold.
In JavaScript every value is either an Object or a Primitive type.
A value is primitive if it's not an object.

#### Primitive Types

There are 7 primitive types in JavaScript.

1. **Number**: Floating point numbers. Used for decimals and integers. e.g. 23.0, 100 etc.
2. **String**: Sequence of characters. Used for text. e.g. "hello", "abcd..." etc.
3. **Boolean**: Logical type that can only be `true` or `false`. Used for taking decisions.
4. **undefined**: Value taken by a vaiable that is declared but not not assigned. Empty value.
5. **null**: Also mean "empty value" but it is assianable to vaiables. e.g. `let lastName = null`
6. **Symbol** (ES2015): Value that is unique and can not be changed. (not useful for now)
7. **BigInt** (ES2020): Used for larger integers than the **Number** type can hold.

JavaScript has dynamic typing:

1. We don't have to define the data type of the value stored in a variable. Instead the data type are determined automatically.
2. In JavaScript, it's the value that has a type, not the variable;
3. Variables simply stores values that have a type.
4. We can assign a new value with a different data type to the same variable without a problem. It is very useful but can be source of some bug.

```
    let x = 23;                        // number
    x = "hello";                       // string
```

### Code Commenting

Comment are part of code which is not executed by the JavaScript engine.
Single line comment

```
    // This is a single line comment.
```

Multi line comment

```
    /* This is
       a multiline comment
       because it can be
       written on multiple lines.
    */
```

### **typeof** operator

The **typeof** operator shows the types of different values.

```
let greet = "Hello";
console.log(typeof greet);                     // string

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

console.log(typeof null);                      // object  =>> probably a bug in JS
```

### Declaring variables in JavaScript: _let_, _const_ and _var_

Let's now take a look at 3 different ways to declare variables in JavaScript.

1. let
2. const
3. var

var was the old way of declaring variables while let ans const are modern way of declaring variables. let and const were added to the language in ES2015/ES6.

1. let: We use the let keyword to declare variables that can chabge later i.e. during the execution of program.

```
    let age = 20;
    age = 21;                         // reassigning a value to a variable.
```

let is used when we need to mutate a vaiable. Also, when we declare an empty variable.

2. const: We use the const keyword to declare variables that area not suposed to change at any point in future. The value in a const variable can not be changed so it is called constant variable or immutable variable.

```
    const birthYear = 2002;
    birthYear = 2000;                 // error ==> reassignment is not allowed
```

As constant variable are immutable, we can not declare empty const varables. So, const variable declaration must always be initialized.

As a best practice we should we const variables and let varibles only when we are sure that the variable needs to change at some point in the future.

3. var: var is the old way of declaring variable prior to ES2015/ES6. On the surface it works like let but there are some differences. Like let variables are block scoped and var varibales are function scoped etc. We'll learn them later in details. Declaring variables using var should be avoided in modern JavaScript.

```
    var job = "Software Engineer";
    job = "coder";
```

### Basic Operators

Let's learn about some basic operators in JavaScript.

An operator is basically allows us to perform some operation on values and variables. Like transform values or combine multiple values etc.

There are many kinds of operators:

#### 1. Mathematical/Arithmetic Operators:

1. Addition operator `+`
2. Subtraction operator `-`
3. Multiplication operator `*`
4. Division operator `/`
5. Exponent operator `**`
6. Modulo/remainder operator `%`

#### 2. Assignment Operators:

1. Assignments (basic) `=`
2. Addition assignment operator `+=`
3. Subtraction assignment operator `-=`
4. Multiplication assignment operator `*=`
5. Divition assignment operator `/=`

#### 3. Increment and Decrement Operators:

1. Prefix increment operator `++x`
2. Postfix increment operator `x++`
3. Prefix decrement operator `--x`
4. Postfix derement operator `x--`

#### 4. Comparison Operators:

1. Equality operator `==`
2. Inequality Operator `!=`
3. Strict equality operator `===`
4. Strict inequality operator `!==`
5. Greater than operator `>`
6. Greater than equal operator `>=`
7. Less than operator `<`
8. Less than equal operator `<=`

### Operator Precedence:

### Strings and Template Literals:
