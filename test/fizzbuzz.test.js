const index = require('../src/index')
describe('Rule 1, Normal Numbers returned as strings', () => {
    test('given 1, return \'1\'', () => {
        expect(index.fizzbuzz(1)).toBe('1');
    });

    test('given 2, return \'2\'', () => {
        expect(index.fizzbuzz(2)).toBe('2');
    });
});

describe('Rule 2, Divisible by 3 is \'Fizz\'', () => {

    test('given 3, return \'Fizz\'', () => {
        expect(index.fizzbuzz(3)).toBe('Fizz');
    });

    test('given 6, return \'Fizz\'', () => {
        expect(index.fizzbuzz(6)).toBe('Fizz');
    });
});

describe('Rule 3, Divisible by 5 is \'Buzz\'', () => {
    test('given 5, return \'Buzz\'', () => {
        expect(index.fizzbuzz(5)).toBe('Buzz');
    });

    test('given 10, return \'Buzz\'', () => {
        expect(index.fizzbuzz(10)).toBe('Buzz');
    });
});

describe('Rule 4, Divisible by 3 and 5 is \'FizzBuzz\'', () => {
    test('given 15, return \'FizzBuzz\'', () => {
        expect(index.fizzbuzz(15)).toBe('FizzBuzz');
    });
    test('given 30, return \'FizzBuzz\'', () => {
        expect(index.fizzbuzz(30)).toBe('FizzBuzz');
    });
});

describe('GamePlay', () => {
    const output = [];
    let realLoggingMethod = undefined;

    beforeEach(() => {
        realLoggingMethod = console.log;
        console.log = (message) => {
            output.push(message);
        };
    });

    afterEach(() => {
        console.log = realLoggingMethod;
    });

    test('starts at 1', () => {
        const expected = '1';

        index.play();

        const actual = output[0];

        expect(actual).toBe(expected);
    });

    test('ends at 100', () => {
        const expected = 'Buzz';

        index.play();

        const actual = output[99];

        expect(actual).toBe(expected);
    });
});

