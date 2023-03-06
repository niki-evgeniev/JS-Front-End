function reversChar(ch1, ch2, ch3) {

    let string = ch3 + ' ' + ch2 + ' ' + ch1 + ' ';

    console.log(string);
}
reversChar('A',
    'B',
    'C'
)

reversChar('1',
    'L',
    '&'
)


function reversChar2(...char) {
    let string = '';

    for (let index = char.length -1; index >= 0; index--) {
       string += char[index] + ' ';
    }
    console.log(string);
}

reversChar2('A',
    'B',
    'C'
)

reversChar2('1',
    'L',
    '&'
)