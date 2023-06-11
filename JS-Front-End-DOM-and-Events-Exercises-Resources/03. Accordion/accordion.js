function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let buttonClick = document.getElementsByClassName('button');
    let extra = document.getElementById('extra');
    // debugger;

    button.addEventListener('click', clck);

    function clck() {
        let data = button.textContent;
        // let data = button.currentTarget;
        console.log(data);

        if (data === 'More') {
            button.textContent = 'Less';
            extra.style.display = 'block';
        } else if (data === 'Less') {
            button.textContent = 'More';
            extra.style.display = 'none';
        }
    }
}