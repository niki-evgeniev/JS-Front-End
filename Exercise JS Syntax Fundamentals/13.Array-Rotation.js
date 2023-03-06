function arrRotation(arr, number){

    for (let index = 0; index < number; index++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }

    // console.log(arr.join(' '));
    console.log(...arr);
}

arrRotation([51, 47, 32, 61, 21], 2);

arrRotation([32, 21, 61, 1], 4);