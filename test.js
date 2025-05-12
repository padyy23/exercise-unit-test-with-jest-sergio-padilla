const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});


test("One dollar should be approximately 146.26 yenes", function() {
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expected, 2);
});


test("10000 yen should be approximately 55.63 pounds", function() {
    const expected = (10000 / 156.5) * 0.87;
    expect(fromYenToPound(10000)).toBeCloseTo(expected, 2);
});