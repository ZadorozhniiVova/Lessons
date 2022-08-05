// DOM

// Створити сторінку, що показує нумерований список пісень:
var playList = [
    {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
    },

    {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
    },

    {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
    },

    {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
    },

    {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
    },

    {
    author: "AC/DC",
    song:"BACK IN BLACK"
    },

    {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
    },

    {
    author: "METALLICA",
    song:"ENTER SANDMAN"
    }
];



// Створити сторінку, що показує нумерований список пісень:

function sortList(list){
    let sortList = document.createElement('ul')
    sortList.setAttribute('class', 'sortList')
    sortList.setAttribute('style', 'list-style:none; margin: 10px;font-family: "Cinzel", serif;letter-spacing: 0.9px')
    
    for(let key of list){ 
        key.toString = function keyToString(){
            key = `${this.song} - author: ${this.author} ` 
            return key
        }
    }
        
    for(let i=0; i<= list.length-1;i++){
        let text = `Song No.${i+1}:  ${list[i]}`;
        let sortList__el = document.createElement('li')
        sortList__el.setAttribute('class', 'sortList__el')
        sortList__el.setAttribute('style', 'margin: 5px')
        sortList.appendChild(sortList__el)
        sortList__el.innerText = text;
    } 
    document.body.appendChild(sortList)
}
sortList(playList)


// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

let button = document.createElement('button')
    button.setAttribute('class', 'button animate__animated animate__pulse animate__infinite	')
    button.innerText = 'Открыть / Закрыть окно'
    button.setAttribute('style', 'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; padding: 10px;background-color: #024f94;border-radius:10px;font-family:"Cinzel", serif; font-size:15px; border: 3px solid #efd091; width: 200px;color: #efd091;cursor:pointer;margin:10px')
    document.body.appendChild(button)

let modal = document.createElement('div')
    modal.setAttribute('class', 'modal')
    document.body.appendChild(modal)
    modal.setAttribute('style', 'width:300px;height:200px;background-color: #024f94;border-radius:20px; opacity: 0;position: absolute;display:flex;align-items:center;justify-content:center; flex-direction: column; transition: 1s, easy-in-out; top: -100%;left:10%')    
        
let modal__text = document.createElement('span')
    modal__text.innerText = 'Чтобы закрыть окно нажмите "Закрыть"'
    modal__text.setAttribute('style', 'margin-bottom: 40px; color: #efd091; font-size: 20px;text-align:center; font-family:"Cinzel", serif;') 
    modal.appendChild(modal__text);

let modal__btn = document.createElement('button')
    modal__btn.innerText = 'Закрыть'
    modal__btn.setAttribute('style', 'padding: 10px; border-radius: 5px; outline: none; background-color: #85aac5; color: #efd091;font-family:"Cinzel", serif; font-size:25px; border: 3px solid #efd091;cursor:pointer;') 
    modal.appendChild(modal__btn);
    modal__btn.setAttribute('class','animate__animated animate__pulse animate__infinite	')

    button.onclick = () => {
        modal.style.top === '-100%' ? modal.style.top = '300px' : modal.style.top = '-100%';
        modal.style.opacity === '0' ? modal.style.opacity = '1' : modal.style.opacity = '0';
    }

    modal__btn.onclick = () => {
        modal.style.top === '300px' ? modal.style.top = '-100%' : modal.style.top = '230px';
        modal.style.opacity === '0' ? modal.style.opacity = '1' : modal.style.opacity = '0';
    }

// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

let trafficLight = document.createElement('div');
    trafficLight.setAttribute('class','trafficLight');
    trafficLight.setAttribute('style','background-color: black; width: 100px; height 300px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding: 20px;border-radius: 10px; margin: 10px');
    document.body.appendChild(trafficLight);

let lightRed = document.createElement('div');
    lightRed.setAttribute('class','trafficLight__light');
    lightRed.setAttribute('style','border-radius:50%;content:" ";width: 50px;height: 50px; background-color: #ff5100; margin: 10px 0; opacity: 0.5');
    trafficLight.appendChild(lightRed);
let lightYellow = document.createElement('div');
    lightYellow.setAttribute('class','trafficLight__light');
    lightYellow.setAttribute('style','border-radius:50%;content:" ";width: 50px;height: 50px; background-color: #FFFF00; margin: 10px 0; opacity: 0.5')
    trafficLight.appendChild(lightYellow);
let lightGreen = document.createElement('div');
    lightGreen.setAttribute('class','trafficLight__light');
    lightGreen.setAttribute('style','border-radius:50%;content:" ";width: 50px;height: 50px; background-color: #66ff00; margin: 10px 0; opacity: 0.5');
    trafficLight.appendChild(lightGreen);   
    
let lightSwitcher = document.createElement('button');
    lightSwitcher.setAttribute('class', 'button animate__animated animate__pulse animate__infinite');
    lightSwitcher.innerText = 'Cменить цвет';
    lightSwitcher.setAttribute('style', 'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; padding: 10px;background-color: #024f94;border-radius:10px;font-family: "Cinzel", serife; font-size:15px; border: 3px solid #efd091; width: 100px;color: #efd091;cursor:pointer; margin: 10px');
    document.body.appendChild(lightSwitcher);    


let node = null

lightSwitcher.onclick = () => selectNextNode()

function selectNextNode() {
    resetOpacity();
    let list = document.getElementsByClassName('trafficLight');
    if(node === null) {
        node = list[0].firstChild;
    }
    node.style.opacity = '1'; 
    node = node.nextSibling;
}

function resetOpacity() {
    let lightOpacity = document.getElementsByClassName('trafficLight__light');
    for(let i = 0; i < lightOpacity.length; i++) {
        lightOpacity[i].style.opacity = '0.5';
    }
}

lightSwitcher.onclick = () => selectNextNode()

