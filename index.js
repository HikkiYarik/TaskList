const tasks = getTasks();

// выполнить первичный рендер
render(tasks);

const form = document.forms["addTask"];

//  обработчики событий
form.addEventListener("submit", onEventListenerHandler);
listContainer.addEventListener("click", onDeleteHandler);
listContainer.addEventListener("click", onCompleteHandler);
allTasksBtn.addEventListener("click", allTasksFilterHandler);
falseTasksBtn.addEventListener("click", falseTasksFilterHandler);

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
        const { title } = tasks[parentID];
        // получаем подтверждение на удаление
        const isConfirm = confirm(`Правда удалить задачу ${title}?`);
        if (!isConfirm) return;
        // удаляем задачу из списка локальных общих задач
        delete tasks[parentID];
        // обновляем глобальный список задач
        setTasks(tasks);
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

const allTasksBtn = document.querySelector(
    ".btn-group-section .btn-group .btn-all-tasks"
);
const falseTasksBtn = document.querySelector(
    ".btn-group-section .btn-group .btn-false-tasks"
);

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