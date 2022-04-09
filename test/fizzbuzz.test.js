const fizzbuzz = require('../src/index')
// First Rule, given a number return that number (as a string)
test('given 1, return \'1\'', () => {
    // setup (Arrange) (Given)
    const given = 1;
    const expected = '1';

    // execute (Act) (When)
    const result = fizzbuzz(given);

    // assert (Assert) (Then)
    expect(result).toBe(expected);
});

test('give 2, return \'2\'', () => {
    const given = 2;
    const expected = '2';

    const result = fizzbuzz(given);

    expect(result).toBe(expected);
});

