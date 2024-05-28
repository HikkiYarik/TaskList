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
    wrapper.classList.remove("active");
    wrapperUsers.classList.add("active");
    wrapper.classList.add("d-none");
    wrapperUsers.classList.remove("d-none");
    switchBtn.classList.remove("btn-primary");
    switchBtn.classList.add("btn-dark");
    switchText.textContent = "Users. Click for switch to 'Task list'";
    headDiv.classList.remove("bg-primary");
    headDiv.classList.add("bg-dark");
  } else if (
    wrapperUsers.classList.contains("active") &&
    wrapper.classList.contains("d-none")
  ) {
    wrapperUsers.classList.remove("active");
    wrapper.classList.add("active");
    wrapperUsers.classList.add("d-none");
    wrapper.classList.remove("d-none");
    switchBtn.classList.remove("btn-dark");
    switchBtn.classList.add("btn-primary");
    switchText.textContent = "Task list. Click for switch to 'Users'";
    headDiv.classList.remove("bg-dark");
    headDiv.classList.add("bg-primary");
  }
}
