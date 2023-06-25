function spirit(input) {
    let n = Number(input.shift());
    let data = {};
    let totalToDoPoints = 0;
    let totalInProgressPoints = 0;
    let totalCodeReviewPoints = 0;
    let totalDonePoints = 0;

    for (let index = 0; index < n; index++) {
        let [assignee, taskId, title, status, estimatedPoints] = input[0].split(':');
        if (!data[assignee]) {
            data[assignee] = [];
        }
        data[assignee].push({ taskId, title, status, estimatedPoints });
        input.shift();
        if (status === "ToDo") {
            totalToDoPoints += Number(estimatedPoints);
        } else if (status === "In Progress") {
            totalInProgressPoints += Number(estimatedPoints);
        } else if (status === "Code Review") {
            totalCodeReviewPoints += Number(estimatedPoints);
        } else if (status === "Done") {
            totalDonePoints += Number(estimatedPoints);
        }
    }

    for (const task of input) {
        let [commands, assignee, taskId, title, status, estimatedPoints] = task.split(':');

        if (commands === 'Add New') {
            if(data.hasOwnProperty(assignee)){
                data[assignee].push({ taskId, title, status, estimatedPoints });
                if (status === "ToDo") {
                    totalToDoPoints += Number(estimatedPoints);
                } else if (status === "In Progress") {
                    totalInProgressPoints += Number(estimatedPoints);
                } else if (status === "Code Review") {
                    totalCodeReviewPoints += Number(estimatedPoints);
                } else if (status === "Done") {
                    totalDonePoints += Number(estimatedPoints);
                }
            }else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (commands === 'Change Status'){

        }

    }

    console.log();
}
// console.log(Object.keys(data).length);





spirit([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
]
);