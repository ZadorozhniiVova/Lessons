// Норма

// 1)Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

const name = prompt("Ваше ім'я?", "");
alert("Привіт, " + name);
console.log("Привіт, " + name);


// 2) Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

const year = 2022;
const userBirth = prompt("Ваш рік народження?", "");
const userAge = year - userBirth;

alert("Вам " + userAge + " років");
console.log("Вам " + userAge + " років");

// 3) Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

const squareLength = parseInt(prompt("Яка довжина сторони квадрата?", "см"));
const squarePerimeter = squareLength * 4;

alert("периметр квадрата " + squarePerimeter + " см");
console.log("периметр квадрата " + squarePerimeter + " см");


// Максимум

// 1)Запитай у користувача радіус кола і виведи площу такої окружності.

const circleRadius = parseInt(prompt("Який радіус кола?", "см"));
const circleSquare = 3.14 * circleRadius**2;

alert("Площа кола " + circleSquare + " см");
console.log("Площа кола " + circleSquare + " см");

// 2)Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

const distanceBeetweenCity = parseInt(prompt("Яка відстань від вас до міста вашого призначення", "км"));
const requestedTime = parseInt(prompt("За скільки годин ві хочете туди дістатися", "год"));

const requestedSpeed = distanceBeetweenCity / requestedTime;

alert("Щоб встигнути вчасно, Вам потрібно рухатись зі швидкістю " + requestedSpeed + " км/год");
console.log("Щоб встигнути вчасно, Вам потрібно рухатись зі швидкістю " + requestedSpeed + " км/год");


// 3) Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

const exchangeRate = 0.99;

const exchangeQuantity = parseInt(prompt("Скільки USD ви бажаєте конвертувати у EUR?", "$"));

const exchangeMoney = exchangeQuantity * exchangeRate;

alert("Якщо Ви обміняєте " + exchangeQuantity + " USD, тоді Ви отримаєте " + exchangeMoney + " EUR");
console.log("Якщо Ви обміняєте " + exchangeQuantity + " USD, тоді Ви отримаєте " + exchangeMoney + " EUR");

