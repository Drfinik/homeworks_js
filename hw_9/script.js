"use strict";

const messageBtn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");
const formInputs = document.querySelectorAll(".form-control");

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
// document.getElementById('from').addEventListener('input', () => {
//     document.querySelector('span').textContent = this.value;
// });
// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
messageBtn.addEventListener("click", () => {
    message.classList.add("animate_animated", "animate_fadeInLeftBig");
    message.style.visibility = "visible";
  });

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
// formInputs.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     if (e.target.value === "") {
//       e.target.classList.add("error");
//     } else {
//       e.target.classList.remove("error");
//     }
//   });
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let hasEmptyInputs = false;
//   formInputs.forEach((input) => {
//     if (input.value === "") {
//       input.classList.add("error");
//       hasEmptyInputs = true;
//     }
//   });

//   if (hasEmptyInputs) {
//     alert("Заполните все поля!");
//   } else {
//     alert("Форма отправлена!");
//   }
// });