const sortBtnBalance = document.querySelector(".sort-balance-btn");
const sortArrowEl = document.querySelector(".sort-balance-arrow");

sortBtnBalance.addEventListener("click", arrowBalanceHandler);
sortBtnBalance.addEventListener("click", sortTableByBalance);
function arrowBalanceHandler(event) {
  if (event.target.classList.contains("bi-arrow-up")) {
    sortArrowEl.classList.remove("bi-arrow-up");
    sortArrowEl.classList.add("bi-arrow-down");
  } else if (event.target.classList.contains("bi-arrow-down")) {
    sortArrowEl.classList.remove("bi-arrow-down");
    sortArrowEl.classList.add("bi-arrow-up");
  }
}

function sortTableByBalance() {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    table = document.getElementById("myTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];

      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
      //   else if (Number(x.innerHTML) < Number(y.innerHTML)) {
      //     shouldSwitch = false;
      //     break;
      //   }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
    // else {
    //   rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

    //   switching = false;
    // }
  }
}
