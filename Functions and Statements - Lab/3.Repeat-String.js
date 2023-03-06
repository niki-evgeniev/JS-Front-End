function repeat(string, number) {
    let stringResults = '';

    for (let index = 0; index < number; index++) {
        stringResults += string;
    }

    return stringResults;
}

console.log(repeat("abc", 3))

console.log(repeat("String", 2))