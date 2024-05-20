const sortBtnBalance = document.querySelector(".sort-balance-btn");
const sortArrowEl = document.querySelector(".sort-balance-arrow");

sortBtnBalance.addEventListener("click", arrowBalanceHandler);

function arrowBalanceHandler(event) {
  if (event.target.classList.contains("bi-arrow-up")) {
    sortArrowEl.classList.remove("bi-arrow-up");
    sortArrowEl.classList.add("bi-arrow-down");
  } else if (event.target.classList.contains("bi-arrow-down")) {
    sortArrowEl.classList.remove("bi-arrow-down");
    sortArrowEl.classList.add("bi-arrow-up");
  }
}

sortBtnBalance.addEventListener("click", sortBalanceHandler(2));

function sortBalanceHandler(n) {
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
    let nums = [];
    // Прокрутите все строки таблицы (кроме первой, которая содержит заголовки таблицы):
    for (i = 1; i < rows.length - 1; i++) {
      // Начнем с того, что переключения быть не должно:
      shouldSwitch = false;
      // Получите два элемента, которые хотите сравнить: один из текущей строки и один из следующей:
      x = rows[i].getElementsByTagName("TD")[n];
      nums.push(Number(x.textContent));
    }

    nums.sort((prev, next) => prev - next);
    console.log(nums);
  }
}
