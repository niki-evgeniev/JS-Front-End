function names(names) {
    names.sort((a, b) => a.localeCompare(b));
    for (let index = 0; index < names.length; index++) {
        let number = index + 1;
        console.log(`${number}.${names[index]}`)
    }
}


names(["John", "Bob", "Christina", "Ema"]);