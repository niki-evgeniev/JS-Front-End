function solve(countGroup, person, day) {
    let sum = 0;
    let price = 0;

    switch (person) {

        case 'Students':
            if (day === 'Friday') {
                price = countGroup * 8.45;
            } else if (day === 'Saturday') {
                price = countGroup * 9.80;
            } else if (day === 'Sunday') {
                price = countGroup * 10.46;
            }

            if (countGroup >= 30) {
                sum = price * 0.85;
            } else {
                sum = price;
            }
            break;
        case 'Business':
            if (countGroup >= 100) {
                countGroup = countGroup - 10;
            }

            if (day === 'Friday') {
                price = countGroup * 10.90;
            } else if (day === 'Saturday') {
                price = countGroup * 15.60;
            } else if (day === 'Sunday') {
                price = countGroup * 16;
            }

            sum = price;
            break;
        case 'Regular':
            if (day === 'Friday') {
                price = countGroup * 15;
            } else if (day === 'Saturday') {
                price = countGroup * 20;
            } else if (day === 'Sunday') {
                price = countGroup * 22.50;
            }

            if (countGroup >= 10 && countGroup <= 20) {
                sum = price * 0.95;
            } else {
                sum = price;
            }
            break;
    }
    console.log(`Total price: ${sum.toFixed(2)} `)
}

// solve(30,
//     "Students",
//     "Sunday"
// );

// solve(40,
//     "Regular",
//     "Saturday"
// );

solve(100,
    "Business",
    "Saturday"
);