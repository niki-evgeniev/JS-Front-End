function cooking(number, ...operations) {
    let finalNumber = Number(number);

    for (let index = 0; index < operations.length; index++) {
        let operation = operations[index];
        switch (operation) {
            case 'chop':
                finalNumber = finalNumber / 2;
                break;
            case 'dice':
                finalNumber = Math.sqrt(finalNumber);
                break;
            case 'spice':
                finalNumber += 1;
                break;
            case 'bake':
                finalNumber *= 3;
                break;
            case 'fillet':
                // finalNumber *= 0.8;
                finalNumber = finalNumber - finalNumber * 0.2;
                break;
        }
        console.log(finalNumber);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');