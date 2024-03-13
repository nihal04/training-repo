// 1. Clear & Concise Syntax
function sayHello(name) {
    return `Hello ${name}`;
}
// 2. Arrow function has Implicit return
const SayHello = (name) => `Hello ${name}`;

const GetUser = () => ({ name: 'John', age: 25 });

// console.log(sayHello('John'));
// console.log(GetUser());

// function Sum(a, b, c) {
//     console.log(arguments);
// }

const Sum = (a, b, c) => {
    console.log(arguments);
}

// Sum(10, 20, 30);

let person = {
    username: 'John',
    age: 25,
    message: () => {
        console.log(this.username);
    }
}

function Person(username, userage) {
    return {
        name: username,
        age: userage
    }
}

// This is going to have an error
// const Person = (username, userage) => {
//     return {
//         name: username,
//         age: userage
//     }
// }

var p = new Person('John', 25);
var p2 = new Person('James', 30);
console.log(p);
console.log(p2);

// person.message();

function outerFunction() {
    const username = 'John';
    function innerFunction() {
        console.log(username);
    }
    return innerFunction;
}

let res = outerFunction();
res();