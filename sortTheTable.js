const sortBtnNames = document.querySelector(".sort-names-btn");
const sortArrowEl2 = document.querySelector(".sort-names-arrow");

sortBtnNames.addEventListener("click", sortNamesHandler);

function sortNamesHandler(event) {
  if (event.target.classList.contains("bi-arrow-up")) {
    sortArrowEl2.classList.remove("bi-arrow-up");
    sortArrowEl2.classList.add("bi-arrow-down");
  } else if (event.target.classList.contains("bi-arrow-down")) {
    sortArrowEl2.classList.remove("bi-arrow-down");
    sortArrowEl2.classList.add("bi-arrow-up");
  }
}

const myTable = document.getElementById("myTable");

function literasSortTable(n) {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Установить направление сортировки по возрастанию:
  dir = "asc";
  // Создайте цикл, который будет продолжаться до тех пор, пока не будет выполнено переключение:
  while (switching) {
    // Переключение не производится
    switching = false;
    rows = Array.from(table.rows);

    // Прокрутите все строки таблицы (кроме первой, которая содержит заголовки таблицы):
    for (i = 1; i < rows.length - 2; i++) {
      // Начнем с того, что переключения быть не должно:
      shouldSwitch = false;
      // Получите два элемента, которые хотите сравнить: один из текущей строки и один из следующей:
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      // Проверьте, должны ли две строки поменяться местами в зависимости от направления, по возрастанию или по убыванию:
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // Если да, отметьте его как переключатель и разорвите цикл:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // Если да, отметьте его как переключатель и разорвите цикл:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Каждый раз при переключении увеличивайте это значение на 1.:
      switchcount++;
    } else {
      // Если переключение не было выполнено И направление «возрастающее», установите направление «по убыванию» и снова запустите цикл while.
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

const sortBtnBalance = document.querySelector(".sort-balance-btn");
const sortArrowEl = document.querySelector(".sort-balance-arrow");

sortBtnBalance.addEventListener("click", sortBalanceHandler);

function sortBalanceHandler(event) {
  if (event.target.classList.contains("bi-arrow-up")) {
    sortArrowEl.classList.remove("bi-arrow-up");
    sortArrowEl.classList.add("bi-arrow-down");
  } else if (event.target.classList.contains("bi-arrow-down")) {
    sortArrowEl.classList.remove("bi-arrow-down");
    sortArrowEl.classList.add("bi-arrow-up");
  }
}
