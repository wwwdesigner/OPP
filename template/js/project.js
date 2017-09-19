
    function Car(brand, model, color, price) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price =price;
        this.calculatePrice = function (vat) {
            return price * (1 + (vat / 100));
        }
}