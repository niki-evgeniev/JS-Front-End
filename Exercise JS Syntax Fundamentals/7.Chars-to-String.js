function charToString(...char){
    let string = '';

    for (let index = 0; index < char.length; index++) {
        string += char[index];
        
    }
    console.log(string)
}



charToString('a',
'b',
'c'
)