class Paddles {
    constructor(brand, name, stile,color, size, material, price) {
        this.brand = brand;
        this.name = name;
        this.style = style;
        this.color = color;
        this.size = size;
        this.material = material;
        this.price = price;
    }

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
}