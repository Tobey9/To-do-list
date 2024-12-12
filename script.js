const nameInputEl = document.getElementById("inputName");
const dateInputEl = document.getElementById("inputDate");
const submitBtn = document.getElementById("submitBtn");
const resultContainerEl = document.querySelector(".result-container");

const listsObject = [];

const minDate = new Date().toISOString().split("T")[0];
dateInputEl.setAttribute("min", minDate);

function displayValue() {
  let todolist = "";

  listsObject.forEach((object) => {
    const { name, date } = object;
    const html = `<div class='text-result'>
              <div class='name-result'>${name}</div>
              <div class='date-result'>${date}</div>
              <i class='fa-solid fa-x delete'></i>
            </div>`;
    todolist += html;
  });
  resultContainerEl.innerHTML = todolist;

  document.querySelectorAll(".delete").forEach((delBtn, i) => {
    delBtn.addEventListener("click", (wow) => {
      listsObject.splice(i, 1);
      displayValue();
    });
  });
}

function inputValue(e) {
  e.preventDefault();
  const name = nameInputEl.value;
  const date = dateInputEl.value;
  listsObject.push({ name: name, date: date });

  displayValue();
}

submitBtn.addEventListener("click", inputValue);
