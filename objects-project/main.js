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
     return `${this.title} was written by ${this.author} in ${this.year}`; 
    },
    getAge: function() {
        const years = new Data().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    },
};

// create object 
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2013'

const book11 = Object.create(bookProtos, {
    title: {value: 'Book One'},
    author: {value: 'John Doe'},
    year: {value: '2013'},
});

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Data().getFullYear() - this.year;
        return `${this.title} is ${years} years old` 
    }

    revice(newYear) {
       this.year = newYear;
       this.revised = true; 
    }

    static topBookstore() {
        return 'Barnes and Noble'
    }
}


//  Instantiate Object 
const book111 = new Book('Book One', 'John Doe', '2013');

// Magazine subclasses
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag11 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');


