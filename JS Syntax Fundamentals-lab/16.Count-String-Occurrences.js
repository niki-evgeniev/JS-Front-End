function solve(text, word) {
    let count = 0;

    let textArr = text.split(' ');

    for (const text of textArr) {
        if (text === word) {
            count++;
        }
    }
console.log(count);
}

solve('softuni is great place for learning new programming languages',
'softuni'
);