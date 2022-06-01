"use strict";

const Car = function(manufacturer, price, engineType) {
    let _manufacturer, _price, _engineType;

    this.getManufacturer = _manufacturer;
    this.getPrice = _price;
    this.getEngineType = _engineType;

    this.setManufacturer = (manufacturer) => _manufacturer = manufacturer;
    this.setPrice = (price) =>  _price = price;
    this.setEngineType = (engineType) =>  _engineType = engineType;
    
}