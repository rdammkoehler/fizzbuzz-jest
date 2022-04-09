function fizzbuzz(given) {
    let result = '';
    if ((given % 3) === 0) {
        result += 'Fizz';
    }
    if ((given % 5) === 0) {
        result += 'Buzz';
    }
    return result || given.toString();
};

function play() {
    for(let idx = 1; idx < 101; idx++) {
        console.log(fizzbuzz(idx));
    }
};

module.exports = {
    fizzbuzz,
    play
};

play();
