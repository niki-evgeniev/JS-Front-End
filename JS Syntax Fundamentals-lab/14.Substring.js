function solve(word, index, count) {
    let finalCount = count + index;
    let result = word.substring(index, finalCount);
    console.log(result)
}

solve('ASentenceSS', 1, 8);

solve('SkipWord', 4, 7);