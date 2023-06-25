
function sprintBoard(array) {
    const n = Number(array[0]);
    const tasks = {};
    let totalToDoPoints = 0;
    let totalInProgressPoints = 0;
    let totalCodeReviewPoints = 0;
    let totalDonePoints = 0;

    // Process initial state
    for (let i = 1; i <= n; i++) {
        const [assignee, taskId, title, status, estimatedPoints] = array[i].split(":");
        if (!tasks[assignee]) {
            tasks[assignee] = [];
        }
        tasks[assignee].push({ taskId, title, status, estimatedPoints });
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

    // Process commands
    for (let i = n + 1; i < array.length; i++) {
        const [command, assignee, taskId, title, status, estimatedPoints] = array[i].split(":");
        if (command === "Add New") {
            if (!tasks[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            tasks[assignee].push({ taskId, title, status, estimatedPoints });
            if (status === "ToDo") {
                totalToDoPoints += Number(estimatedPoints);
            } else if (status === "In Progress") {
                totalInProgressPoints += Number(estimatedPoints);
            } else if (status === "Code Review") {
                totalCodeReviewPoints += Number(estimatedPoints);
            } else if (status === "Done") {
                totalDonePoints += Number(estimatedPoints);
            }
        } else if (command === "Change Status") {
            if (!tasks[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            const taskIndex = tasks[assignee].findIndex(task => task.taskId === taskId);
            if (taskIndex === -1) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                continue;
            }
            const oldStatus = tasks[assignee][taskIndex].status;
            tasks[assignee][taskIndex].status = status;
            const points = Number(tasks[assignee][taskIndex].estimatedPoints);
            if (oldStatus === "ToDo") {
                totalToDoPoints -= points;
            } else if (oldStatus === "In Progress") {
                totalInProgressPoints -= points;
            } else if (oldStatus === "Code Review") {
                totalCodeReviewPoints -= points;
            } else if (oldStatus === "Done") {
                totalDonePoints -= points;
            }
            if (status === "ToDo") {
                totalToDoPoints += points;
            } else if (status === "In Progress") {
                totalInProgressPoints += points;
            } else if (status === "Code Review") {
                totalCodeReviewPoints += points;
            } else if (status === "Done") {
                totalDonePoints += points;
            }
        } else if (command === "Remove Task") {
            if (!tasks[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }
    }
    console.log();
}










sprintBoard([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
)