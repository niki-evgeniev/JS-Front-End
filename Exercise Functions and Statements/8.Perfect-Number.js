function perfectNumber(number) {

    let numString = number.toString();
    let sumNumber = 0;

    for (let index = 1; index <= number / 2; index++) {

        if (number % index === 0) {
            sumNumber += index;
        }

    }
    if (sumNumber === number) {
        console.log('We have a perfect number!')
    } else {
        console.log("It's not so perfect.")
    }

}

perfectNumber(6);

perfectNumber(28);

perfectNumber(1236498);