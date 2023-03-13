function repeat(number) {

    if (number === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]')
    } else {
        let howManyDot = 100 - number;
        let dot = howManyDot / 10;
        let dotSymbol = '.';
        let procent = number / 10;
        let procentSymbol = '%';
        console.log(`${number}% [${procentSymbol.repeat(procent)}${dotSymbol.repeat(dot)}]`);
        console.log('Still loading...')
    }
}

repeat(30);

repeat(50);

repeat(100);