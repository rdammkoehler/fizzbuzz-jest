const fizzbuzz = require('../src/index')

test('given 1, return \'1\'', () => {
    expect(fizzbuzz(1)).toBe('1');
});

test('given 2, return \'2\'', () => {
    expect(fizzbuzz(2)).toBe('2');
});
