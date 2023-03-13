function oddEvenSum(number){
    let odd = 0;
    let even = 0;

    let sum = number + '';
    for (let index = 0; index < sum.length; index++) {
        let num = Number(sum[index]);
        if(num % 2 === 0){
            even += num;
        }else {
            odd += num;
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddEvenSum(1000435);

oddEvenSum(3495892137259234);