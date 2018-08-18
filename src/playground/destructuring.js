// Object destructuring
console.log('dectructuring.js');

const person = {
    name: 'Andrew',
    age: 25,
    location: {
        city: 'Temporary',
        temp: 92
    }
};

// const name = person.name;
// const age = person.age
const { name = 'NoName', age} = person;

console.log(`${name} ${age}`);

const { temp: temperature, city } = person.location;
console.log(`${temperature} ${city}`);


// ----------------------------------------
// 
// Array destructuring
//
const address = ['1299 S Street','place', 'OSLO', '0678'];
const [street, city, state, zip] = address;
// USE comma to exclue const [, , state, zip]

console.log(`${city} ${state}`);