const getElsByTag = require('./getelsbytag');

describe('Get Elements By Tag', () => {
    it('should be a function', () => {
        expect(typeof getElsByTag).toBe('function');
    });
    it('should return an array', () => {
        expect(Array.isArray(getElsByTag())).toBe(true);
    });
    it('should return an empty array', () => {
        expect(getElsByTag()).toEqual([]);
    })
    it('should return the root element if no tagName is passed in', () => {
        const root = document.createElement('div');
        console.log([root]);
        console.log(getElsByTag(root));
        expect(getElsByTag(root)).toEqual([root]);
    });
    it('should return the correct elements', () => {
        const root = document.createElement('div');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const span = document.createElement('span');

        root.appendChild(p1);
        root.appendChild(span);
        span.appendChild(p2);

        const result = getElsByTag(root, 'p')

        expect(result).toEqual([p1, p2]);
    })
})