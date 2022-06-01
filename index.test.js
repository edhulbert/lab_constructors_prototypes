const {Car} = require("./index");

describe("Car class", () => {
    test("can get manufacturer", () => {
        const car = new Car("Audi", 1200, "V8");
        actual = car.getManufacturer();
        expected = "Audi";
        expect(actual).toBe(expected);
    });
    test("can get price", () => {
        const car = new Car("Audi", 1200, "V8");
        actual = car.getPrice();
        expected = 1200;
        expect(actual).toBe(expected);
    });
    test("can get engine type", () => {
        const car = new Car("Audi", 1200, "V8");
        actual = car.getEngineType();
        expected = "V8";
        expect(actual).toBe(expected);
    });
    test("can set manufacturer", () => {
        const car = new Car("Audi", 1200, "V8");
        car.setManufacturer("Ford")
        actual = car.getManufacturer();
        expected = "Ford";
        expect(actual).toBe(expected);
    });
    
})