const btnSwitchTheme = document.getElementById("btnSwitch");
const themeIcon = document.querySelector(".theme-icon");

btnSwitchTheme.addEventListener("click", switchTheme);

function switchTheme() {
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
    themeIcon.classList.remove("bi-brightness-high-fill");
    themeIcon.classList.add("bi-moon-stars-fill");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");

    themeIcon.classList.remove("bi-moon-stars-fill");
    themeIcon.classList.add("bi-brightness-high-fill");
  }
}
