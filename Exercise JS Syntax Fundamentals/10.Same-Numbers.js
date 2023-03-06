function sameNumber(number) {
    let numberString = number.toString();
    let sum = 0;
    let isSameNumber = true;
    let numberToCheck = 0;

    for (let index = 0; index < numberString.length; index++) {
        
        sum += Number(numberString[index]);
        
        if(index === 0){
            numberToCheck = numberString[index];
        }

        if(numberToCheck !== numberString[index]){
            isSameNumber = false;
        }

    }
    console.log(isSameNumber);
    console.log(sum);
}


sameNumber(2222222);

sameNumber(1234)