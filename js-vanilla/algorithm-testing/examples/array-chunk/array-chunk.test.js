const assert = require('assert');
const chunk = require('./array-chunk');

describe('Array Chunking', () => {
    it('should create chunks of a given size', () => {
        assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
        assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
    });
});