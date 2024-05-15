const tasks = getTasks();

const allTasksBtn = document.querySelector(
  ".btn-group-section .btn-group .btn-all-tasks"
);
const falseTasksBtn = document.querySelector(
  ".btn-group-section .btn-group .btn-false-tasks"
);

// выполнить первичный рендер
render(tasks);

const form = document.forms["addTask"];

//  обработчики событий
form.addEventListener("submit", onEventListenerHandler);
listContainer.addEventListener("click", onDeleteHandler);
listContainer.addEventListener("click", onCompleteHandler);

// обработчик формы
function onEventListenerHandler(e) {
  e.preventDefault();

  // получаем заголовок и описание задачи
  const title = form.elements["title"].value;
  const body = form.elements["body"].value;

  // если чего не хватает, отобразить ошибку
  if (!title || !body) {
    alert("Введите и название и содержание задачи!");
    return;
  }

  // созлать форму задачу
  const newTask = {
    title,
    body,
    completed: false,
    _id: `task_№${Math.random() * 1000000}`,
  };

  // добавить эту задачу в список общих задач
  tasks[newTask._id] = newTask;
  // очитстить форму
  form.reset();
  // обновляем глобальный список задач
  setTasks(tasks);
}

// кнопка удалить
function onDeleteHandler({ target }) {
  // если клик по кнопке удалить
  if (target.classList.contains("delete-btn")) {
    // получаем ид задачи
    const parentID = target.closest("[data-task-id]").dataset.taskId;
    // получаем название задачи

    // удаляем задачу из списка локальных общих задач
    delete tasks[parentID];
    // обновляем глобальный список задач
    setTasks(tasks);
    // перепроверка на пустоту списка задач
    deleteMessHandler(listContainer, val);
  }
}

// кнопка завершить задачу
function onCompleteHandler({ target }) {
  // если клик по кнопке завершить
  if (target.classList.contains("complete-btn")) {
    // получаем ид задачи
    const parentID = target.closest("[data-task-id]").dataset.taskId;
    // изменяем статус задачи на противоположный
    tasks[parentID].completed = !tasks[parentID].completed;
    // обновляем глобальный список задач
    setTasks(tasks);
  }
}
