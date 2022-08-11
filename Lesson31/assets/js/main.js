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
console.log(body)

const block = document.createElement('div')
    block.setAttribute('id','block')
    block.classList.toggle('block')
    block.setAttribute('style','width: 250px; height: 100px; border: 1px solid grey; margin: 10px; border-radius: 5px;position: relative;display: flex;box-sizing: border-box;transition: 0.8s')
    document.body.appendChild(block);

let block__text = document.createElement('span')
    divText__text.classList.toggle('block__text')
    block__text.setAttribute('style', 'z-index:1; text-wrap:wrap; width: 100%; font-family: Arial, sans-serif; font-size: 20px; padding: 3px; ')
    block__text.innerText = 'Some Text' 
    block.appendChild(block__text)


var lastX; // Отслеживает последнюю позицию X мыши
  var rect = document.getElementById("block");
  rect.addEventListener("mousedown", function(ev) {
    lastX = ev.pageX;
      addEventListener("mousemove", moved);
      ev.preventDefault(); // Предотвращает выделение
  });

  function buttonPressed(press) {
    if (press.buttons == null)
      return press.which != 0;
    else
      return press.buttons != 0;
  }
  function moved(moved) {
    if (!buttonPressed(moved)) {
      removeEventListener("mousemove", moved);
    } else {
      var dist = moved.pageX - lastX;
      var newWidth = Math.max(10, rect.offsetWidth + dist);
      rect.style.width = newWidth + "px";
      lastX = moved.pageX;
    }
  }
// block.addEventListener('mousedown', function(eg){
//     console.log('mousedown')

    
    // let blockWidth = eg.pageX-block.offsetLeft;
    // let blockHeight = eg.pageY-block.offsetTop;
    // console.log(eg.pageX)
    // if(eg.pageX)
    // if((parseInt(block.style.width) - eg.pageX-block.offsetLeft) < 15 && (parseInt(block.style.width) - eg.pageX-block.offsetLeft) >= -5 && (parseInt(block.style.height) - eg.pageY-block.offsetTop) < 15 && (parseInt(block.style.height) - eg.pageY- block.offsetTop) >= -5 ){
    //     console.log('Ты в углу, двигай мышку')
        
    // }
    // while(eg.type === 'mousedown'){
    //     block.style.width = `${eg.pageX - block.offsetLeft}` + 'px'; 
    //     block.style.height = `${eg.pageY - block.offsetTop}` + 'px';
    //     console.log(block.style.width)
    //     console.log(block.style.height)
    //     return
    // }


        
            

        // body.addEventListener('mouseup', function(e){

        //     let width = `${e.pageX - block.offsetLeft}` + 'px'; 
        //     let height = `${e.pageY - block.offsetTop}` + 'px';
        //     block.style.width = width;
        //     console.log(`width: ${width}`)
        //     block.style.height = height;
        //     console.log(`height: ${height}`)
        //     return
        // })
    
//     eg.stopPropagation()
// })
