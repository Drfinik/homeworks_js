// обработка JSON с помощью ассинхронного запроса,  работает по принципу "обещание"
const url = "./data.json";

// начинаем работать с ассинхроном
async function fetchData(url) {
  // пробуем получить данные, если не получим, то ловим ошибку через catch
  try {
    // ожидаем ответ от сервера или можем получить 404
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`ошибка - ${error}`);
  }
}

const data = await fetchData(url);
console.log(data);

// создание карточек
const wrapper = document.querySelector(".list-items__wrapper");
data.forEach((element) => {  
  wrapper.insertAdjacentHTML(
    "beforeend",
    `
    <div class="list-items__item">
    <div class="item__img" style="background-image: url(${element.img})">
        <div class="item__img_blackout">
            <button>${element.button}</button>
        </div>
    </div>
    <div class="item__description">
        <h3>${element.h3}</h3>
        <p>${element.p}</p>
        <span>$${element.span}</span>
    </div>
</div>
    `
  );
});
