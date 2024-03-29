const newData = JSON.parse(data);
console.log(newData);

const divContentElem = document.querySelector('.content');

newData.forEach(element => {
    divContentElem.insertAdjacentHTML('beforeend', `
    <div class='wrapper'>
        <h2>${element.title}</h2>
        <img src="${element.thumbnailUrl}" alt="Photo${element.id}">   
       
        
    </div>
    `)

});