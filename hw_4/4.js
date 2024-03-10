"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/
// С функцией
function printMountain(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('x'.repeat(i));
    }
}
printMountain(20);
// Без фукции
for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}