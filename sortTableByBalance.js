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
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
    no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
        one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];

      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      } else if (Number(x.innerHTML) < Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    } else if (!shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i].nextSibling);
      switching = false;
    }
  }
}
