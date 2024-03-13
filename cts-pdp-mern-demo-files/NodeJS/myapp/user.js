function sayHello(name) {
    return `Hello ${name}`;
}

function sayNamaste(name) {
    return `Namaste ${name}`;
}

const person = {
    name: 'Peter',
    age: 30
}

module.exports = { sayHello, sayNamaste, person };