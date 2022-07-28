// Мінімум

// 1)Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let userAge = parseInt(prompt("Сколько Вам лет?"));

if (userAge < 0 ){
    alert('Не корректный ввод, попробуйтe еще раз');
}
if (userAge >= 0 && userAge <= 11){
    alert('Вы ребенок');
} 
if(userAge >=12 && userAge <= 17){
    alert('Вы подросток');
} 
if(userAge >=18 && userAge <= 59){
    alert('Вы взрослый');  
} 
if (userAge > 60){
    alert('Вы пенсионер');
}


// 2)Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let number = parseInt(prompt('Введите число от 0 до 9:', ));

switch (number){
    case 0 :
        alert(`Ваш спец символ к числу ${number} : )`);
        break;
    case 1 :
        alert(`Ваш спец символ к числу ${number} : !`);
        break;
    case 2 :
        alert(`Ваш спец символ к числу ${number} : @`);
        break;
    case 3 :
        alert(`Ваш спец символ к числу ${number} : #`);
        break;
    case 4 :
        alert(`Ваш спец символ к числу ${number} : $`);
        break;
    case 5 :
        alert(`Ваш спец символ к числу ${number} : %`);
    break;
    case 6 :
        alert(`Ваш спец символ к числу ${number} : ^`);
        break; 
    case 7 :
        alert(`Ваш спец символ к числу ${number} : &`);
        break;    
    case 8 :
        alert(`Ваш спец символ к числу ${number} : *`);
        break;          
    case 9 :
        alert(`Ваш спец символ к числу ${number} : (`);
        break;
    default :
    alert('Введите ЧИСЛО в промежутке от 0 до 9');
}

// 3)Підрахуй суму всіх чисел в заданому користувачем діапазоні.


let minNum = parseInt(prompt("Введите начало промежутка"));
let maxNum = parseInt(prompt("Введите конец промежутка"));
let sum = 0;

if(isNaN(minNum) || isNaN(maxNum) || minNum == undefined || maxNum == undefined){
    alert('Введите числовое значение');
}else{
    for(let i = minNum; i <=maxNum; i++) sum += i
  alert(`Сумма всех чисел в промежутке от ${minNum} до ${maxNum} : ${sum}`); 
}

// 4)Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let num1 = parseInt(prompt("Введите первое число"));
let num2 = parseInt(prompt("Введите второе число"));
let arr = []

if(num1 % num2 == 0){
    alert(`Найбольший делитель для чисел ${num1} и ${num2} = ${num2}`);
}else if(num2 % num1 == 0){
    alert(`Найбольший делитель для чисел ${num1} и ${num2} = ${num1}`);
}else{
    if(num1 % num2 !== 0 && num2 % num1 !== 0){
        for(let i = 0; i <= num1; i++){
            for(let j = 0; j <= num2; j++){
                if((num1 % i == 0) && (num2 % j == 0)){
                    if(i==j){
                        arr.push(i);
                    }
                }
            }
        }
    }
    alert(`Найбольший делитель для чисел ${num1} и ${num2} = ${arr[arr.length - 1]}`);
}



// 5)Запитай у користувача число і виведи всі дільники цього числа.

let num = parseInt(prompt("Введите число, чтобы узнать значения на которые оно делится без остатка"));
let dev = [];

for(let i = 0; i <= num; i++){
  if(num % i == 0){
    dev.push(i)
  }
}
alert(`число ${num} делится без остатка на числа: ${dev}`)


// Норма

// 1)Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// 2)Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//      1)від 200 до 300 - знижка буде 3%; 
//      2)від 300 до 500 - 5%;
//      3)від 500 і вище - 7%.

let buySumVal = parseInt(prompt('Введите цену покупки, чтобы узнать цену'));

if(isNaN(buySumVal)){
  alert("Введите число")
}else if(buySumVal < 200){
    alert(`Вы заплатите: ${buySumVal}`);
}else if(buySumVal > 200 && buySumVal < 300){
    buySumVal -= buySumVal * 0.03;
    alert(`Вы заплатите: ${buySumVal}`);
}else if(buySumVal >= 300 && buySumVal < 500){
    buySumVal -= buySumVal * 0.05;
    alert(`Вы заплатите: ${buySumVal}`);
}else if(buySumVal > 500){
    buySumVal -= buySumVal * 0.07;
    alert(`Вы заплатите: ${buySumVal}`);
}


// 3)Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let numbers = []
    positiv = []
    negativ = []
    zero = []
    double = []
    notDouble = []
do{
    for(let i = 0; i < 10; i++){
        numbers[i] = prompt("Введите число( по одному за каждій раз");
        if(numbers[i] < 0 && numbers[i] !== 0) negativ.push(numbers[i]);
        if(numbers[i] > 0 && numbers[i] !== 0) positiv.push(numbers[i]);
        if(numbers[i] == 0) zero.push(numbers[i]);
        (numbers[i] % 2 == 0) ? double.push(numbers[i]) : notDouble.push(numbers[i]); 
    } 
    alert(`Вы ввели числа ${numbers} из которых: Отрицательных: ${negativ.length}, Положительлных: ${positiv.length}, Нулей: ${zero.length}, Парных: ${double.length} и не парных: ${notDouble.length}`)         
}while(numbers.length(10));



    
// 4)Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let whichDay = new Date();
let weekDay = (whichDay.getDay());
let agree;
let days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','субота']

for(i = 0; i<=7;i++){
    if(weekDay == days.indexOf(days[i])){
        weekDay = days[i];
        do{
            agree = confirm(`Сегодня ${weekDay}, хотите узнать какой завтра день недели?`);
        }while (agree == false){
            weekDay = days[i+1];
            agree = alert(`Завтра ${weekDay}`);
            break
        }
    } 
}


// Максимум

// 1)Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


let min = 0;
let max = 100;
let middle = max;
let result = false


while(result == (confirm(`Ваше число ${middle} ?`))){
    middle = (Math.floor((min+max)/2));
    if(confirm(`Ваше число больше ${middle} ?`)){
        min = middle;
    }if (confirm(`Ваше число меньше ${middle} ?`)){
        max = middle
    }
};
alert(`result: ${middle}`)

// 2)Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

for(let i = 2; i <= 9; i++) {
    for(let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
   }
}

// 3)Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
// 

let today = new Date((parseInt(prompt("введите год"))), (parseInt(prompt("введите месяц"))), (parseInt(prompt("введите день")))) ;
let day = today.valueOf() + (3600 * 24 * 1000);
let nextDate = new Date(day);

nextDay = nextDate.getDate()
nextMonth = nextDate.getMonth()
nextYear = nextDate.getFullYear()
console.log(`Следующия день: ${nextDay}/${nextMonth}/${nextYear} (дд/мм/гггг)`)








