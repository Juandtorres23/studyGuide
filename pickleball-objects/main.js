class Paddles {
    constructor(brand, name, style, color, size, material, price) {
        this.brand = brand;
        this.name = name;
        this.style = style;
        this.color = color;
        this.size = size;
        this.material = material;
        this.price = price;
    };

    paddleSummary() {
        return `The ${this.name} paddle is produced by ${this.brand} and is a ${this.style} style with a size of ${this.size}. It is made with ${this.material} and comes in ${this.color} for the price of ${this.price}.`
    }
};

class wiffleBalls {
    constructor(name, brand, surface, color, price, quantity, aproved) {
        this.name = name;
        this.brand = brand;
        this.surface = surface;
        this.color = color;
        this.price = price;
        this.quantity = quantity;
        this.aproved = aproved;
    }
};


// Instantiate Paddle
const paddle1 = new Paddles('Selkirk', 'LUXX Control Air', 'control', 'white/black', '16mm', 'Florek Carbon Fiber', '$250');

const paddle2 = new Paddles('Bread & Butter', 'The Invader', 'hybrid', 'purple', '16mm', 'T-700 CF x Electroplated Polyester Weave', '$189.99');

const paddle3 = new Paddles('Holbrook', 'Pro - Aero Metallic T', 'hybrid', 'black', '14mm', 'Metallic Poly Carbon Fiber Weave', '$219.99' );

// Instantiate Ball
const ball1 = new wiffleBalls('VPRO Flight', 'Vulcan', 'outdoor', 'yellow', '$11.99', '3-pack', true);

const ball2 = new wiffleBalls('Pro S1', 'Selkirk', 'outdoor', 'yellow', '$12.99', '4-pack', true);

const ball3 = new wiffleBalls('X-40 Performance', 'Franklin', 'outdoor', 'yellow', '$12.99', '3-pack', true)

console.log(paddle3.paddleSummary())