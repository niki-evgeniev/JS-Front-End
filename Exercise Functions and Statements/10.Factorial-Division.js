function factorial(num1, num2) {
    let sum1 = num1;
    let sum2 = num2;

    for (let index = num1; index > 0; index--) {
        let sumNumber = index - 1;
        if (sumNumber !== 0) {
            sum1 = sum1 * sumNumber;
        }
    }
    for (let index = num2; index > 0; index--) {
        let sumNumber2 = index - 1;
        if (sumNumber2 !== 0) {
            sum2 = sum2 * sumNumber2;
        }
    }
    let results = sum1 / sum2;

    console.log(results.toFixed(2));
}


factorial(5, 2);

factorial(6,2);