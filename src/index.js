function fizzbuzz(given) {
    if (given % 15 === 0) {
        return 'FizzBuzz';
    }
    if (given % 3 === 0) {
        return 'Fizz';
    }
    if (given % 5 === 0) {
        return 'Buzz';
    }
    return given.toString();
}

function play() {
    for(let idx = 1; idx < 101; idx++) {
        console.log(fizzbuzz(idx));
    }
}

module.exports = {
    play,
    fizzbuzz
};

play();
