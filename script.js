const input = document.querySelector("input");
const add = document.querySelector("button");
const ul = document.querySelector("ul");
add.addEventListener("click", (event) => {
  event.preventDefault();
  const list = document.createElement("li");
  ul.append(list);
  list.textContent = input.value;
  const arr = [];
  input.value = "";
  setLocalStorage("tasks", arr);
});
function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
