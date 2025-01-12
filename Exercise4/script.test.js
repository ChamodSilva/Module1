const {add, subtract, multiply, divide} = require('./script.js');

//Unit tests for add function:
test('Adds 1 to 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('Adds 99 to 10 to equal 109', () => {
    expect(add(99, 10)).toBe(109);
});

test('Adds 76 to 978 to equal 1054', () => {
    expect(add(76, 978)).toBe(1054);
});

//Unit tests for subtract function:
test('Subtracts 92 from 20 to equal -72', () => {
    expect(subtract(20, 92)).toBe(-72);
});

test('Subtracts 89 from -87 to equal -176', () => {
    expect(subtract(-87, 89)).toBe(-176);
});

test('Subtracts 1 from 3 to equal 2', () => {
    expect(subtract(3, 1)).toBe(2);
});

//Unit tests for multiply function:
test('Multiplies 1 and 2 to equal 3', () => {
    expect(multiply(1, 2)).toBe(2);
});

test('Multiplies 99 and 10 to equal 418347', () => {
    expect(multiply(989, 423)).toBe(418347);
});

test('Multiplies -234 and 35 to equal -8190', () => {
    expect(multiply(-234, 35)).toBe(-8190);
});

//Unit tests for divide function:
test('Divides 2 from 20 to equal 10', () => {
    expect(divide(20, 2)).toBe(10);
});

test('Divides 12 from 144 to equal 12', () => {
    expect(divide(144, 12)).toBe(12);
});

test('Divides 70 from -70000 to equal 2', () => {
    expect(divide(-70000, 70)).toBe(-1000);
});