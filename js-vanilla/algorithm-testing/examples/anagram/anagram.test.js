const { describe } = require('node:test');
const anagram = require('./anagram');

describe('Anagram', () => {
    it('should return true if the words are anagrams', () => {
        expect(anagram('elbow', 'below')).toBeTruthy();
        expect(anagram('Dormitory', 'dirty room')).toBeTruthy();
        expect(anagram('Conversation', 'voices rant on')).toBeTruthy();
    });

    it('should return false if the words are not anagrams', () => {
        expect(anagram('elbow', 'belows')).toBeFalsy();
        expect(anagram('Dormitory', 'dirty rooms')).toBeFalsy();
        expect(anagram('Conversation', 'voices rant ons')).toBeFalsy();
    });
});