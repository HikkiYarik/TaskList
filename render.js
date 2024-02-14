let unfinished = false;

const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
);
// re render task list
function render(taskList) {
    const fragment = document.createDocumentFragment();
    const children = listContainer.childNodes;

    // удалить дочерние елементы с listContainer
    for (;children.length > 0;) {
        listContainer.removeChild(children[0]);
    }
    Object.values(taskList).forEach((task) => {
        // если переменная unfinished true и таска выполнена, то не рендерить её
        if (unfinished && task.completed) {
            return;
        }
        // добавление елемента списка
        const li = taskListTemplate(task);
        fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
}

//li template
// создание елемента списка
function taskListTemplate({ _id, title, body, completed } = {}) {
    const li = document.createElement("li");
    li.classList.add(
        "list-group-item",
        "d-flex",
        "align-items-center",
        "flex-wrap",
        "mt-2"
    );
    li.setAttribute("data-task-id", _id);

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить задачу";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("btn", "complete-btn");
    if (completed) {
        completeBtn.classList.add("btn-success");
        completeBtn.textContent = "Задача завершена / Восстановить";
    } else {
        completeBtn.classList.add("btn-primary");
        completeBtn.textContent = "Завершить задачу";
    }

    li.appendChild(span);
    li.appendChild(article);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
}