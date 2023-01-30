const { add, sub, mul, div } = require('../app/calculator');
const { expect } = require('chai');

describe('add', () => {
    it('should return the sum of two numbers', () => {
        expect(add(5, 2)).to.equal(7);
    });
    it('should not return the sum of two numbers', () => {
        expect(add(5, 2)).to.not.equal(8);
    });
});

describe('sub', () => {
    it('should return the difference of two numbers', () => {
        expect(sub(5, 2)).to.equal(3);
    });
    it('should not return the difference of two numbers', () => {
        expect(sub(5, 2)).to.not.equal(5);
    });
});

describe('mul', () => {
    it('should return the product of two numbers', () => {
        expect(mul(5, 2)).to.equal(10);
    });
    it('should not return the product of two numbers', () => {
        expect(mul(5, 2)).to.not.equal(12);
    });
});

describe('div', () => {
    it('should return the quotient of two numbers', () => {
        expect(div(10, 2)).to.equal(5);
    });
    it('should not return the quotient of two numbers', () => {
        expect(div(10, 2)).to.not.equal(2);
    });
});