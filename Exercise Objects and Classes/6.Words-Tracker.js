function wordsTracker(words) {
    let wordToFind = words[0].split(' ');
    let result = [];
    let count = 0;
    for (const word of wordToFind) {
        for (const w of words) {
            if (w === word) {
                count++;
            }
        }
        let obj = {
            word: word,
            count: count
        }
        count = 0;
        result.push(obj);
    }

    let sortedWords = result.sort((first, sec) =>  Number(sec.count) - Number(first.count));

    for (const key of sortedWords) {
        console.log(`${key.word} - ${key.count}`)
    }
}



wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
)