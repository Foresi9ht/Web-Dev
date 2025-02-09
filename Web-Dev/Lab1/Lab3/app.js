function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("task-list");

  // Create new task item
  const li = document.createElement("li");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = () => {
    li.classList.toggle("completed");
  };

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&#128465;";
  deleteButton.onclick = () => {
    taskList.removeChild(li);
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
