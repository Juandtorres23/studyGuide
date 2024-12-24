let name = 'juan';
console.log(name)

// object
let person = {
    name: 'Juan',
    age: 30
};

//dot notation
person.name = 'john';

//bracket notation
person['name'] = 'mary';

// array
let selectedColors = ['red', 'blue'];

// functions
function greet(name, lastName) {
    // console.log('Hello' + name + ' ' + lastName) concatonate
    console.log(`Hello ${name} ${lastName}`);
    // templet literal
}

greet('John', 'Smith');