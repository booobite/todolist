console.log("Hello");

const inputText = document.querySelector(".input__text");
const inputTime = document.querySelector(".input__time");
const todoBtn = document.querySelector(".todo__btn");
const todoClear = document.querySelector(".todo__clear");
const container = document.querySelector(".todo__items");

let count = 0;

todoBtn.onclick = addTodo;
function addTodo() {
  let text = inputText.value;
  let time = inputTime.value;
  if (text == "" || time == "") {
    alert("Fill the form!");
  } else {
    count = count + 1;
    container.insertAdjacentHTML(
      "beforeend",
      ` <div class="todo__item">
      <div class="todo__left">
        <div class="checkbox-wrapper-15">
          <input
            class="inp-cbx"
            id=${count}
            type="checkbox"
            style="display: none"
          />
          <label class="cbx" for=${count}>
            <span>
              <svg width="12px" height="9px" viewbox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            <span class="todo__text">${text}</span>
          </label>
        </div>
  
        <p class="todo__time">${time}</p>
      </div>
      <img src="./delete.svg" alt="" class="todo__delete" />
    </div>
      `
    );

    inputText.value = "";
    inputTime.value = "";

    let btns = document.querySelectorAll(".todo__delete");
    let items = document.querySelectorAll(".todo__item");
    btns.forEach(function (item, index) {
      item.onclick = function () {
        items[index].remove();
        // метод remove полностью удаляет html элемент со страницы
      };
    });
  }
}

todoClear.onclick = clearTodo;
function clearTodo() {
  container.innerHTML = "";
}
