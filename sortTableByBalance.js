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
  const table = document.getElementById("myTable");
  const tableRows = table.rows;
  let arrs = Array.from(tableRows, (row) => [row, row.cells[3]]).slice(1, -1);
  arrs = arrs.forEach((arr) => console.log(+arr[1].textContent));
}

//   let table, rows, switching, i, x, y, shouldSwitch;
//   table = document.getElementById("myTable");
//   switching = true;

//   while (switching) {
//     switching = false;
//     rows = table.rows;

//     for (i = 1; i < rows.length - 1; i++) {
//       shouldSwitch = false;

//       x = rows[i].getElementsByTagName("TD")[2];
//       y = rows[i + 1].getElementsByTagName("TD")[2];

//       if (Number(x.textContent) > Number(y.textContent)) {
//         shouldSwitch = true;
//         break;
//       } else {
//         if (parseFloat(y.textContent) > parseFloat(x.textContent)) {
//           shouldSwitch = false;
//         }
//       }
//     }
//     console.log(shouldSwitch);
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     } else if (!shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i].nextSibling);
//       switching = true;
//     }
//   }
