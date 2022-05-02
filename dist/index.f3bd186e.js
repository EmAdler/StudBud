const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
let taskInput = document.getElementById("taskInput");
let tasklist = document.getElementById("tasklist");
let dueDateInput = document.getElementById("dueDateInput");
let completionTimeInput = document.getElementById("completionTimeInput");
let estimatedTimeInput = document.getElementById("estimatedTimeInput");
button.addEventListener("click", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    addTask(task, dueDate, estimatedTime, completionTime, false);
    console.log(taskList);
});
let taskListArray = [];
function addTask(taskDescription, dueDate, estimatedTime, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        taskDescription,
        dueDate,
        estimatedTime,
        dateCreated,
        completionTime,
        completionStatus
    };
    taskListArray.push(task);
    renderTask(task);
}
function renderTask(task) {
    //create HTML elements//
    let item = document.createElement("li");
    item.innerHTML = "<p>Task Name: " + task.taskDescription + "</p>" + "<p>" + 'Due Date:' + ' ' + task.dueDate + "</p>" + "<p>" + 'Completion Time:' + ' ' + task.completionTime + "</p>" + "<p>" + 'Estimated Completion Time:' + ' ' + task.estimatedTime + "</p>";
    tasklist.appendChild(item);
    //extra task DOM elements //
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    //event listners for DOM elements//
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        item.remove();
    });
    //clear the input form//
    form.reset();
}

//# sourceMappingURL=index.f3bd186e.js.map
