function solve(input) {
    let n = Number(input.shift());
    let piecesCollection = {};

    for (let index = 0; index < n; index++) {
        let [piece, composer, key] = input[0].split('|');
        piecesCollection[piece] = { composer, key };
        input.shift();
    }
    for (const data of input) {
        let dat = data.split('|');
        let [comm, piece, composer, key] = dat;

        if (comm === 'Add') {
            if (!piecesCollection.hasOwnProperty(piece)) {
                piecesCollection[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`)
            }

        } else if (comm === 'Remove') {
            if (piecesCollection.hasOwnProperty(piece)) {
                delete piecesCollection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (comm === 'ChangeKey') {
            if (piecesCollection.hasOwnProperty(piece)) {
                piecesCollection[piece].key = composer;
                console.log(`Changed the key of ${piece} to ${composer}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }

        } else if (comm === 'Stop') {
            break;
        }

    }
    for (const pieces in piecesCollection) {
        let { composer, key } = piecesCollection[pieces];
        console.log(`${pieces} -> Composer: ${composer}, Key: ${key}`);

    }
}




// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
// ]
// )

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )