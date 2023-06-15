function addItem() {
    let ul = document.getElementById('items');
    let text = document.getElementById('newItemText');
    let textCont = text.value;

    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    newA.textContent = '[Delete]';
    newA.setAttribute('href', '#');
    newA.addEventListener('click', deleteA);
    console.log(textCont);
    newLi.textContent = textCont;
    newLi.appendChild(newA);
    ul.appendChild(newLi);

    function deleteA(e) {
        let deleteItem = newA.parentElement;
        deleteItem.remove();
    }
}