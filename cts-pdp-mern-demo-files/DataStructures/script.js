function CalculateSum(n) {
    let sum = 0; // this will execute once
    for (let i = 1; i <= n; i++) {
        sum = sum + i; // this will execute as many time as the input
    }
    return sum; // this will execute once
}

// console.log(CalculateSum(4));
// console.log(CalculateTotal(4));

//1+4+1
//input size + other statements which is n+2
// Big O Notation - O(n) - Linear


function CalculateTotal(n) {
    return (n * (n + 1)) / 2;
}

//Big O Notation - O(1) - Constant

function f1(n) {
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {

        }
    }
}

// Big O Notation - O(n2) - Quadratic

// if there are 3 loops the algorithm has time complexity - Big O Notation O(n3) - Cubic
// if the input size reduces by half in every iteration it is O(log(n)) - Logarithmic

let person = {
    name: 'John',
    age: 30
}

Object.keys(person);
Object.values(person);

person.name

// The operations like insert, remove or accessing the property in object have O(1)-Constant
// time complexity

// let arr = [];
// arr.forEach((val, i) => {
//     for
// })

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
        console.log(curr);
    }

}
// fibonacci(10);

//Time complexity of this algorithm is linear O(n)

// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// Time complexity is O(n) - Linear

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Time complexity is O(sqrt(n))

console.log(isPrime(5));
console.log(isPrime(15));

function CreateList(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }
    return arr;
}
// Space complexity is O(n)- Linear

console.log(CreateList(5));