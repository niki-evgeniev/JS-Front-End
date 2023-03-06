function printNthElement(arr, indexing) {

    let arrFinal = [];

    arrFinal.push(arr[0]);

    for (let index = 1; index < arr.length; index++) {
        if (index % indexing === 0) {
            arrFinal.push(arr[index]);
        }
    }
    // console.log(...arrFinal);
    return arrFinal;
}

printNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)

printNthElement(['dsa',
    'asd',
    'test',
    'tset'],
    2
)

printNthElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6
)