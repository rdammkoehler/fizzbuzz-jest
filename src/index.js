function fizzbuzz(given) {
    let returnValue = '';
    if (given % 3 === 0) {
        returnValue += 'Fizz';
    }
    if (given % 5 === 0) {
        returnValue += 'Buzz';
    }
    return returnValue || given.toString();
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
