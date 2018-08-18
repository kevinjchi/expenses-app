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

