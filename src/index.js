function fizzbuzz(given) {
    if ((given % 3) === 0) {
        return 'Fizz';
    }
    if ((given % 5) === 0) {
        return 'Buzz';
    }
    return given.toString();
}

module.exports = fizzbuzz;
