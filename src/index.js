function fizzbuzz(given) {
    if ((given % 15) === 0) {
        return 'FizzBuzz';
    }
    if ((given % 5) === 0) {
        return 'Buzz';
    }
    if ((given % 3) === 0) {
        return 'Fizz';
    }
    return given.toString();
}

module.exports = fizzbuzz;
