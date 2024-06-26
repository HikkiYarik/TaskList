const sortBtnBalance = document.querySelector(".sort-balance-btn");
const sortArrowEl = document.querySelector(".sort-balance-arrow");
let switcher = false;
sortBtnBalance.addEventListener("click", sortTableByBalance);
function sortTableByBalance() {
  const table = document.getElementById("myTable");
  const tableRows = table.querySelectorAll("tr:not(thead>tr,tfoot>tr)");
  const arr = Array.from(tableRows, (row) => [row, +row.cells[3].textContent]);
  if (switcher === false) {
    arr.sort(([, a], [, b]) => a - b);
    for (const [elem] of arr) {
      table.insertAdjacentElement("beforeend", elem);
    }
    sortArrowEl.classList.remove("bi-arrow-up");
    sortArrowEl.classList.add("bi-arrow-down");
    switcher = true;
  } else if (switcher === true) {
    arr.sort(([, a], [, b]) => b - a);
    for (const [elem] of arr) {
      table.insertAdjacentElement("beforeend", elem);
    }
    sortArrowEl.classList.remove("bi-arrow-down");
    sortArrowEl.classList.add("bi-arrow-up");
    switcher = false;
  }
}
