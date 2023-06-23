// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    const btnLoad = document.getElementById('load-button');
    const ul = document.getElementById('todo-list');

    const title = document.getElementById('title');
    const btnAdd = document.getElementById('add-button');




    btnLoad.addEventListener('click', loadAllTasks);
    btnAdd.addEventListener('click', addTask);


    async function loadAllTasks(e) {
        if (e) {
            e.preventDefault();
        }
        ul.innerHTML = '';

        const response = await fetch(BASE_URL);
        const data = await response.json();
        allProducts = Object.values(data);

        for (const key in data) {
            let { name, _id } = data[key];

            let li = document.createElement('li');
            li.id = _id;

            const span = document.createElement('span');
            span.textContent = name;
            li.appendChild(span);

            const btnDelete = document.createElement('button');
            btnDelete.textContent = 'Remove';
            li.appendChild(btnDelete);

            const btnEdit = document.createElement('button');
            btnEdit.textContent = 'Edit';
            li.appendChild(btnEdit);

            ul.appendChild(li);

            btnDelete.addEventListener('click', removeTask);
            btnEdit.addEventListener('click', editTask);
        }

    }

    async function addTask(e) {
        e.preventDefault();
        let toAdd = title.value;
        const httpHeader = {
            method: 'POST',
            body: JSON.stringify({
                name: toAdd,
            }),
        }
        const response = await fetch(BASE_URL, httpHeader);
        loadAllTasks();
    }

    async function removeTask() {
        const id = this.parentNode.id;
        console.log(id);

        const httpHeader = {
            method: 'DELETE'
        };
        const response = await fetch(BASE_URL + id, httpHeader);
        loadAllTasks();
    }

     async function editTask(event) {
        let liP = this.parentNode;
        const [span, removeBtn, btnEdit] = Array.from(liP.children);
        const editInput = document.createElement('input');
        editInput.value = span.textContent;
        liP.prepend(editInput);
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener('click',editTaskToServer);
        liP.append(submitBtn);
        span.remove();
        btnEdit.remove();
        

    }

    async function editTaskToServer(e) {
        let liP = e.currentTarget.parentNode;
        const id = liP.id;
        console.log(liP);
        const [input , btnRemove, btnEdit] = Array.from(liP.children);
        console.log(input.value);
        const httpHeader = {
            method: 'PATCH',
            body: JSON.stringify({ name: input.value })
        };
        
        const response = await fetch(BASE_URL + id, httpHeader);
        loadAllTasks();

    }
}

attachEvents();
