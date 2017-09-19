const car = {
    model: 2,
    color: 'silver',
    x: 100,
    y: 200,
    doors: 4,
    tires: 4,
    maxSpeed: 160,
    price: 15000,
    calculatePrice: calculatePrice
};

function calculatePrice(vat) {
    return this.price * (vat/100);

    }
    console.log(car);
    console.log(car.calculatePrice(23));