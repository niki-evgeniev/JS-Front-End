function checkNumbers(...numbers) {
    return numbers.filter((num) => num < 0).length % 2 === 0
        ? 'Positive'
        : 'Negative'
}


console.log(checkNumbers(5,
    12,
    -15
));

console.log(checkNumbers(-6,
    -12,
    14
));

console.log(checkNumbers(-1,
    -2,
    -3
));

console.log(checkNumbers(-5,
    1,
    1
));