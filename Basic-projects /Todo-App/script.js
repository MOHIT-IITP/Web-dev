document.querySelector("#addtask").addEventListener('click', addTask);

function addTask() {
  const task = document.querySelector("#task").value.trim();
  const taskList = document.querySelector("#taskList");

  if (task) {
    const tasktext = document.createElement('li');
    tasktext.className = "taskText";

    // Create and append the checkbox
    const cbtn = document.createElement('input');
    cbtn.type = 'checkbox';
    cbtn.className = 'cbtn';
    tasktext.appendChild(cbtn);

    // Create and append the task text
    const taskLabel = document.createElement('span');
    taskLabel.textContent = task;
    tasktext.appendChild(taskLabel);

    // Create and append the delete button
    const dbtn = document.createElement('button');
    dbtn.textContent = 'Delete';
    dbtn.className = "deletebtn";
    tasktext.appendChild(dbtn);

    // Append the task item to the task list
    taskList.appendChild(tasktext);

    // Add event listener to the checkbox
    // cbtn.addEventListener('change', function() {
    //   if (cbtn.checked) {
    //     tasktext.style.textDecorationLine = "line-through";
    //   } else {
    //     tasktext.style.textDecorationLine = "none";
    //   }
    // });

    // Add event listener to delete button
    dbtn.addEventListener('click', function() {
      taskList.removeChild(tasktext);
    });

    // Clear the input field
    document.querySelector('#task').value = '';
  }
}
