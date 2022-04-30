const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
let input = document.getElementById("taskInput");

button.addEventListener("click", function(event){
let task = input.value;
addTask(task, "26/10/2021","low", ["1","30"], false);
console.log(taskList);
})

let taskList = [];

function addTask(taskDescription, dueDate, prioirtyRating, estimatedTime, completionStatus){
    let minEstTime = estimatedTime[0];
    let maxEstTime = estimatedTime[1];
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        taskDescription,
        dueDate,
        dateCreated,
        prioirtyRating,
        estimatedTime,
        minEstTime,
        maxEstTime,
        completionStatus
    };

    taskList.push(task);
    return task;
    }
