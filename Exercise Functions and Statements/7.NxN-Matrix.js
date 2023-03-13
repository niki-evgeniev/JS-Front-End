function matrix(number) {
    // for (let index = 0; index < number; index++) {
    //     // console.log(number + ' ');
    //     for (let index = 0; index < number; index++) {
    //         console.log(number + ' ');
    //     }
    //     console.log();
    // }

    (number) => new Array(number).fill(new Array(number).fill(number)).forEach(row => console.log(row.join(' ')))
   
}


matrix(3);