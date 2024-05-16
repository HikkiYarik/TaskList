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

  // добавитьь детей в родителей
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
function tbodyTemplate({ _id, name, email, isActive, balance, number } = {}) {
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
  tdName.style.color = "black";
  tdName.style.fontWeight = "bold";
  tdName.textContent = name;

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
  tr.appendChild(tdName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdBalance);
  tbody.appendChild(tr);

  // вернуть собранный tbody
  return tbody;
}

function totalBalanceTemplate(balance) {
  const result = balance.reduce((acc, curr) => {
    let result;
    acc = acc + curr;
    result = acc;
    return result;
  }, 0);

  const trTotal = document.createElement("tr");

  const th = document.createElement("th");

  const p = document.createElement("p");
  p.textContent = `Total balance: ${result.toFixed(2)}`;

  th.appendChild(p);
  trTotal.appendChild(th);

  return trTotal;
}

// table таблица и render users отображение в ней пользователей
function renderUsers(usersList) {
  // создать фрагмент
  const fragment = document.createDocumentFragment();
  // создать элемент таблицы и дать ей классы bootstrap
  const table = document.createElement("table");
  table.classList.add("table-dark", "table");
  let totalBalance;
  Object.values(usersList).forEach((user) => {
    let result = usersList.map((user) => Number(user.balance));

    totalBalance = totalBalanceTemplate(result);
    const tbody = tbodyTemplate(user);
    table.appendChild(thead);
    table.appendChild(tbody);

    fragment.appendChild(table);
  });
  table.appendChild(totalBalance);
  usersContainer.appendChild(fragment);
}
renderUsers(usrs);
