// Primitive Types
// string, number, boolean, undefined, null

//Object Types
// An Object
// Array
// Date

// let fruits = ['Apple', 'Mango', 'Grapes', 'Banana', 'Pineapple'];

// let arr = [10, 'One', 10.5, 12, true];

// let len = fruits.push('Papaya');

// console.log(len);
// console.log(fruits);

// let item = fruits.pop();
// console.log(item);
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (var i of fruits) {
//     console.log(i);
// }

// fruits.forEach(function (val, i) {
//     console.log(val);
// });

// fruits.map(function (val, i, arr) {

// });

// let x = 12.5;
// console.log(typeof (x));

// // Reducer function
// let num = [10, 5, 45, 78, 63, 12, 21, 30];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum = sum + num[i];
// }
// console.log(sum);


// let result = num.reduce(function (sum, num) {
//     console.log(sum);
//     console.log(num);
//     return sum + num;
// })

// console.log(result);

// // Jagged Array
// let arr2 = [1, 2, [3, 4, 5], [6, 7], [8, 9, 10, 11], 12];
// console.log(arr2);

// let res = arr2.reduce(function (a, b) {
//     return a.concat(b);
// }, []);

// console.log(res);

// let res2 = arr2.flat();
// console.log(res2);

// num.splice(1, 1, 201);
// console.log(num);

let products = [
    { id: 1, name: 'Laptop', brand: 'Dell', quantity: 5, price: 35000 },
    { id: 2, name: 'Tablet', brand: 'Lenovo', quantity: 7, price: 15000 },
    { id: 3, name: 'Camera', brand: 'Canon', quantity: 3, price: 56000 },
    { id: 4, name: 'Mobile', brand: 'Samsung', quantity: 8, price: 9000 },
    { id: 5, name: 'Pendrive', brand: 'Kingston', quantity: 4, price: 500 },
];

// let result = products.filter(function (item) {
//     return item.price > 30000
// });

let result = products.filter(item => item.price > 30000);
console.log(result);

let res = products.find(x => x.price > 30000);
console.log(res);

function Sum(...params) {
    return params.reduce((a, b) => a + b);
}

console.log(Sum(10, 20, 30, 40, 50));

let arr1 = [10, 20, 30, 40];
let arr2 = [1, 2, 3, 4, 5];

console.log([...arr1, ...arr2]);