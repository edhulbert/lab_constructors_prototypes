"use strict";

const Car = function(manufacturer, price, engineType) {
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;

    this.getManufacturer = () => _manufacturer;
    this.getPrice = () =>  _price;
    this.getEngineType = () =>  _engineType;

    this.setManufacturer = (manufacturer) => _manufacturer = manufacturer;
    this.setPrice = (price) =>  _price = price;
    this.setEngineType = (engineType) =>  _engineType = engineType;
    
}

const car = new Car("Audi", 12314, "V8");
console.log(car);

module.exports = {Car};