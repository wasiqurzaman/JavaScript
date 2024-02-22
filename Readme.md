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

If we the _async_ or the _defer_ attribute then the script file will be downloaded asynchronously. We'll discuss this in details later.

### Value and Variables

A value is basically a piece of data. It's the most fundamental unit of information that we have in programming.
Example: "hello", 100, 23 etc.

Variables: We can use vaiables to store values an reuse them whenever we want to.
Example: `let firstName = "John";`

Think of variable as box in real world which can hold diffrent types of items and the variable name is the label on the box.
We can use that label to find the box later. Similarly we can use the variable name to reference the variable.

```let firstName = 'John';
    console.log(firstName);                 // This will print John in the console
```

There are few benefits of using variables"

1. We can reuse the values stored in the variable.
2. We we need to change the value, we only need to change it once, not every instances of the variable.

#### Rule of Naming Variables in JavaScript

1. Variable name can not start with a number
   `let 5years = 5;       // This will cause error`

2. Variable names can only contain letters, numbers and underscore (\_) and dollar sign ($).
3. Variable names can not be reserved keywords in JavaScript.
   `let new = "New;         // This is invalid`
4. Variable names should be descriptive and meaningful. This makes our code more readable and understandable.

```let x = "Wasiqur"                // bad practice
    let firstName = "Wasiqur"       // good practice
```
