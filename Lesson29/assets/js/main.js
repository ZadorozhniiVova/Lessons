// // КЛАССЫ

// class Hero{
//     constructor(name, level){
//         this.name = name;
//         this.level = level;
//         this.rating = 0;
//     }

//     greet(){
//         return `${this.name} says hello`;
//     }
// }

// const hero1 = new Hero('Varg', 1);
// console.log(hero1)
// class Mage extends Hero {
//     constructor( name, level, spell) {
//         super(name, level);

//         this.spell = spell;
//     }
// }

// function Mage( name, level, spell) {
//     Hero.call(this, name, level);
//     this.spell = spell;
// }


// class PrintMAchine{
//     constructor(size, color, family){
//         this.size = size; //font-size
//         this.color = color; // font colot
//         this.family = family; //font-color
//     }
//     print(text){
//         document.write(`<p style ="font-size: ${this.size}px;color:${this.color};font-family:${this.family}">${text}</p>`)
//     }

// }



// const pm = new PrintMAchine(44, 'deeppink', 'ComicSan')
// pm.print('Hello World')

// class Article{
//     constructor(heading, text, tags, date){
//         this.heading = heading
//         this.text = text
//         this.tags = tags
//         this.date = date
//     }

//     tagGenerator(){
//         let result = "<ul>"
//         this.tags.forEach(tag => {
//            result += `<li><a href="#>${tag}</a></li>` 
//         })
//         return result + '</ul>'

//     }
//     print(){
//         document.write(`<h2>${this.heading}</h2>
//                         <p>${this.text}</p>
//                         <div>${this.tagGenerator()}</div>
//                         <div>${this.date}</div>`)
//     }

// }

// let article = new Article('Our Job', 'Very ineresting article', ['ear','sleep','code'], '10/11/12')

// article.print()


console.log(`// Завдання 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.
`)

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get CircleRadius(){                 // get-властивість, яке повертає радіус кола;
        return this.radius;
    }

    set CircleRadius(radius){           // set-властивість, що встановлює радіус кола;
        this.radius = radius;
    }

    get CircleDiam(){
        return (this.radius * 2)        // get-властивість, яке повертає діаметр кола;
    }

    circleSquare(radius){
        return (2 * Math.PI * radius);  // метод, що обчислює довжину кола.
    }

    circleLengtht(radius){
        return ((radius **2) * Math.PI )// метод, що обчислює довжину кола.
    }

}


let circle = new Circle(10)

console.log(`circle: ${circle.radius}`)
console.log(`get CircleRadius(): ${circle.CircleRadius}`)           // get-властивість, яке повертає радіус кола;
console.log(`set CircleRadius(): ${circle.CircleRadius = 12}`)      // set-властивість, що встановлює радіус кола;
console.log(`get CircleDiam(): ${circle.CircleDiam}`)               // get-властивість, яке повертає діаметр кола;
console.log(`circle: ${circle.radius}`)
console.log(`circleSquare: ${circle.circleSquare(10).toFixed(2)}`)       // метод, що обчислює площу кола;
console.log(`circleLengtht: ${circle.circleLengtht(10).toFixed(2)}`)  // метод, що обчислює довжину кола.


console.log(`
// Завдання 2

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.
// Продемонструй роботу написаних методів.
`)

class Marker{
    constructor(color, tonerCapacity){
        this.color = color;                                     // // поле, яке зберігає колір маркера;
        this.tonerCapacity = parseInt(tonerCapacity);           // // поле, яке зберігає кількість чорнил у маркері (у відсотках);
    } 

    toPrint(text){                     // // метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
        let textArr = text.split("");
        let textLength = this.tonerCapacity / 0.5 ;
        let toPrint = []
        for( let i = 0; i <= textLength-1; i++){
            if(textArr[i] == " "){
               textLength += 1 ;
            }
            toPrint.push(textArr[i])
        }
        return document.write(`<p style="color: ${this.color}">${toPrint.join("")}</p>`);    
    }
}

let redMarker = new Marker('red','100%');
let blueMarker = new Marker('blue', 50)
let greenMarker = new Marker('green', 25)

let textPrint = 'I live in a house near the mountains. I have two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind.';

document.write("<h2>Задание 2</h2>")
redMarker.toPrint(textPrint)        // Продемонструй роботу написаних методів.
blueMarker.toPrint(textPrint)       // Продемонструй роботу написаних методів.
greenMarker.toPrint(textPrint)      // Продемонструй роботу написаних методів.

class MarkerRefill extends Marker{          // // Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.
    constructor(color,tonerCapacity){
        super(color,tonerCapacity);
    }
    refill(){
        this.tonerCapacity = 100
    }
}

let orangeMarker = new MarkerRefill('orange', 15)
orangeMarker.toPrint(textPrint)     //до заполнения
orangeMarker.refill()               //заполнение маркера
// orangeMarker.toPrint(textPrint)     //печать после заполнения




// Завдання 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().



// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
class Employee{                                 
    constructor( name,surname, age){
        this.name = name,
        this.surname = surname,
        this.age = age
    };
    
};

let list = [];

function addToWorkersList(array, name,surname, age){
    const worker = new Employee(name,surname, age)
    array.push(worker)
} 

addToWorkersList(list , 'Anton', 'Kirov', 27);
addToWorkersList(list , 'Igor', 'Bus', 35);
addToWorkersList(list , 'Kiril', 'Ivanon', 25);
addToWorkersList(list , 'Leha', 'Topor', 18);
addToWorkersList(list , 'Suzanna', 'Kura', 67);


// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
class EmpTable{
    constructor(listOfEmployee){
        this.listOfEmployee = listOfEmployee
    }

    getHtml(){
        let Employee = document.getElementById('Employee');
        let result = '<h1 style="margin-left: 0px; margin-bottom: 0px">Задание 3</h1><ul style="margin-top:0">'
        for(let key of this.listOfEmployee){
            key.toString = function keyToString(){
                key = `Name:${this.name} ${this.surname},  Age:${this.age}`
                return key
            };
            result +=`<li style="list-style:none; margin-top:10px; font-size:18px; padding-left: 0px;">${key}</li>`  
        }
        result+'</ul>'
        return Employee.innerHTML = result
    }
} 
const tableList = new EmpTable(list)



// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
tableList.getHtml()
