document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskList = document.querySelector("#tasks");
    const newTask = document.createElement("li");
    const text = event.target['new-task-description'].value;
    newTask.textContent = text;

    const priority = event.target['new-task-priority'].value;
    if (priority === "high") newTask.style.backgroundColor = "red";
    if (priority === "medium") newTask.style.backgroundColor = "yellow";
    if (priority === "low") newTask.style.backgroundColor = "green";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });

    taskList.appendChild(newTask);

    event.target.reset();
  });
});
