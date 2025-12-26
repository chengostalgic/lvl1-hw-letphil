const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.textContent = taskText;
    taskItem.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    })
    taskList.appendChild(taskItem);
    taskInput.value = "";
}