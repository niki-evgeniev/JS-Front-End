function attachEvents() {
  const loadBookBtn = document.getElementById('loadBooks');
  const tbody = document.querySelector('tbody');
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

  const submitBtn = document.querySelector('#form > button');
  const [tittleInput, authorInput] = document.querySelectorAll('#form > input');

  let allbook = {};
  let editBookId = null;
  const headerEdint = document.querySelector('#form > h3')


  // console.log(tbody.innerHTML);

  loadBookBtn.addEventListener('click', loadBook)
  submitBtn.addEventListener('click', addBook);

  async function loadBook() {
    tbody.innerHTML = '';
    const bookRes = await fetch(BASE_URL);
    const bookData = await bookRes.json();
    allbook = bookData;

    for (const book in bookData) {
      const { author, title } = bookData[book];
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const edinBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      deleteBtn.id = book;
      deleteBtn.addEventListener('click', deleteBook);
      edinBtn.addEventListener('click', () => {
        editBookId = book;
        headerEdint.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';
        tittleInput.value = title;
        authorInput.value = author;
      });

      td1.textContent = title;
      td2.textContent = author;
      edinBtn.textContent = 'Edit';
      deleteBtn.textContent = 'Delete';

      tr.appendChild(td1);
      tr.appendChild(td2);
      td3.appendChild(edinBtn);
      td3.appendChild(deleteBtn);
      tr.appendChild(td3);
      tbody.appendChild(tr);

    }
  }

  async function addBook() {
    const title = tittleInput.value;
    const author = authorInput.value;

    const httpHeader = {
      method: 'POST',
      body: JSON.stringify({ title, author }),
    }
    let url = BASE_URL;
    if (headerEdint.textContent === 'Edit FORM') {
      httpHeader.method = 'PUT';
      url += editBookId;
    }
    debugger;
    const updateData = await fetch(url, httpHeader);
    loadBook();
    if (headerEdint === 'Edit FORM') {
      headerEdint.textContent = 'FORM';
      submitBtn.textContent = 'Submit';
    }
    tittleInput.value = '';
    authorInput.value = '';

  }


  async function deleteBook() {
    const id = this.id;

    const httpHeader = {
      method: 'DELETE',
    }

    await fetch(BASE_URL + id, httpHeader);
    loadBook();
  }

  
}

attachEvents();