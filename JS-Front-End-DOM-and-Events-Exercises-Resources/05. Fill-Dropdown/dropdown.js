function addItem() {
    let select = document.getElementById('menu');
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let text = newItemText.value;
    let value = newItemValue.value;

    let option = document.createElement('option');

    option.textContent = text;
    option.value = value;

    select.appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
}