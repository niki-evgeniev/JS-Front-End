function calc() {
    // TODO: sum = num1 + num2
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let sumNumber = document.getElementById('sum');

    let sum = Number(num1.value) + Number(num2.value);

    document.getElementById('sum').value = sum;
}
