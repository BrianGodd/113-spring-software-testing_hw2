const Calc = require('../Calc');
const test = require('node:test');
const assert = require('assert');

test('subtracts 5 + 3 to equal 8', () => {
    assert.strictEqual(Calc.add(5, 3), 8, "5+3=8");
});

test('subtracts 5 - 3 to equal 2', () => {
    assert.strictEqual(Calc.subtract(5, 3), 2, "5-3=2");
});

test('multiplies 5 * 3 to equal 15', () => {
    assert.strictEqual(Calc.multiply(5, 3), 15, "5-3=2");
});

test('divides 15 / 3 to equal 5', () => {
    assert.strictEqual(Calc.divide(15, 3), 5, "15/3=5");
});

test('divides 15 / 2 to equal 7.5 (floating point)', () => {
    assert.strictEqual(Calc.divide(15, 2), 7.5, "15/2=7.5");
});

test('divides 15 / 0 to equal throwError', () => {
    assert.throws(() => {
        Calc.divide(15, 0);
    }, {
        name: 'Error',
        message: 'Division by zero'
    });
});