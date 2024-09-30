const listsObject = [{ name: "eat breakfast", date: "2024 - 11 - 22" }];

const addBtn = document.querySelector(".js-add-btn");

renderTodolist();

function renderTodolist() {
  let todolist = "";

  listsObject.forEach((todoObject, index) => {
    const { name, date } = todoObject;
    const html = `<div>${name}</div>
    <div>${date}</div>
    <button class="js-delete-btn delete-btn">Delete</button>`;

    todolist += html;
  });

  document.querySelector(".js-list").innerHTML = todolist;

  document.querySelectorAll(".js-delete-btn").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      listsObject.splice(index, 1);
      renderTodolist();
    });
  });
}

addBtn.addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const list = document.querySelector(".js-to-do-list");
  const dueDate = document.querySelector(".js-date");
  const name = list.value;
  const date = dueDate.value;

  listsObject.push({
    name,
    date,
  });

  list.value = "";

  renderTodolist();
}
