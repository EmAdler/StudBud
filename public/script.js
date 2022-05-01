const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
let taskInput = document.getElementById("taskInput");
let dueDateInput = document.getElementById("dueDateInput");
let completionTimeInput = document.getElementById("completionTimeInput");
let estimatedTimeInput = document.getElementById("estimatedTimeInput");

button.addEventListener("click", function(event){
    event.preventDefault();
let task = taskInput.value;
let dueDate = dueDateInput.value;
let completionTime = completionTimeInput.value;
let estimatedTime = estimatedTimeInput.value
addTask(task, dueDate, estimatedTime, completionTime, false);
console.log(taskList);
})

let taskList = [];

function addTask(taskDescription, dueDate, estimatedTime, completionTime, completionStatus){
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        taskDescription,
        dueDate,
        estimatedTime,
        dateCreated,
        completionTime,
        completionStatus,
        
    };

    taskList.push(task);
    return task;
    }
