function piccolo(cars) {
    let parking = [];

    for (let index = 0; index < cars.length; index++) {
        let carNumber = cars[index].split(', ');

        if (carNumber[0] === 'IN') {
            if (!parking.includes(carNumber[1])) {
                parking.push(carNumber[1]);
            }

        } else if (carNumber[0] === 'OUT') {
            if (parking.includes(carNumber[1])) {
                let indexCar = parking.indexOf(carNumber[1]);
                parking.splice(indexCar, 1);
            }
        }
    }

    let sortParking = parking.sort((a, b) => a.localeCompare(b));

    if (parking.length === 0) {
        console.log('Parking Lot is Empty')
    } else {
        for (const number of parking) {
            console.log(number);
        }
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)
