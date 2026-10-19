function addTask() {
const titleInput = document.getElementById("taskTitle");
const dateInput = document.getElementById("taskDate");

const title = titleInput.value.trim();
const date = dateInput.value;

if (title === "") {
    alert("Please enter a task name!");
    return;
}

const taskList = document.getElementById("tasks");

const emptyMessage = taskList.querySelector(".empty-message");
if (emptyMessage) {
    emptyMessage.remove();
}

const li = document.createElement("li");

const taskText = document.createElement("span");
taskText.textContent = title + (date ? " - Due: " + date : "");

const completeButton = document.createElement("button");
completeButton.textContent = "Complete";

completeButton.onclick = function () {
    taskText.style.textDecoration =
        taskText.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
};

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

deleteButton.onclick = function () {
    li.remove();

    if (taskList.children.length === 0) {
        const message = document.createElement("li");
        message.className = "empty-message";
        message.textContent = "No tasks yet. Add your first task!";
        taskList.appendChild(message);
    }
};

li.appendChild(taskText);
li.appendChild(document.createElement("br"));
li.appendChild(completeButton);
li.appendChild(deleteButton);

taskList.appendChild(li);

titleInput.value = "";
dateInput.value = "";

}
