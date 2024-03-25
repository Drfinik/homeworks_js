"use strict";


// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', () => {
    console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.onload = () => {
    console.log("страница загрузилась");
};

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
document.addEventListener('click', function (event) {
    if (event.target.tagName) {
        const className = event.target.classList.contains('super_element') ? 'присутствует' : 'отсутствует';
        console.log(`Класс "super_element" ${className} в элементе "${event.target.tagName.toLowerCase()}".`);
    }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textareaElement = document.querySelector('textarea');
textareaElement.addEventListener('mouseover', function () {
    console.log("Вы навели на textarea.");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ulElement = document.querySelector('ul');
ulElement.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target.textContent);
    }
});
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// Ответ: Потому что обработчик события click для ul использует делегирование и срабатывает первым, затем срабатывает общий обработчик click на document,
// где проверяется наличие класса "super_element" у элемента, поэтому сначала выводится текст из 5 задания, а потом из 3 задания

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const listItems = document.querySelectorAll('ul li');
listItems.forEach((item, index) => {
    if (index % 2 !== 0) {
        item.firstElementChild.style.backgroundColor = 'red';
    }
});