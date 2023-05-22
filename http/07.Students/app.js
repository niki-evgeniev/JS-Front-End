function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/';
  const tbody = document.querySelector('#results > tbody');
  const tbodySubmit = document.getElementById('submit');
  const [firstNameInput, lastNameInput, facultyNumberInput, gradeInput] = document.querySelectorAll('input');


  loadDataBase();
  tbodySubmit.addEventListener('click', addStudent);

  async function loadDataBase() {
    tbody.innerHTML = '';
    const response = await fetch(BASE_URL);
    const data = await response.json();

    for (const dat in data) {
      const { facultyNumber, firstName, grade, lastName } = data[dat];
      const tr = document.createElement('tr');
      const tdFirstName = document.createElement('td');
      const tdLastName = document.createElement('td');
      const tdNumber = document.createElement('td');
      const tdGrade = document.createElement('td');

      tdFirstName.textContent = firstName;
      tdLastName.textContent = lastName;
      tdGrade.textContent = grade;
      tdNumber.textContent = facultyNumber;

      tr.appendChild(tdFirstName);
      tr.appendChild(tdLastName);
      tr.appendChild(tdNumber);
      tr.appendChild(tdGrade);
      tbody.appendChild(tr);
    }



  }
  async function addStudent() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facultyNumberInput.value;
    const grade = gradeInput.value;


    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    }

    const response = await fetch(BASE_URL, httpHeaders);
    firstNameInput.value = '';
    lastNameInput.value = '';
    facultyNumberInput.value = '';
    gradeInput.value = '';
   
    loadDataBase();

  }
}

attachEvents();