const fizzbuzz = require('../src/index')
test('given 1, return \'1\'', () => {
    expect(fizzbuzz(1)).toBe('1');
});

test('given 2, return \'2\'', () => {
    expect(fizzbuzz(2)).toBe('2');
});

// Rule 2: Things divisible by 3 should return Fizz
test('given 3, return \'Fizz\'', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
});

test('given 6, return \'Fizz\'', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
});
