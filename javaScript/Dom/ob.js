function TodoList() {
  this.tasks = [];
  this.idCounter = 1;
}

TodoList.prototype.addTask = function (description) {
  const newTask = {
    id: this.idCounter++,
    description: description,
    completed: false,
  };
  this.tasks.push(newTask);
  console.log(`Task added: ${description}`);
};

TodoList.prototype.removeTask = function (taskId) {
  this.tasks = this.tasks.filter((task) => task.id !== taskId);
  console.log(`Task with ID ${taskId} removed.`);
};

TodoList.prototype.completeTask = function (taskId) {
  const task = this.tasks.find((task) => task.id === taskId);
  if (task) {
    task.completed = true;
    console.log(`Task with ID ${taskId} marked as completed.`);
  } else {
    console.log(`Task with ID ${taskId} not found.`);
  }
};

TodoList.prototype.displayTasks = function () {
  if (this.tasks.length === 0) {
    console.log("No tasks available.");
    return;
  }

  console.log("Todo List:");
  this.tasks.forEach((task) => {
    console.log(
      `ID: ${task.id}, Description: "${task.description}", Completed: ${task.completed}`,
    );
  });
};

const myTodoList = new TodoList();
myTodoList.addTask("Finish homework");
myTodoList.addTask("Read a book");
myTodoList.addTask("Go for a walk");

myTodoList.displayTasks();

myTodoList.completeTask(2);

myTodoList.displayTasks();

myTodoList.removeTask(3);

myTodoList.displayTasks();
