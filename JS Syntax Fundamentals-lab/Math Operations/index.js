function solve(numberA, numberB, operator) {
    let result;
    switch (operator) {
        case '+':
            result = numberA + numberB;
            break;
        case '-':
            result = numberA - numberB;
            break;
        case '*':
            result = numberA * numberB;
            break;
        case '/':
            result = numberA / numberB;
            break;
        case '%':
            result = numberA % numberB;
            break;
        case '**':
            result = numberA ** numberB;
            break;
    }
    console.log(result);

}

solve(9, 3, '/')

solve(3, 5.5, '*')

solve(9, 3, '%')

