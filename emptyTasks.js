const val = messageTemplate(wrapper);
function messageTemplate(wrapp) {
  const fragment = document.createDocumentFragment();
  const divSection = document.createElement("div");
  divSection.classList.add("message-section", "mt-5");

  const divContainer = document.createElement("div");
  divContainer.classList.add("container");

  const pMess = document.createElement("p");
  pMess.classList.add("alert", "alert-warning", "message");
  pMess.textContent = "Список задач пуст";
  pMess.style.fontWeight = "bold";
  pMess.style.fontSize = "large";

  divContainer.appendChild(pMess);
  divSection.appendChild(divContainer);
  fragment.appendChild(divSection);
  wrapp.appendChild(fragment);
  return divSection;
}
deleteMessHandler(listContainer, val);
function deleteMessHandler(list, el) {
  if (list.childNodes.length) {
    el.classList.add("d-none");
  } else if (!list.childNodes.length) {
    el.classList.remove("d-none");
  }
}
