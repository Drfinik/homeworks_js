"use strict";

/*
Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.
*/

// let test = confirm("У вас много денег?");
// if (test === true) {
//   console.log("Скоро будем у вас ;)");
// } else {
//   console.log("До свидания.");
// }


/*В исходном коде было избыточное сравнение test === true,
 так как confirm возвращает булевое значение,
 которое уже является true или false. 
 В исправленном коде это сравнение удалено,
  что делает код более кратким и читабельным.
*/ 

// let test = confirm("У вас много денег?");
// if (test) {
//   console.log("Скоро будем у вас ;)");
// } else {
//   console.log("До свидания.");
// }

/*
Тернарный оператор
*/
// let test = confirm("У вас много денег?");
// console.log(test ? "Скоро будем у вас ;)" : "До свидания.");