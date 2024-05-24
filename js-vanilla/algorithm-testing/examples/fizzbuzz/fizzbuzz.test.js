// const { describe } = require('node:test');
const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzBuzz).toBe('function');
    });

    it('should return the number if not divisble by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(2)).toBe(2);
        expect(fizzBuzz(4)).toBe(4);
    });

    it('should return Fizz if divisble by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(21)).toBe('Fizz');
    });

    it('should return Buzz if divisble by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
        expect(fizzBuzz(85)).toBe('Buzz');
    });

    it('should return FizzBuzz if divisble by 3 & 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
        expect(fizzBuzz(90)).toBe('FizzBuzz');
    });
});