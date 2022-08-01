// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 

console.log("1)Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. ")
const toBuy = [
    {
        productType: "milk",
        quantity: 2,
        isItBuy: false,
        pricePerOne: 10,
        sum: 20,
    },
    {  
        productType: "coffe",
        quantity: 1,
        isItBuy: true,
        pricePerOne: 24,
        sum: 24,
    },
    {
        productType: "onions",
        quantity: 10,
        isItBuy: true,
        pricePerOne: 2,
        sum: 20,
    },
    {
        productType: "tomato",
        quantity: 5,
        isItBuy: false,
        pricePerOne: 7,
        sum: 35,
    },
]

console.log(toBuy)
// Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
console.log(`2) Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.`)

toBuy.sort(function (a, b) {
    if (a.isItBuy > b.isItBuy) {
      return 1;
    }
    if (a.isItBuy < b.isItBuy) {
      return -1;
    }
    return 0;
});
console.log(toBuy)

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
console.log(`3) Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний. (ОТМЕТИЛ ЧТО КУПИЛИ MILK)`)

function done(array, productType) {
    const item = array.find(item => item.productType == productType);
    item.isItBuy = true;
    return array
}
console.log(done(toBuy, 'milk'))





// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім).
console.log(`4) Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім).
УДАЛИЛ: tomato`)


function deleteItem (array,productType){
    let newArray = array.filter((item => item.productType !== productType));
    return newArray;
}
console.log(deleteItem(toBuy, 'tomato'))

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
console.log('5) Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24. ДОКУПИЛ: banana и milk ')

let milk = {
    productType: "milk",
    quantity: 5,
    isItBuy: false,
    pricePerOne: 15,
    sum: 75,
};

let banana = {
    productType: "banana",
    quantity: 10,
    isItBuy: false,
    pricePerOne: 25,
    sum: 100,
};

function addItem(array, newProduct) {
    const quantity = newProduct.quantity;
    const productIndex = array.findIndex((product) => product.productType === newProduct.productType)
    if(productIndex !== -1) {
      array[productIndex] = {
        ...newProduct,quantity: newProduct.quantity + array[productIndex].quantity,pricePerOne: newProduct.pricePerOne + array[productIndex].pricePerOne, sum:  newProduct.sum + array[productIndex].sum
    }
    }else {
      array.push(newProduct)
    }
    return array
}

// докупили milk
console.log(' докупили milk')
console.log(addItem(toBuy, milk))

// докупили banana
console.log(' докупили banana')
console.log(addItem(toBuy, banana))




// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.



console.log('6)Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.')
function sum(array){
    let summa = 0;
    let arr =[]
    array.map(item => {
        arr.push(item.quantity*item.pricePerOne)
    });
    for(let i = 0; i < arr.length; i++){
        summa += arr[i]
    }
    return summa
};

console.log('Summ:', sum(toBuy))

// Підрахунок суми всіх (не) придбаних продуктів.

console.log('7) Підрахунок суми всіх (не) придбаних продуктів.')

function sumNotBuy(array){
    let summa = 0;
    let arr =[]
    array.map(item => {
        if( item.isItBuy == false){
            arr.push(item.quantity*item.pricePerOne)
        }
    });
    for(let i = 0; i < arr.length; i++){
        summa += arr[i]
    }
    return summa
};

console.log('Summ Not Buy:', sumNotBuy(toBuy))
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

console.log('8) Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає')

function sortUpDown(array, value){
    if(value == '>'){
        array.sort(function(a,b){
            if(a.sum > b.sum){
                return 1
            }
            if(a.sum < b.sum){
                return -1
            }

        })
        return array
    } 
    if(value == '<'){
        array.sort(function(a,b){
            if(a.sum < b.sum){
                return 1
            }
            if(a.sum > b.sum){
                return -1
            }
        })
        return array
    }
    if(value == '='){
        array.sort(function(a,b){
            if(a.sum = b.sum){
                return 0
            }
        })
        return array
    }  
}

console.log('От большего к меньшему:')
console.log(sortUpDown(toBuy, '<'))

console.log('От меньшего к большему:')
console.log(sortUpDown(toBuy, '>'))