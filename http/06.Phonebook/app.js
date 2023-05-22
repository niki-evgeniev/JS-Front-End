function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';
    const loadBtn = document.getElementById('btnLoad');
    const phonebookCont = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadPhonebook);
    createBtn.addEventListener('click', createPhone);


    function loadPhonebook() {
        fetch(`${BASE_URL}`)
            .then((res) => res.json())
            .then((phones) => {
                let phoneArr = Object.values(phones);
                phonebookCont.innerHTML = '';
                for (const { phone, person, _id } of phoneArr) {
                    const li = document.createElement('li');
                    const btnLoad = document.createElement('button');
                    btnLoad.textContent = 'Delete';
                    btnLoad.id = _id;
                    btnLoad.addEventListener('click', deletePhone);
                    li.textContent = person + ': ' + phone;
                    li.appendChild(btnLoad);
                    phonebookCont.appendChild(li);
                }
            })
    }
    function createPhone() {
        const person = personInput.value;
        const phone = phoneInput.value;

        fetch(`${BASE_URL}`, {
            method: 'post',
            body: JSON.stringify({ person, phone }),

        })
        loadPhonebook();
        personInput.value = '';
        phoneInput.value = '';
    }

    function deletePhone() {
        const id = this.id;
        fetch(`${BASE_URL}${id}`, {
            method: 'delete',
        })
        .then(loadPhonebook)
    }
}

attachEvents();