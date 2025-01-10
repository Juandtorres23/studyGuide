// Long way to create objects

// let person = new Object();

// person.name = 'Daniel';
// person.eyeColor = 'Blue';
// person.age = 31;

// person.updateAge = function()  {
//     return ++person.age;
// }

// Short way to create objects


let person = {
    name: "Daniel",
    eyeColor: "Blue",
    age: 28,
    updateAge: function () {
       return ++ person.age; 
    }
}