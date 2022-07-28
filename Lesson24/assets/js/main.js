// Мінімум

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
    const a = 0.1;
    const b = 0.2;
    let sum = a + b;

    alert('0.1 + 0.2: '+ sum.toFixed(1));

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
    const c = "1";
    const d = 2;

    alert('"1" + 2: ' + +((+c)+d));
// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
    alert("Задание с объёмом флешки")

    let flashMemory = parseInt(prompt('Який обсяг флешки?', 'Мб'));
    const fileWeight = 820;

    let fileQuantity = Math.floor(flashMemory / fileWeight) ;
    alert('На вашу флешку поместиться:' + fileQuantity + ' файл(ов)');
// Норма

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

alert('Задача про шоколад');

let moneyAmount = parseInt(+prompt('Сколько у Вас денег?'));
let chockolateCost = parseInt(+prompt('Сколько стоит шоколад?'));
let toBuy = Math.floor(moneyAmount / chockolateCost);
let moneyRemain = moneyAmount - toBuy * chockolateCost;


if(chockolateCost > moneyAmount || moneyAmount == 0){
    alert("Ты не можешь себе позволить шоколад. Иди работай, бездельник")
} else if(moneyAmount%chockolateCost == 0){
    
    alert('Вы можете купить: '+ toBuy +' плитки(ок) шоколада и у Вас не останется больше денег');
} else {

    alert('Вы можете купить: '+ toBuy +' плитки(ок) шоколада и у Вас останется ' + moneyRemain +' гривна(гривен)');
}
    


// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

alert('Задача на разворот числа');
let num = prompt('Введите любое число, которое хотите развернуть');

num = num.split('');
num = num.reverse();
num = Number(num.join(''));
alert(num);


// Максимум

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
alert('Задание с депозитом');

const money = parseInt(prompt('Какую сумму хотите положить на девозит?', 'USD'));
const deposit = 0.05 / 12;
const period = 2;
let earn = money * period * deposit;
earn = earn.toFixed(2);

alert('Eсли положите ' + money + ' USD на 2 месяца по депозитной ставке 5% в год, Вам начислиться: ' + earn +' USD');


// Що повернуть вирази:
//  2 && 0 && 3 
    console.log('2 && 0 && 3 =>' ,2 && 0 && 3, "- false"); //false - 0

//  2 || 0 || 3
    console.log('2 || 0 || 3 =>', 2 || 0 || 3, "- true"); //true - 2

// 2 && 0 || 3
    console.log('2 && 0 || 3 =>', 2 && 0 || 3, "- true"); //true - 3



// Задание с остатком времени от суток

alert('Задание с остатком времени от суток');
const dayTime = 24;

let userTime = prompt('What time?',"hh:mm");
let userResult = userTime.split(':');



let {userHours, userMinutes} = userResult;
userHours = userResult[0];
userMinutes = userResult[1] / 60;
userMinutes = userMinutes.toFixed(2);

userTime = +userHours+(+userMinutes);

let remTime = dayTime - userTime;
remTime = String(remTime);

let remDay = remTime.split('.');
let {remHours, remMinutes} = remDay;

remHours = remDay[0];
remMinutes = remDay[1];

if (remDay[1] !== undefined ){
    remMinutes = +remDay[1] /100 * 60;
    remMinutes = remMinutes.toFixed();
    alert('Remain: ' + remHours + ' hours and ' + remMinutes + ' minutes');
} else {
    alert('Remain: ' + remHours + ' hours');
}










