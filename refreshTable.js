const resetBtn = document.querySelector(".reset-sort-btn");

resetBtn.addEventListener("click", resetTable);

function resetTable() {
  const table = document.getElementById("myTable");
  const tableRows = table.querySelectorAll("tr:not(thead>tr,tfoot>tr)");
  const arr = Array.from(tableRows, (row) => [row, +row.cells[0].textContent]);
  arr.sort(([, a], [, b]) => a - b);
  for (const [elem] of arr) {
    table.insertAdjacentElement("beforeend", elem);
  }
}
