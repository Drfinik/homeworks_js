"use strict";

/*
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после 
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

// С использованием метода forEach:
const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach(product => {
  product.price = product.price * 0.85; // Уменьшаем цену на 15%
});

console.log(products); 


// С использованием обычного цикла for:
const products_2 = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

for (let i = 0; i < products_2.length; i++) {
  products_2[i].price = products_2[i].price * 0.85; // Уменьшаем цену на 15%
}

console.log(products_2); 
