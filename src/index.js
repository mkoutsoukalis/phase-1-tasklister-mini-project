// Core Deliverables
// 1. On form submit, add the inputted task to the list
// 2. Remeber to prevent default behavior before handling the submit event
// Stretch Deliverable
// 3. When the task is added to the list, add a button alongside it, that when clicked removes the task from the list
// 4.  Add a dropdown to the form in HTML file so that when the form is submitted, the task in the list is red for high, yellow for medium, green, for low
// 4(a). Add a dropdown in the list that lets you sort by priority, asc. or desc. 
// 5. Add any additional field to the form and see its effect in the list. 
// 6. When the task is added to the list, add a form alongside it, with one text input that when submitted, updates the task text.

//On form submit, add the inputted task to the list
// 1. Add an event listener to the form of type "submit".
// 2. In the event handler, add the task to the list. 
// 2a. To add the task, create a new list item with the input value.
// 2b. Append it to the unordered list in HTML with the id of "tasks".

  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (event) => {
    // Prevent default behavior.
    event.preventDefault();
    // Get task text from input.
    const text = event.target["new-task-description"].value;
    console.log("Task text: " + text);
    // Create <li> and add task text to it.
    const task = document.createElement("li");
    task.textContent = text;
    //Append a delete button to the <li>.
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    //Listen for the "click" event on the delete button,
    //  and when clicked, remove the <li>.
    deleteButton.addEventListener("click", () => {
      //Remove the <li> element.
      task.remove();
    });
    task.append(deleteButton);
    //Adding the priority drop down
    const priority = document.querySelector('#new-task-priority');
      if (priority.value === 'High') task.style.backgroundColor = "red";
      if (priority.value === 'Medium') task.style.backgroundColor = "yellow";
      if (priority.value === 'Low') task.style.backgroundColor = "green";
    //Append the new <li> to the <ul>.
    // <... id="tasks">
    document.querySelector("#tasks").append(task);
  });