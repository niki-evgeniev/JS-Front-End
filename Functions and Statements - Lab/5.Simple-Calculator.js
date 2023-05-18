function calculator(firstNum, secondNum, operator) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    let result = 0;

    switch (operator) {
        case 'add':
            result = add(firstNum, secondNum);
            break;
        case 'subtract':
            result = subtract(firstNum, secondNum);
            break;
        case 'multiply':
            result = multiply(firstNum, secondNum);
            break;
        case 'divide':
            result = divide(firstNum, secondNum);
            break;
    }
    console.log(result);
};

calculator(5,
    5,
    'multiply'
);

calculator(40,
    8,
    'divide'
);

calculator(12,
    19,
    'add'
);

calculator(50,
    13,
    'subtract'
);