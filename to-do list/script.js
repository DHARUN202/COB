function addTask() {
  var taskInput = document.getElementById("task");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
      var taskList = document.getElementById("task-list");
      var listItem = document.createElement("li");
      listItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
      taskList.appendChild(listItem);
      taskInput.value = "";
  }
}

function removeTask(button) {
  var taskList = document.getElementById("task-list");
  taskList.removeChild(button.parentNode);
}
