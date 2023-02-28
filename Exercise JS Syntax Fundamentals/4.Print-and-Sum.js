function sum(startNumber, endNumber ){
let sum = 0;
let arr = [];
    for (let index = startNumber; index <= endNumber; index++) {
        sum += index;
        arr.push(index);
    }
    console.log(`${arr.join(' ')}`)
    console.log(`Sum: ${sum}`)
    
};

sum(5, 10);
sum(0, 26);