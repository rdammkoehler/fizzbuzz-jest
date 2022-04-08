const fizzbuzz = require('../src/index')

test('given 1 return \'1\'', () => {
    const given = 1;
    const expected = '1';

    const actual = fizzbuzz(given);

    expect(actual).toBe(expected);
});

test('given 2 return \'2\'', () => {
    expect(fizzbuzz(2)).toBe('2');
})

test('given 3 return \'Fizz\'', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
})

test('given 6 return \'Fizz\'', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
})

test('given 5 return \'Buzz\'', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
})

test('given 10 return \'Buzz\'', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
})

test('given 15 return \'FizzBuzz\'', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
})

test('given 30 return \'FizzBuzz\'', () => {
    expect(fizzbuzz(30)).toBe('FizzBuzz');
})
