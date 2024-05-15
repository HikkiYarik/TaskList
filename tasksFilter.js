//обработчик события
allTasksBtn.addEventListener("click", allTasksFilterHandler);
falseTasksBtn.addEventListener("click", falseTasksFilterHandler);

// кнопка отобразить все задачи
function allTasksFilterHandler() {
  falseTasksBtn.classList.remove("btn-primary");
  falseTasksBtn.classList.add("btn-outline-primary");
  allTasksBtn.classList.remove("btn-outline-primary");
  allTasksBtn.classList.add("btn-primary");
  // устанавливаем значение глобальной переменной unfinished
  unfinished = false;
  // обновляем глобальный список задач
  setTasks(tasks);
}

// кнопка показать только незавершённые задачи
function falseTasksFilterHandler() {
  allTasksBtn.classList.remove("btn-primary");
  allTasksBtn.classList.add("btn-outline-primary");
  falseTasksBtn.classList.remove("btn-outline-primary");
  falseTasksBtn.classList.add("btn-primary");
  // устанавливаем значение глобальной переменной unfinished
  unfinished = true;
  // обновляем глобальный список задач
  setTasks(tasks);
}
