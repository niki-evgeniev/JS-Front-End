function palindrome(numbers) {

    for (const num of numbers) {
        let numString = num.toString();
        let numArr = [...numString];
        numArr.reverse();
        let numToNumber = Number(numArr.join(''));
        if (num === numToNumber) {
            console.log('true')
        } else {
            console.log('false')
        }
    }
}



palindrome([123, 323, 421, 121]);

palindrome([32,2,232,1010]);