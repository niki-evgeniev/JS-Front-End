function deleteByEmail() {
    let td = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let input = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');
    let email = input.value;
    let foundResult = td.find((td) => td.textContent === email);
    console.log(foundResult);
    if (foundResult) {
        foundResult.parentElement.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}