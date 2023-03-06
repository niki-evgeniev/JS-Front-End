function sum(digit) {
    let sum = 0;
    digit = digit + '';

    for (let index = 0; index < digit.length; index++) {
        let numberToAdd = Number(digit[index]);
        sum = sum + numberToAdd;
    }
    console.log(sum);
}

sum(543);