const wrapper = document.querySelector(".task-list-wrapper");
const wrapperUsers = document.querySelector(".users-wrapper");
const switchBtn = document.querySelector(".switch-btn");
const switchText = document.querySelector(".switch-text");
const headDiv = document.querySelector(".head-div");

switchBtn.addEventListener("click", switchWrapper);

function switchWrapper() {
  if (
    wrapper.classList.contains("active") &&
    wrapperUsers.classList.contains("d-none")
  ) {
    localStorage.removeItem("switch");
    localStorage.setItem("switch", "active");
    wrapper.classList.remove("active");
    wrapperUsers.classList.add("active");
    wrapper.classList.add("d-none");
    wrapperUsers.classList.remove("d-none");
    switchBtn.classList.remove("btn-primary");
    switchBtn.classList.add("btn-dark");
    btnSwitchTheme.classList.remove("btn-primary");
    btnSwitchTheme.classList.add("btn-dark");
    switchText.textContent = "Users. Click for switch to 'Task list'";
    headDiv.classList.remove("bg-primary");
    headDiv.classList.add("bg-dark");
  } else if (
    wrapperUsers.classList.contains("active") &&
    wrapper.classList.contains("d-none")
  ) {
    localStorage.removeItem("switch");
    localStorage.setItem("switch", "d-none");
    wrapperUsers.classList.remove("active");
    wrapper.classList.add("active");
    wrapperUsers.classList.add("d-none");
    wrapper.classList.remove("d-none");
    switchBtn.classList.remove("btn-dark");
    switchBtn.classList.add("btn-primary");
    btnSwitchTheme.classList.remove("btn-dark");
    btnSwitchTheme.classList.add("btn-primary");
    switchText.textContent = "Task list. Click for switch to 'Users'";
    headDiv.classList.remove("bg-dark");
    headDiv.classList.add("bg-primary");
  }
}

let lastSelectedSwitch = localStorage.getItem("switch");
function setSwitch(theme) {
  if (theme === "active") {
    wrapper.classList.remove("active");
    wrapperUsers.classList.add("active");
    wrapper.classList.add("d-none");
    wrapperUsers.classList.remove("d-none");
    switchBtn.classList.remove("btn-primary");
    switchBtn.classList.add("btn-dark");
    document.querySelector(".btn-switch").classList.remove("btn-primary");
    document.querySelector(".btn-switch").classList.add("btn-dark");
    switchText.textContent = "Users. Click for switch to 'Task list'";
    headDiv.classList.remove("bg-primary");
    headDiv.classList.add("bg-dark");
  } else if (theme === "d-none") {
    wrapperUsers.classList.remove("active");
    wrapper.classList.add("active");
    wrapperUsers.classList.add("d-none");
    wrapper.classList.remove("d-none");
    switchBtn.classList.remove("btn-dark");
    switchBtn.classList.add("btn-primary");
    document.querySelector(".btn-switch").classList.remove("btn-dark");
    document.querySelector(".btn-switch").classList.add("btn-primary");
    switchText.textContent = "Task list. Click for switch to 'Users'";
    headDiv.classList.remove("bg-dark");
    headDiv.classList.add("bg-primary");
  }
}
setSwitch(lastSelectedSwitch);
