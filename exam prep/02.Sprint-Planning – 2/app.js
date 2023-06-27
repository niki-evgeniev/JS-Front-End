window.addEventListener('load', solve);

function solve() {
    let taskInfo = {
        title: null,
        description: null,
        label: null,
        points: null,
        assignee: null,
    }




    let domInput = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee'),
    }
    let taskNumber = 1;
    let totalPoints = 0;
    const btnCreate = document.getElementById('create-task-btn');
    const taskSections = document.getElementById('tasks-section');
    const totalP = document.getElementById('total-sprint-points');
    const deleteTaskBtn = document.getElementById('delete-task-btn');

    let test;

    btnCreate.addEventListener('click', createTask);


    function createTask(e) {
        e.preventDefault();
        let emptyString = Object.values(domInput)
            .every((ins) => ins.value !== '');

        if (!emptyString) {
            return
        }

        let { title, description, label, points, assignee } = domInput;

        const article = document.createElement('article');
        article.setAttribute('id', 'task-' + taskNumber);
        article.classList.add('task-card');

        taskNumber++;

        const div1 = document.createElement('div');
        let iconCodeFeature = '&#8865;';
        let iconCodeLow = '&#9737;';
        let iconCodeHigh = '&#9888;';
        div1.textContent = label.value + ' ';
        div1.classList.add('task-card-label');
        let priority = label.value;
        const span = document.createElement('span');

        if (priority === 'Feature') {
            div1.classList.add('feature');
            span.innerHTML = '&#8865;';
            // div1.textContent += iconCodeFeature;
        } else if (priority === 'Low Priority Bug') {
            div1.classList.add('low-priority');
            span.innerHTML = '&#9737;';
            // div1.textContent += iconCodeLow;
        } else if (priority === 'High Priority Bug') {
            div1.classList.add('high-priority');
            span.innerHTML = '&#9888;';
            // div1.textContent += iconCodeHigh;
        }
        div1.appendChild(span);


        article.appendChild(div1);

        const h3 = document.createElement('h3');
        h3.textContent = title.value;
        h3.classList.add('task-card-title');
        article.appendChild(h3);

        const pDescriptions = document.createElement('p');
        pDescriptions.textContent = description.value;
        pDescriptions.classList.add('task-card-description');
        article.appendChild(pDescriptions);

        const divPoints = document.createElement('div');
        divPoints.textContent = `Estimated at ${points.value} pts`;
        totalPoints += Number(points.value);
        divPoints.classList.add('task-card-points');
        article.appendChild(divPoints);

        const divAssignee = document.createElement('div');
        divAssignee.textContent = `Assigned to: ${assignee.value}`;
        divAssignee.classList.add('task-card-assignee');
        article.appendChild(divAssignee);

        const divDelete = document.createElement('div');
        divDelete.classList.add('task-card-actions');

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';

        divDelete.appendChild(btnDelete);
        article.appendChild(divDelete);

        taskSections.appendChild(article);

        totalP.textContent = 'Total Points ' + totalPoints + 'pts';

        for (const key in domInput) {
            taskInfo[key] = domInput[key].value;

        }
        btnDelete.addEventListener('click', deleteTask);
        deleteTaskBtn.addEventListener('click', deleteTaskForm);
        title.value = '';
        description.value = '';
        label.value = '';
        points.value = '';
        assignee.value = '';
        function deleteTask() {

            for (const key in taskInfo) {
                domInput[key].value = taskInfo[key];
            }
            test = this.parentNode.parentNode;
            title.setAttribute('disabled', true);
            description.setAttribute('disabled', true);
            label.setAttribute('disabled', true);
            points.setAttribute('disabled', true);
            assignee.setAttribute('disabled', true);
            // btnCreate.setAttribute('disabled', true);


            deleteTaskBtn.removeAttribute('disabled');
            btnCreate.setAttribute('disabled', true);
        }

        function deleteTaskForm() {
            title.removeAttribute('disabled');
            description.removeAttribute('disabled');
            label.removeAttribute('disabled');
            points.removeAttribute('disabled');
            assignee.removeAttribute('disabled');
            test.remove();

            totalPoints -= Number(points.value);
            totalP.textContent = 'Total Points ' + totalPoints + 'pts';
            title.value = '';
            description.value = '';
            label.value = '';
            points.value = '';
            assignee.value = '';
            btnCreate.removeAttribute('disabled');
            deleteTaskBtn.setAttribute('disabled', true);

            // this.parentNode.parentNode.remove();

        }

    }

}