const resetBtn = document.querySelector(".reset-sort-btn");
const resetIcon = document.querySelector(".reset-clockwise");

resetBtn.addEventListener("click", resetTable);

function resetTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TH")[0];
      y = rows[i + 1].getElementsByTagName("TH")[0];

      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
