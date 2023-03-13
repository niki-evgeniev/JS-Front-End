function sum(num1, num2, num3) {
    let sum = num1 + num2;

    function subtract(sum, num3) {
        let result = sum - num3;
        return result;
    }
    let res = subtract(sum, num3);
    console.log(res);
}

sum(23,
    6,
    10
);

sum(1,
    17,
    30
);

sum(42,
    58,
    100
);