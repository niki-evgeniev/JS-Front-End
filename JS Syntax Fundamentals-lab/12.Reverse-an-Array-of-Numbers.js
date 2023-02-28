function solve(number, arr) {
    let input = [];
    for (let index = number - 1; index >= 0; index--) {
        input.push(arr[index]);
        // input.push('ko');
    }

    let output = "";

    for (let index = 0; index < input.length; index++) {
        output += " " + input[index];

    }

    console.log(output);
}



solve(3, [10, 20, 30, 40, 50]);

solve(4, [-1, 20, 99, 5]);

solve(2, [66, 43, 75, 89, 47]);