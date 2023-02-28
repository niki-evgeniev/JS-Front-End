function solve(arr) {
    let odd = 0;
    let even = 0;
    for (let index = 0; index < arr.length; index++) {

        if (arr[index] % 2 == 0) {
            even += arr[index];
        } else {
            odd += arr[index];
        }
    }
    let result = even - odd;
    console.log(result);
}


solve([1, 2, 3, 4, 5, 6]);

solve([3, 5, 7, 9]);

solve([2, 4, 6, 8, 10]);