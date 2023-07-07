const lib = require('./index');

test('it should return an integer', () => {
    const number = lib.getRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(20);
})

test('it should return a float', () => {
    const number = lib.mean([0, 1]);
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(20);
})