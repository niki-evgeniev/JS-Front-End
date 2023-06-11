function subtract() {
    let firstNum = document.getElementById('firstNumber');
    let secondNum = document.getElementById('secondNumber');

    let first = firstNum.value;
    let second = secondNum.value;

    console.log(first);
    console.log(second);

    let results = first - second;
    let res = document.getElementById('result');

    res.textContent = results;

}