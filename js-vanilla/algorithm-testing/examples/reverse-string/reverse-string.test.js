const { describe, it } = require('node:test');
const reverseString = require('./reverse-string');

describe('Reverse String', () => {
    test('reverses string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('It should be a function', () => {
        expect(typeof reverseString).toBe('function');
    });

    it('should return a string', () => {
        expect(typeof reverseString('hello')).toEqual('string');
    });

    it('should return the reverse of the string', () => {
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('John')).toEqual('nhoJ');
        expect(reverseString('poop')).toEqual('poop');
        expect(reverseString('George')).toEqual('egroeG');
    });
});