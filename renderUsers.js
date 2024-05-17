// дать нам новый массив объектов
const usrs = getUsers();

// основной контейнер для таблицы
const usersContainer = document.querySelector(
  ".users-list-section .users-group"
);

// статическая thead таблицы
function theadTemplate() {
  // создать элемент thead
  const thead = document.createElement("thead");
  // создать элемент tr
  const tr = document.createElement("tr");
  // создать элемент th1 и дать ему атрибуты
  const th1 = document.createElement("th");
  th1.setAttribute("scope", "col");
  th1.textContent = "#";
  // создать элемент th2 и дать ему атрибуты
  const th2 = document.createElement("th");
  th2.setAttribute("scope", "col");
  th2.textContent = "Name";
  // создать элемент th3 и дать ему атрибуты
  const th3 = document.createElement("th");
  th3.setAttribute("scope", "col");
  th3.textContent = "Email";
  // создать элемент th4 и дать ему атрибуты
  const th4 = document.createElement("th");
  th4.setAttribute("scope", "col");
  th4.textContent = "Balance";
  const sortBtn = document.createElement("button");
  sortBtn.setAttribute("type", "button");
  sortBtn.classList.add("btn", "btn-outline-dark");

  // const svgArrow = document.createElement("svg");
  // svgArrow.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  // svgArrow.setAttribute("width", "16");
  // svgArrow.setAttribute("height", "16");
  // svgArrow.setAttribute("fill", "currentColor");
  // svgArrow.classList.add("bi", "bi-arrow-up-square");
  // svgArrow.setAttribute("viewBox", "0 0 16 16");

  // const path = document.createElement("path");
  // path.setAttribute("fill-rule", "evenodd");
  // path.setAttribute(
  //   "d",
  //   "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
  // );

  // svgArrow.appendChild(path);
  // sortBtn.appendChild(svgArrow);

  const i = document.createElement("i");
  i.classList.add("bi", "bi-arrow-up-square");

  sortBtn.appendChild(i);
  th4.appendChild(sortBtn);

  // добавить детей в родителей
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  thead.appendChild(tr);

  // вернуть полноценно собранный thead
  return thead;
}
// полноценно собранный thead из функции записать в переменную.
const thead = theadTemplate();

// tbody таблицы (основное тело, куда будут писаться пользователи.)
function tbodyTemplate({
  _id,
  name,
  email,
  isActive,
  balance,
  number,
  wiki,
} = {}) {
  // создать элемент tbody
  const tbody = document.createElement("tbody");
  // создать элемент tr
  const tr = document.createElement("tr");
  // создать элемент th и дать ему классы и стили
  const th = document.createElement("th");
  th.classList.add("table-secondary");

  th.style.color = "black";
  th.style.fontWeight = "bold";
  th.setAttribute("scope", "row");
  th.textContent = number;

  // создать элемент tdName и дать ему классы и стили
  const tdName = document.createElement("td");
  tdName.classList.add("table-secondary");
  // nameLink имя с ссылкой на статью в wiki каждого юзера
  const nameLink = document.createElement("a");
  nameLink.setAttribute("href", wiki);
  nameLink.setAttribute("target", "_blank");
  nameLink.style.color = "black";
  nameLink.style.fontWeight = "bold";
  nameLink.textContent = name;

  // создать элемент tdEmail и дать ему классы и стили
  const tdEmail = document.createElement("td");
  tdEmail.classList.add("table-secondary");
  tdEmail.style.color = "black";
  tdEmail.style.fontWeight = "bold";
  tdEmail.textContent = email;

  // создать элемент tdBalance и дать ему классы и стили
  const tdBalance = document.createElement("td");
  tdBalance.classList.add("table-secondary");
  tdBalance.style.color = "black";
  tdBalance.style.fontWeight = "bold";
  tdBalance.textContent = balance;

  // Добавляем детей в родителей, собираем конструкцию
  tr.appendChild(th);
  tdName.appendChild(nameLink);
  tr.appendChild(tdName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdBalance);
  tbody.appendChild(tr);

  // вернуть собранный tbody
  return tbody;
}

// Каркас итогового общего баланса юзеров
function totalBalanceTemplate(balance) {
  // В balance мы передаём массив балансов всех юзеров из функции renderUsers
  // Просуммировать балансы всех юзеров
  const result = balance.reduce((acc, curr) => {
    let result;
    acc = acc + curr;
    result = acc;
    return result;
  }, 0);

  // элемент футера для таблицы
  const tfoot = document.createElement("tfoot");

  // контейнер для строки таблицы
  const tr = document.createElement("tr");

  // сама строка таблицы, здесь примечателен аттрибут colspan
  // в текст контент записываем результат суммирования балансов юзеров с двумя знаками после запятой
  const td = document.createElement("td");
  td.setAttribute("colspan", "4");
  td.style.textAlign = "end";
  td.style.fontWeight = "bold";
  td.textContent = `Total balance: ${result.toFixed(2)}`;

  tr.appendChild(td);
  tfoot.appendChild(tr);

  // вернуть собранный tfoot
  return tfoot;
}

// table таблица и render users отображение в ней пользователей
function renderUsers(usersList) {
  // создать фрагмент
  const fragment = document.createDocumentFragment();
  // создать элемент таблицы и дать ей классы bootstrap
  const table = document.createElement("table");
  table.classList.add("table-dark", "table", "table-hover", "col");

  // важно создать тотал баланс именно вне foreach и записать его в таблицу так же вне
  // иначе тотал баланс у нас будет висеть после каждого пользователя
  let totalBalance;

  Object.values(usersList).forEach((user) => {
    // создать массив из балансов всех юзеров, записать в result
    let result = usersList.map((user) => Number(user.balance));
    // записать в переменную totalBalance функцию возвращающую каркас(template)
    // передать массив балансов в функцию totalBalanceTemplate
    totalBalance = totalBalanceTemplate(result);
    // здесь записываем тело таблицы в переменную, она возвращает каркас(template)
    // сюда уже передаём просто юзеров
    const tbody = tbodyTemplate(user);
    // добавляем элементы в таблицу
    table.appendChild(thead);
    table.appendChild(tbody);

    fragment.appendChild(table);
  });
  // последний элемент в таблицу, totalBalance
  table.appendChild(totalBalance);
  usersContainer.appendChild(fragment);

  return table;
}
const table = renderUsers(usrs);
