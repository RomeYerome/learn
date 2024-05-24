const { it } = require('node:test');
const palindrome = require('./palindrome');

describe('palindrome', () => {
    it('should be a function', () => {
        expect(typeof palindrome).toBe('function');
    });

    it('should return a boolean', () => {
        expect(typeof palindrome('racecar')).toBe('boolean');
    });

    test('should return true if the string is a palindrome', () => {
        expect(palindrome('racecar')).toBe(true);
        expect(palindrome('poop')).toBe(true);
        expect(palindrome('madam')).toBeTruthy();
        expect(palindrome('nurses run')).toBeTruthy();

    });

    test('should return false if the string is not a palindrome', () => {
        expect(palindrome('hello')).toBe(false);
        expect(palindrome('hello')).toBeFalsy();
        expect(palindrome('goodbye')).toBeFalsy();
    });


}); 