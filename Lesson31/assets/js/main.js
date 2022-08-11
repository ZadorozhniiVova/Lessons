"use strict"
// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

let title = document.createElement('h1')
    title.innerText = 'Note Pad'
    title.setAttribute('style','font-family: Arial, sans-serif; font-size: 28px; margin-left: 10px')
    document.body.appendChild(title);

let subtitle = document.createElement('span')
    subtitle.innerText = 'Ctrl+E-edit / Ctrl+S-save'
    subtitle.setAttribute('style','font-family: Arial, sans-serif; font-size: 12px; margin-left: 10px')
    document.body.appendChild(subtitle);

let divText = document.createElement('div')
    divText.classList.toggle('divText')
    divText.setAttribute('style','width: 250px; height: 100px; border: 1px solid grey; margin: 10px; border-radius: 5px;position: relative;display: flex;box-sizing: border-box;')
    document.body.appendChild(divText);

let divText__text = document.createElement('span')
    divText__text.classList.toggle('divText__text')
    divText__text.setAttribute('style', 'z-index:1; text-wrap:wrap; width: 100%; font-family: Arial, sans-serif; font-size: 20px; padding: 3px')
    divText__text.innerText = 'Some Text' 
    divText.appendChild(divText__text)

let textArea = document.createElement('textarea')
    textArea.setAttribute('id', 'textArea');
    textArea.setAttribute('style','position: absolute; width:100%; height: 100%; z-index:-1;; border-radius: 5px; border: 0;display:none; font-family: Arial, sans-serif; font-size: 20px; padding: 3px ')
    divText.appendChild(textArea);

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyE' && (event.ctrlKey || event.metaKey)){
        let area = document.getElementById('textArea');
        area.value = divText__text.innerText;
        area.setAttribute('style','position: absolute; width:100%; height: 100%; z-index:2; border-radius: 5px; border: 0; outline: none ;font-family: Arial, sans-serif; font-size: 20px; padding: 3px ')
        area.focus()
        event.preventDefault()
        area.addEventListener('keydown', function(event){
            if(event.code == 'KeyS' && (event.ctrlKey || event.metaKey)){
                divText__text.innerText = area.value
                area.style.display = 'none'
                event.preventDefault()
            }
        })
    }
}) 


// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
const table = document.getElementById('table')
const candy = document.getElementById('candy')
const price = document.getElementById('price')

let arr = Array.from( table.rows );
arr = arr.slice(1)


candy.addEventListener('click', function(){
    arr.sort( (a, b) => {
        let str  = a.cells[0].textContent;
        let str2 = b.cells[0].textContent;
        return str.localeCompare(str2);
    } );
    table.tBodies[0].append(...arr);
})

price.addEventListener('click', function(){
    arr.sort( (a, b) => {
        let pr  = a.cells[1].textContent;
        let pr2 = b.cells[1].textContent;
        return pr.localeCompare(pr2, 'kn', {numeric: 'true'});
    } );
    table.tBodies[0].append(...arr);
})

// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

const body = document.getElementById('body')

const block = document.createElement('div')
    block.setAttribute('id','block')
    block.classList.toggle('block')
    block.setAttribute('style','position: absolute; width: 400px;min-width: 150px; max-width: 80%; height: 100px; min-height: 50px; max-height: 200px; border: 1px solid blue; margin: 10px; border-radius: 5px;display: flex;box-sizing: border-box;padding: 5px;')
    document.body.appendChild(block);

const blockResizer = document.createElement('div')
    blockResizer.setAttribute('id','blockResizer')
    blockResizer.classList.toggle('resizer')
    blockResizer.setAttribute('style','width: 10px; height: 10px; border: 1px solid blue; border-radius: 50%; position: absolute; cursor: nwse-resize; bottom: -4px; right: -4px;background-color: white')
    block.appendChild(blockResizer);


let block__text = document.createElement('p')
    divText__text.classList.toggle('block__text')
    block__text.setAttribute('style', 'text-wrap:wrap; width: 100%; height: 100%;font-family: Arial, sans-serif; font-size: 15px;')
    block__text.innerText = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. начала XVI века. ' 
    block.appendChild(block__text)


function resizeDiv(div){
    const element = document.querySelector(div);
    console.log(element)
    const resizer = document.querySelector(div + ' .resizer');
    console.log(resizer)
  
    resizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      body.addEventListener('mousemove', resize)
      body.addEventListener('mouseup', stopResize)
    })

    function resize(e){
        element.style.width = e.pageX - element.offsetLeft + 'px';
        element.style.height = e.pageY- element.offsetTop + 'px';
    }

    function stopResize(){
        body.removeEventListener('mousemove', resize)
    }
}

resizeDiv('.block')