function Car(id, brand, model, price) {
    var _id = id;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.calculatePrice = function (vat) {
        return this.price * (1 + (vat / 100));
    }
    this.getName = function () {
        return this.model + ' ' + this.brand;
    }
    this.getId = function () {
        return _id + getName ();
    }
}

var car1 = new Car(1,'Mazda', '2', 100000);
var car2 = new Car(2,'Honda', 'Civic', 5000);
console.log(car1);
console.log(car1.model);
console.log(car1.calculatePrice(7));

console.log(car2);
console.log(car2.model);
console.log(car2.calculatePrice(7));