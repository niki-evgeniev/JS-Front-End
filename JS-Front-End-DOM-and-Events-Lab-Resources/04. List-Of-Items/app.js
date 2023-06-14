function addItem() {
    let ul = document.getElementById('items');
    let text = document.getElementById('newItemText');
    let textCont = text.value;

    let newLi = document.createElement('li');
    console.log(textCont);
    newLi.textContent = textCont;

    ul.appendChild(newLi);
}