function fizzbuzz(given) {
    if ((given % 3) === 0) {
        return 'Fizz';
    }
    return given.toString();
}

module.exports = fizzbuzz;
