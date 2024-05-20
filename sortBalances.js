const sortBtn = document.querySelector(".sort-balance-btn");
const sortArrowEl = document.querySelector(".sort-balance-arrow");

sortBtn.addEventListener("click", sortBalanceHandler);

function sortBalanceHandler(event) {
  if (event.target.classList.contains("bi-arrow-up")) {
    sortArrowEl.classList.remove("bi-arrow-up");
    sortArrowEl.classList.add("bi-arrow-down");
  } else if (event.target.classList.contains("bi-arrow-down")) {
    sortArrowEl.classList.remove("bi-arrow-down");
    sortArrowEl.classList.add("bi-arrow-up");
  }
}

let sortArr = usrs.map((user) => Number(user.balance));
sortArr.sort();

// function sortTable() {
//     let table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("myTable");
//     switching = true;
/*Make a loop that will continue until
    no switching has been done:*/
// while (switching) {
//start by saying: no switching is done:
//   switching = false;
//   rows = table.rows;
/*Loop through all table rows (except the
      first, which contains table headers):*/
//   for (i = 1; i < (rows.length - 1); i++) {
//start by saying there should be no switching:
// shouldSwitch = false;
/*Get the two elements you want to compare,
        one from current row and one from the next:*/
// x = rows[i].getElementsByTagName("TD")[0];
// y = rows[i + 1].getElementsByTagName("TD")[0];
//check if the two rows should switch place:
// if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//if so, mark as a switch and break the loop:
//       shouldSwitch = true;
//       break;
//     }
//   }
//   if (shouldSwitch) {
/*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//       }
//     }
//   }
