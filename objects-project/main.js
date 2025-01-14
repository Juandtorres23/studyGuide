// Long way to create objects literals

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

// constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;


    // this.getSummary = function()  {
    //     return `${this.title} was written by ${this.author} in ${this.year}`;
    // }
    // We shouldnt put functions straight into constructors but create a prototype that is separate
};

// getSummary prototype
Book.prototype.getSummary = function()  {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013')


// inheritence
// creating magazines with some of the properties of book
// Magazine Constructor

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype 
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// Use Magazine Constructor 
Magazine.prototype.constructor = Magazine;

// Object Of Protos
const bookProtos = {
    getSummary: function() {
        
    }
}