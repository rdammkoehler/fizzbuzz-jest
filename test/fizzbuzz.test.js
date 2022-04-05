const index = require('../src/index')

test('given 1, return \'1\'', () => {
    expect(index.fizzbuzz(1)).toBe('1');
});

test('given 2, return \'2\'', () => {
    expect(index.fizzbuzz(2)).toBe('2');
});

test('given 3, return \'Fizz\'', () => {
    expect(index.fizzbuzz(3)).toBe('Fizz');
});

test('given 6, return \'Fizz\'', () => {
    expect(index.fizzbuzz(6)).toBe('Fizz');
});

test('given 5, return \'Buzz\'', () => {
    expect(index.fizzbuzz(5)).toBe('Buzz');
});

test('given 10, return \'Buzz\'', () => {
    expect(index.fizzbuzz(10)).toBe('Buzz');
});

test('given 15, return \'FizzBuzz\'', () => {
    expect(index.fizzbuzz(15)).toBe('FizzBuzz');
});

test('given 30, return \'FizzBuzz\'', () => {
    expect(index.fizzbuzz(30)).toBe('FizzBuzz');
});

describe.each(
    [
        [1, '1'],
        [2, '2'],
        [3, 'Fizz'],
        [5, 'Buzz'],
        [15, 'FizzBuzz'],
        [90, 'FizzBuzz'],
        [99, 'Fizz'],
        [100, 'Buzz'],
    ]
)('given %i expect %1', (given, expected) => {
    test(`returns ${expected}`, () => {
        expect(index.fizzbuzz(given)).toBe(expected);
    });
});

describe('play', () => {
    const output = [];
    let realLoggingMethod = undefined;
    beforeEach(() => {
        realLoggingMethod = console.log;
        console.log = (message) => {
            output.push(message);
        };
    })
    afterEach(() => {
        console.log = realLoggingMethod;
    })
    test('play fizzBuzz', () => {
        index.play();
        expect(output).toStrictEqual(
            [
                '1',
                '2',
                'Fizz',
                '4',
                'Buzz',
                'Fizz',
                '7',
                '8',
                'Fizz',
                'Buzz',
                '11',
                'Fizz',
                '13',
                '14',
                'FizzBuzz',
                '16',
                '17',
                'Fizz',
                '19',
                'Buzz',
                'Fizz',
                '22',
                '23',
                'Fizz',
                'Buzz',
                '26',
                'Fizz',
                '28',
                '29',
                'FizzBuzz',
                '31',
                '32',
                'Fizz',
                '34',
                'Buzz',
                'Fizz',
                '37',
                '38',
                'Fizz',
                'Buzz',
                '41',
                'Fizz',
                '43',
                '44',
                'FizzBuzz',
                '46',
                '47',
                'Fizz',
                '49',
                'Buzz',
                'Fizz',
                '52',
                '53',
                'Fizz',
                'Buzz',
                '56',
                'Fizz',
                '58',
                '59',
                'FizzBuzz',
                '61',
                '62',
                'Fizz',
                '64',
                'Buzz',
                'Fizz',
                '67',
                '68',
                'Fizz',
                'Buzz',
                '71',
                'Fizz',
                '73',
                '74',
                'FizzBuzz',
                '76',
                '77',
                'Fizz',
                '79',
                'Buzz',
                'Fizz',
                '82',
                '83',
                'Fizz',
                'Buzz',
                '86',
                'Fizz',
                '88',
                '89',
                'FizzBuzz',
                '91',
                '92',
                'Fizz',
                '94',
                'Buzz',
                'Fizz',
                '97',
                '98',
                'Fizz',
                'Buzz'
            ]);
    });
});
