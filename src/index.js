function fizzbuzz(given) {
    let result = '';
    if ((given % 3) === 0) {
        result = 'Fizz';
    }
    if ((given % 5) === 0) {
        result = `${result}Buzz`;
    }
    return result || given.toString();
}

module.exports = fizzbuzz;
