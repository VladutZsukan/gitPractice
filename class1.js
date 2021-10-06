class Vehicle {
    constructor(model,color){
        this.model = model;
        this.color = color;
    }

    getColor() {
        return `Color of the vehicle: ${this.color} `
    }
}

let bmw = new Vehicle("BMW X3","Blue");
console.log(bmw.getColor());
console.log("Hello");