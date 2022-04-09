const fizzbuzz = require('../src/index')
describe('Rule 1, Normal Numbers returned as strings', () => {
    test('given 1, return \'1\'', () => {
        expect(fizzbuzz(1)).toBe('1');
    });

    test('given 2, return \'2\'', () => {
        expect(fizzbuzz(2)).toBe('2');
    });
});

describe('Rule 2, Divisible by 3 is \'Fizz\'', () => {

    test('given 3, return \'Fizz\'', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    });

    test('given 6, return \'Fizz\'', () => {
        expect(fizzbuzz(6)).toBe('Fizz');
    });
});

describe('Rule 3, Divisible by 5 is \'Buzz\'', () => {
    test('given 5, return \'Buzz\'', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    });

    test('given 10, return \'Buzz\'', () => {
        expect(fizzbuzz(10)).toBe('Buzz');
    });
});
