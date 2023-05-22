function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger/';
    let textArea = document.querySelector('textarea');


    const refreshBtn = document.getElementById('refresh');
    const submitBtn = document.getElementById('submit');

    const [authorInput, contentInput] = document.querySelectorAll('input');

    submitBtn.addEventListener('click', sendMesseges);
    refreshBtn.addEventListener('click', loadDate);



    async function loadDate() {
        textArea.textContent = '';
        const response = await fetch(BASE_URL);
        const data = await response.json();
        let size = Number(Object.keys(data).length);
        console.log(size);
        
        let count = 1;
        let result = '';
        for (const dat in data) {
            const { author, content } = data[dat];
            debugger;
            if (count === size) {
               
                result = author + ':' + ' ' + content;
                count = 0;
            } else {
                result = author + ':' + ' ' + content + '\n';
                count++;
            }

            textArea.textContent += result;
        }
    }

    async function sendMesseges() {
        const author = authorInput.value;
        const content = contentInput.value;
        const httpHeaders = fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                author,
                content
            })
        });
        const sendToDb = await fetch(BASE_URL, httpHeaders);
        authorInput.value = '';
        contentInput.value = '';
        loadDate();
    }












}

attachEvents();