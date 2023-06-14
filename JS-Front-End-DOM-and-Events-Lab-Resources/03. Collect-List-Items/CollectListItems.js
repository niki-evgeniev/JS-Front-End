function extractText() {
    let li = Array.from(document.querySelectorAll('li'));
    let result = document.getElementById('result');
    li.forEach((li) => {
        result.textContent += li.textContent + '\n'
    })
}