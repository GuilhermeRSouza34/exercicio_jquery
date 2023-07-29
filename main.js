document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskName = taskInput.value.trim();
        if (taskName !== "") {
        addTaskToList(taskName);
        taskInput.value = "";
        }
    });

    function addTaskToList(taskName) {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskName;
        taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
        }); 
        taskList.appendChild(taskItem);
    }
});