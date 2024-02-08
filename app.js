const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

(function (arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  // Elements UI
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );
  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];

  const wrapper = document.querySelector(".wrapper");

  const allTasksBtn = document.querySelector(
    ".btn-group-section .btn-group .btn-all-tasks"
  );
  const falseTasksBtn = document.querySelector(
    ".btn-group-section .btn-group .btn-false-tasks"
  );

  //Events
  renderAllTasks(objOfTasks);
  form.addEventListener("submit", onEventListenerHandler);
  listContainer.addEventListener("click", onDeleteHandler);
  listContainer.addEventListener("click", onCompleteHandler);
  allTasksBtn.addEventListener("click", allTasksFilterHandler);
  falseTasksBtn.addEventListener("click", falseTasksFilterHandler);

  function renderAllTasks(taskList) {
    const fragment = document.createDocumentFragment();

    Object.values(taskList).forEach((task) => {
      const li = taskListTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  //li template
  function taskListTemplate({ _id, title, body } = {}) {
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
    completeBtn.textContent = "Завершить задачу";
    completeBtn.classList.add("btn", "btn-primary", "complete-btn");

    li.appendChild(span);
    li.appendChild(article);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
  }
  // Добавление таски
  function onEventListenerHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Введите и название и содержание задачи!");
      return;
    }
    const task = createNewTask(titleValue, bodyValue);
    const addTask = taskListTemplate(task);
    listContainer.insertAdjacentElement("afterbegin", addTask);
    form.reset();
    deleteMessHandler(listContainer, val);
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task_№${Math.random() * 1000000}`,
    };

    objOfTasks[newTask._id] = newTask;

    return { ...newTask };
  }

  // Удаление таски
  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Правда удалить задачу ${title}?`);
    if (!isConfirm) return;
    delete objOfTasks[id];
    return isConfirm;
  }

  function deleteTaskFromHTML(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  }

  function onDeleteHandler({ target }) {
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      const parentID = parent.dataset.taskId;
      const confirmed = deleteTask(parentID);
      deleteTaskFromHTML(confirmed, parent);
      deleteMessHandler(listContainer, val);
    }
  }

  // Подтверждение выполнения таски

  function changeCompleteTaskInHtml(complete, el) {
    if (complete == true) {
      el.classList.remove("btn-primary");
      el.classList.add("btn-success");
      el.textContent = "Задача завершена / Восстановить";
    } else if (complete == false) {
      el.classList.remove("btn-success");
      el.classList.add("btn-primary");
      el.textContent = "Завершить задачу";
    }
  }

  function completeTask(id) {
    if (objOfTasks[id].completed == false) {
      objOfTasks[id].completed = true;
      //  listContainer.childNodes.forEach((list) => console.log(list[id]));
    } else if (objOfTasks[id].completed == true) {
      objOfTasks[id].completed = false;
    }
    return objOfTasks[id].completed;
  }

  function onCompleteHandler({ target }) {
    if (target.classList.contains("complete-btn")) {
      const parent = target.closest("[data-task-id]");
      const completeID = parent.dataset.taskId;
      const completed = completeTask(completeID);
      changeCompleteTaskInHtml(completed, target);
    }
  }

  // Сообщение об отсутствии тасков

  const val = messageTemplate(wrapper);
  function messageTemplate(wrapp) {
    const fragment = document.createDocumentFragment();
    const divSection = document.createElement("div");
    divSection.classList.add("message-section", "mt-5");

    const divContainer = document.createElement("div");
    divContainer.classList.add("container");

    const divMess = document.createElement("div");
    divMess.classList.add("alert", "alert-warning", "message");
    divMess.textContent = "Список задач пуст";
    divMess.style.fontWeight = "bold";
    divMess.style.fontSize = "large";

    divContainer.appendChild(divMess);
    divSection.appendChild(divContainer);
    fragment.appendChild(divSection);
    wrapp.appendChild(fragment);
    return divSection;
  }

  deleteMessHandler(listContainer, val);
  function deleteMessHandler(list, el) {
    if (Boolean(list.childNodes.length) == true) {
      el.classList.add("d-none");
    } else if (Boolean(list.childNodes.length) == false) {
      el.classList.remove("d-none");
    }
  }

  //Фильтр тасков по кнопкам (все таски и незавершенные таски)
  /*
   * Конечно я добился того чтобы по клику по разным кнопкам показывались списки которые мне нужны, но они друг с другом не дружат
   * К примеру при клике на кнопку "Незавершенные задачи" у нас полностью стирается старый список и из того самого исходного массива объектов по новой сортируется
   * и составляется список с объектами у которых completed = false. Так же и наоборот, при клике на "Все задачи" у нас срабатывает renderAllTasks.
   * Но когда я завершаю задачу в поле "Незавершенные задачи" она: (во 1) - не исчезает из-за того что становится true, во вторых, поле "Все задачи" абсолютно никак
   * не имеет отношения к этому клику, там рендерятся совершенно новые таски.
   * На этом и застрял.
   * Буду пробовать решать проблему через СSS variables, но ещё не знаю как.
   */

  function allTasksFilterHandler() {
    falseTasksBtn.classList.remove("btn-primary");
    falseTasksBtn.classList.add("btn-outline-primary");
    allTasksBtn.classList.remove("btn-outline-primary");
    allTasksBtn.classList.add("btn-primary");
  }

  function falseTasksFilterHandler() {
    allTasksBtn.classList.remove("btn-primary");
    allTasksBtn.classList.add("btn-outline-primary");
    falseTasksBtn.classList.remove("btn-outline-primary");
    falseTasksBtn.classList.add("btn-primary");
  }
})(tasks);
