// Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const car = {
    maker: "Mitsubishi",
    model: "Lancer",
    year: 2006,
    averageSpeed: 60,
    tankCapacity: 40,
    averageConsumption: 12,
    
    // 1)Метод, який виводить на екран інформацію про автомобіль.
    carInfo() {
        for(let key in this){
            if(typeof(this[key]) !== 'function'){
                console.log(`${key} = ${this[key]}`)
            } 
        }
    },
    
    addDriver(name) {
        car.driver = name;
    },
    // 3) Перевірка водія на наявність його ім’я у списку
    checkName(driver) {
        if(this.driver == driver){
            return true
        }else{
            return false
        }
    },

    // 4)Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
    avCons(dist){
        return (dist / 100 * this.averageConsumption)
    },

    avTime(dist) {
        if( (dist / this.averageSpeed) / 4 >=1){
            return ((dist / this.averageSpeed) + ((dist / this.averageSpeed) / 4))
        } else{
            return (dist / this.averageSpeed)
        }
    },
}



// 1)Метод, який виводить на екран інформацію про автомобіль.
console.log(`________________________________________`)
console.log(`Метод, який виводить на екран інформацію про автомобіль.:`)

car.carInfo();

// 2)Додавання ім’я водія у список
console.log(`________________________________________`)
console.log(`Додавання ім’я водія у список:`)

car.addDriver('Ivan');
car.carInfo();

// 3) Перевірка водія на наявність його ім’я у списку
console.log(`________________________________________`)
console.log(`Перевірка водія на наявність його ім’я у списку:`)

console.log(car.checkName('Ivan'));
console.log(car.checkName('Anton'));


// 4)Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
console.log(`________________________________________`)
console.log(`Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. :`)


let dist = 242;

console.log(`Average consumption: ${Math.floor(car.avCons(dist))} ltrs`);
console.log(`Time to pass distance: ${(car.avTime(dist)- (car.avTime(dist) - Math.floor(car.avTime(dist))))} and ${Math.floor((car.avTime(dist) - Math.floor(car.avTime(dist)))*60)} minutes`);



// Норма

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:

const time = {
    hours: 10,
    minutes: 50,
    seconds: 50,

    // Для виведення часу на екран.
    displayTime(){
        return (`${this.hours}:${this.minutes}:${this.seconds}`);
    },

    // Зміни часу на передану кількість секунд.
    secCount(s){
        if((s + this.seconds) < 60){
            this.seconds += s;
            return (`${this.hours}:${this.minutes}:${this.seconds}`);
        }
        if((s + this.seconds) >= 60){
            this.minutes += Math.floor((this.seconds + s) / 60);
            this.seconds = (this.seconds + s) - (60 * Math.floor((this.seconds + s) / 60));
            
          return (`${this.hours}:${this.minutes}:${this.seconds}`);

        } if(time.minutes>=60){
            time.hours += Math.floor((time.minutes) / 60);
            time.minutes -= (60 * Math.floor(time.minutes / 60));

            // this.minutes = this.minutes - 60;
            // this.hours += 1;
            return (`${this.hours}:${this.minutes}:${this.seconds}`);
        }
        
    },

    // Зміни часу на передану кількість хвилин.
    minCount(m){
        if((m + this.minutes) < 60){
            this.minutes += m;
            return (`${this.hours}:${this.minutes}:${this.seconds}`);
        }

        if(m + this.minutes >= 60){
            this.hours += Math.floor((m + this.minutes) / 60);
            this.minutes += m - (60 * Math.floor((this.minutes + m) / 60));
            return (`${this.hours}:${this.minutes}:${this.seconds}`);
        }
    },

    // Зміни часу на передану кількість годин.
    hrCount(h){
        if((this.hours + h) < 24){
            return (`${this.hours + h}:${this.minutes}:${this.seconds}`);
        } else{
            return(`Days:${
                Math.floor((this.hours + h)/24)
            } Hours:${
                ((this.hours + h) - (24 * Math.floor((this.hours + h)/24)))
            } Minutes:${
                this.minutes
            } Seconds:${
                this.seconds
            }`)
        }
        
    }
}
    
// Зміни часу на передану кількість секунд.
console.log(`________________________________________`)
console.log(`Зміни часу на передану кількість секунд.:`)

let addSec = 150;
console.log(`Addsec: ${time.secCount(addSec)}`);

// Зміни часу на передану кількість хвилин.

console.log(`________________________________________`)
console.log(`Зміни часу на передану кількість хвилин:`)

let addMin = 75;
console.log(`addMin: ${time.minCount(addMin)}`);

// Зміни часу на передану кількість годин.

console.log(`________________________________________`)
console.log(`Зміни часу на передану кількість годин.:`)

let addHrs = 23
console.log(`addHrs: ${time.hrCount(addHrs)}`);

// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.



// Максимум

// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:


const count = {
    fraction1: {
        upNum: 1,
        btmNum: 2,
    },
    fraction2: {
        upNum: 1,
        btmNum: 4,
    },

    // Складання 2-х НАРУЖНЫХ об'єктів-дробів.
    sumOut(fraction1,fraction2)  {
        if(fraction1.btmNum === 0 || fraction2.btmNum === 0){
            return('на ноль делить нельзя');
        }else {
            if(fraction1.btmNum === fraction2.btmNum){
                upNum = parseInt(fraction1.upNum + fraction2.upNum);
                btmNum = parseInt(fraction1.btmNum);
                return((upNum / btmNum).toFixed(2));
            }else {
                if((fraction1.btmNum / fraction2.btmNum) == Math.floor(fraction1.btmNum / fraction2.btmNum)){
                    upNum = (fraction1.upNum +  fraction2.upNum*(fraction1.btmNum / fraction2.btmNum));
                    btmNum = fraction2.btmNum * (fraction1.btmNum / fraction2.btmNum)
                    return((upNum / btmNum).toFixed(2));
                }else {
                    upNum = (fraction1.upNum * fraction2.btmNum + fraction2.upNum * fraction1.btmNum)
                    btmNum = fraction2.btmNum * fraction1.btmNum;
                    return((upNum / btmNum).toFixed(2));
                }
            }
        }

    },

    // Складання 2-х Внутренних об'єктів-дробів.
    sumIn() {
        if(this.fraction1.btmNum === 0 || this.fraction2.btmNum === 0){
            return('на ноль делить нельзя');
        }else {
            if(this.fraction1.btmNum === this.fraction2.btmNum){
                upNum = parseInt(this.fraction1.upNum + this.fraction2.upNum);
                btmNum = parseInt(this.fraction1.btmNum);
                return((upNum / btmNum).toFixed(2));
            }else {
                if((this.fraction1.btmNum / this.fraction2.btmNum) == Math.floor(this.fraction1.btmNum / this.fraction2.btmNum)){
                    upNum = (this.fraction1.upNum +  this.fraction2.upNum*(this.fraction1.btmNum / this.fraction2.btmNum));
                    btmNum = this.fraction2.btmNum * (this.fraction1.btmNum / this.fraction2.btmNum)
                    return((upNum / btmNum).toFixed(2));
                }else {
                    upNum = (this.fraction1.upNum * this.fraction2.btmNum + this.fraction2.upNum * this.fraction1.btmNum)
                    btmNum = this.fraction2.btmNum * this.fraction1.btmNum;
                    return((upNum / btmNum).toFixed(2));
                }
            }
        }
    },

    // Віднімання 2-х Наружных об'єктів-дробів.
    minOut(fraction1,fraction2)  {
        if(fraction1.btmNum === 0 || fraction2.btmNum === 0){
            return('на ноль делить нельзя');
        }else {
            if(fraction1.btmNum === fraction2.btmNum){
                upNum = parseInt(fraction1.upNum - fraction2.upNum);
                btmNum = parseInt(fraction1.btmNum);
                return((upNum / btmNum).toFixed(2));
            }else {
                if((fraction1.btmNum / fraction2.btmNum) == Math.floor(fraction1.btmNum / fraction2.btmNum)){
                    upNum = (fraction1.upNum -  fraction2.upNum*(fraction1.btmNum / fraction2.btmNum));
                    btmNum = fraction2.btmNum * (fraction1.btmNum / fraction2.btmNum)
                    return((upNum / btmNum).toFixed(2));
                }else {
                    upNum = (fraction1.upNum * fraction2.btmNum - fraction2.upNum * fraction1.btmNum)
                    btmNum = fraction2.btmNum * fraction1.btmNum;
                    return((upNum / btmNum).toFixed(2));
                }
            }
        }

    },   
    
    // Віднімання 2-х Внутренних об'єктів-дробів.
    minIn()  {
        if(this.fraction1.btmNum === 0 || this.fraction2.btmNum === 0){
            return('на ноль делить нельзя');
        }else {
            if(this.fraction1.btmNum === this.fraction2.btmNum){
                upNum = parseInt(this.fraction1.upNum - this.fraction2.upNum);
                btmNum = parseInt(this.fraction1.btmNum);
                return((upNum / btmNum).toFixed(2));
            }else {
                if((this.fraction1.btmNum / this.fraction2.btmNum) == Math.floor(this.fraction1.btmNum / this.fraction2.btmNum)){
                    upNum = (this.fraction1.upNum - this.fraction2.upNum * (this.fraction1.btmNum / this.fraction2.btmNum));
                    btmNum = this.fraction2.btmNum * (this.fraction1.btmNum / this.fraction2.btmNum)
                    return((upNum / btmNum).toFixed(2));
                }else {
                    upNum = (this.fraction1.upNum * this.fraction2.btmNum - this.fraction2.upNum * this.fraction1.btmNum)
                    btmNum = this.fraction2.btmNum * this.fraction1.btmNum;
                    return((upNum / btmNum).toFixed(2));
                }
            }
        }
    },

    // Множення 2-х ВНЕШНИХ об'єктів-дробів.
    multOut(fraction1, fraction2) {
        upNum = fraction1.upNum * fraction2.upNum;
        if(fraction1.btmNum === 0 || fraction2.btmNum === 0){
            return('на ноль делить нельзя');
        }else{
            btmNum = fraction1.btmNum * fraction2.btmNum;
        }
        return(upNum / btmNum);
    },   
    
    // Множення 2-х ВНУТРЕННИХ об'єктів-дробів.
    multIn() {
        upNum = count.fraction1.upNum * count.fraction2.upNum;
        if(count.fraction1.btmNum === 0 || count.fraction2.btmNum === 0){
            return('на ноль делить нельзя');
        }else{
        btmNum = count.fraction1.btmNum * count.fraction2.btmNum;
        }
        return(upNum / btmNum);
    },
    // Ділення 2-х ВНЕШНИХ об'єктів-дробів.
    devOut(fraction1, fraction2) {
        upNum = fraction1.upNum * fraction2.btmNum;
        if(fraction1.btmNum === 0 || fraction2.btmNum === 0 || fraction1.upNum === 0 || fraction2.upNum === 0){
            return('Ошибка, деление нуля');
        }else{
            btmNum = fraction1.btmNum * fraction2.upNum;
        }
        return(upNum / btmNum);
    },   
    
    // Ділення 2-х ВНУТРЕННИХ об'єктів-дробів.
    devIn() {
        upNum = count.fraction1.upNum * count.fraction2.btmNum;
        if(count.fraction1.btmNum === 0 || count.fraction2.btmNum === 0 || count.fraction1.upNum === 0 || count.fraction2.upNum === 0){
            return('Ошибка, деление нуля');
        }else{
        btmNum = count.fraction1.btmNum * count.fraction2.upNum;
        }
        return(upNum / btmNum);
    },

    // Скорочення об'єкта-дробу.

    devNum(fraction){
        let devNum = 0
        if (fraction.upNum % fraction.btmNum === 0){
            devNum += fraction.upNum / fraction.btmNum;
            return devNum
        }else{
            for(let i = fraction.btmNum; i >= 1;i--){
                if((fraction.upNum % i) == 0 && fraction.btmNum % i== 0){
                    return (i);
                } 
            }
            devNum += i;
            return(devNum);
        }
    },

    devAfterNum(fraction){
        
        let devNum = count.devNum(fraction);
        let upNum = fraction.upNum / devNum;
        let btmNum = fraction.btmNum / devNum;

        return(`${upNum}/${btmNum}`)
    }, 
}



// Складання 2-х НАРУЖНЫХ об'єктів-дробів.
console.log("Складання 2-х НАРУЖНЫХ об'єктів-дробів:")
fraction1 = {
    upNum: 1,
    btmNum: 2,
}

fraction2 = {
    upNum: 1,
    btmNum: 4,
}
console.log(`${fraction1.upNum}/${fraction1.btmNum} + ${fraction2.upNum}/${fraction2.btmNum} = ${count.sumOut(fraction1,fraction2)}`);

fraction1 = {upNum: 5,btmNum: 20};
fraction2 = {upNum: 10,btmNum: 20};
console.log(`${fraction1.upNum}/${fraction1.btmNum} + ${fraction2.upNum}/${fraction2.btmNum} = ${count.sumOut(fraction1,fraction2)}`);

fraction1 = {upNum: 5,btmNum: 20};
fraction2 = {upNum: 10,btmNum: 0};
console.log(`${fraction1.upNum}/${fraction1.btmNum} + ${fraction2.upNum}/${fraction2.btmNum} = ${count.sumOut(fraction1,fraction2)}`);

// Складання 2-х Внутренних об'єктів-дробів.
console.log(`________________________________________`)
console.log(`Складання 2-х ВНУТРЕННИХ об'єктів-дробів:`)
fraction1 = {
    upNum: 1,
    btmNum: 2,
}

fraction2 = {
    upNum: 1,
    btmNum: 4,
}
console.log(`${count.fraction1.upNum}/${count.fraction1.btmNum} + ${count.fraction2.upNum}/${count.fraction2.btmNum} = ${count.sumIn()}`);

count.fraction1 = {upNum: 5,btmNum: 20};
count.fraction2 = {upNum: 10,btmNum: 20};
console.log(`${count.fraction1.upNum}/${count.fraction1.btmNum} + ${count.fraction2.upNum}/${count.fraction2.btmNum} = ${count.sumIn()}`);

count.fraction1 = {upNum: 5,btmNum: 20};
count.fraction2 = {upNum: 10,btmNum: 0};
console.log(`${count.fraction1.upNum}/${count.fraction1.btmNum} + ${count.fraction2.upNum}/${count.fraction2.btmNum} = ${count.sumIn()}`);

// Віднімання 2-х Наружных об'єктів-дробів.

fraction1 = {
    upNum: 1,
    btmNum: 2,
}

fraction2 = {
    upNum: 1,
    btmNum: 4,
}

console.log(`________________________________________`)
console.log(`Віднімання 2-х НАРУЖНИХ об'єктів-дробів.:`)

console.log(`${fraction1.upNum}/${fraction1.btmNum} - ${fraction2.upNum}/${fraction2.btmNum} = ${count.minOut(fraction1,fraction2)}`);

fraction1 = {upNum: 5,btmNum: 20};
fraction2 = {upNum: 10,btmNum: 20};
console.log(`${fraction1.upNum}/${fraction1.btmNum} - ${fraction2.upNum}/${fraction2.btmNum} = ${count.minOut(fraction1,fraction2)}`);

fraction1 = {upNum: 5,btmNum: 20};
fraction2 = {upNum: 10,btmNum: 0};
console.log(`${fraction1.upNum}/${fraction1.btmNum} - ${fraction2.upNum}/${fraction2.btmNum} = ${count.minOut(fraction1,fraction2)}`);

// Віднімання 2-х Внутренних об'єктів-дробів.
console.log(`________________________________________`)
console.log(`Віднімання 2-х ВНУТРЕННИХ об'єктів-дробів.:`)

fraction1 = {
    upNum: 1,
    btmNum: 2,
}

fraction2 = {
    upNum: 1,
    btmNum: 4,
}

console.log(`${count.fraction1.upNum}/${count.fraction1.btmNum} - ${count.fraction2.upNum}/${count.fraction2.btmNum} = ${count.minIn()}`);

count.fraction1 = {upNum: 5,btmNum: 20};
count.fraction2 = {upNum: 10,btmNum: 20};
console.log(`${count.fraction1.upNum}/${count.fraction1.btmNum} - ${count.fraction2.upNum}/${count.fraction2.btmNum} = ${count.minIn()}`);

count.fraction1 = {upNum: 5,btmNum: 20};
count.fraction2 = {upNum: 10,btmNum: 0};
console.log(`${count.fraction1.upNum}/${count.fraction1.btmNum} - ${count.fraction2.upNum}/${count.fraction2.btmNum} = ${count.minIn()}`);



// Ділення 2-х об'єктів-дробів.

console.log(`________________________________________`)
fraction1 = {
    upNum: 1,
    btmNum: 2,
}
fraction2 = {
    upNum: 1,
    btmNum: 4,
}
console.log(`Множення 2-х НАРУЖНИХ об'єктів-дробів.:`)


console.log(`${fraction1.upNum}/${fraction1.btmNum} / ${fraction2.upNum}/${fraction2.btmNum} = ${count.devOut(fraction1,fraction2)}`);

fraction1 = {upNum: 5,btmNum: 20};
fraction2 = {upNum: 10,btmNum: 20};
console.log(`${fraction1.upNum}/${fraction1.btmNum} / ${fraction2.upNum}/${fraction2.btmNum} = ${count.devOut(fraction1,fraction2)}`);

fraction1 = {upNum: 5,btmNum: 20};
fraction2 = {upNum: 10,btmNum: 0};
console.log(`${fraction1.upNum}/${fraction1.btmNum} / ${fraction2.upNum}/${fraction2.btmNum} = ${count.devOut(fraction1,fraction2)}`);

// Віднімання 2-х Внутренних об'єктів-дробів.
console.log(`________________________________________`)
console.log(`Множення 2-х ВНУТРЕННИХ об'єктів-дробів.:`)

fraction1 = {
    upNum: 1,
    btmNum: 2,
}

fraction2 = {
    upNum: 1,
    btmNum: 4,
}

console.log(`${count.fraction1.upNum}/${count.fraction1.btmNum} / ${count.fraction2.upNum}/${count.fraction2.btmNum} = ${count.devIn()}`);

count.fraction1 = {upNum: 5,btmNum: 20};
count.fraction2 = {upNum: 10,btmNum: 20};
console.log(`${count.fraction1.upNum}/${count.fraction1.btmNum} / ${count.fraction2.upNum}/${count.fraction2.btmNum} = ${count.devIn()}`);

count.fraction1 = {upNum: 5,btmNum: 20};
count.fraction2 = {upNum: 10,btmNum: 0};
console.log(`${count.fraction1.upNum}/${count.fraction1.btmNum} / ${count.fraction2.upNum}/${count.fraction2.btmNum} = ${count.devIn()}`);


// Скорочення об'єкта-дробу.

console.log(`________________________________________`)
console.log(`Скорочення об'єкта-дробу.`)
fraction1 = {
    upNum: 15,
    btmNum: 30,
}
console.log(`${fraction1.upNum}/${fraction1.btmNum} = ${count.devAfterNum(fraction1)}`)
fraction2 = {
    upNum: 560,
    btmNum: 3548,
}
console.log(`${fraction2.upNum}/${fraction2.btmNum} = ${count.devAfterNum(fraction2)}`)


// // (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)



