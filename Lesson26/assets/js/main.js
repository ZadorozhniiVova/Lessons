// Мінімум


// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function elemNum(){
    return (arguments.length)
}

console.log(elemNum(1,2,3,4,5));

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function grow(num1,num2){
    if(num1 == num2) return (0);
    if(num1 > num2) {
        return 1
    } else {
        return -1;
    }
}
console.log(grow(10,10))
console.log(grow(10,1))
console.log(grow(1,10))

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function fact(num){
    let mult = 1;
    for(i=1;i<=num;i++){
        mult *= i; 
    }
    return mult;
}
console.log(fact(6));
console.log(fact(3));


// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function transform(first, second, third){
    return parseInt((first.toString()+second.toString()+third.toString()));
}

console.log(transform(1,4,9));
console.log(typeof(transform(1,4,9)));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function square(){
    let square = 0;
    switch(arguments.length){
        case 1 : return square = arguments[0] * arguments[0];
        case 2 : return square = arguments[0] * arguments[1];
    }
}

console.log(square(10,20));
console.log(square(10))






// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.



function numIsPerfect(num){
    let sum = 0;
    for(i = 1; i < num; i++){
        if(num % i == 0){
            sum += i; 
        }
    }
    
    if(sum === num){
       return console.log(`Число ${num} є досконалим числом`)
    }else {
        return console.log(`Число ${num} не є досконалим числом`)
    };
}

numIsPerfect(28);
numIsPerfect(30);


// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function numAreaIsPerfect(a,b){
    let perf = [];
    for(num = a; num <= b; num++){
        function numIsPerfect(num){
            let sum = 0;
            for(i = 1; i < num; i++){
                if(num % i == 0){
                    sum += i; 
                }
            }
            if(sum === num){
               return true;
            }else {
                return false;
            };
        }
        if( numIsPerfect(num) == true){
            perf.push(num);
        }        
    }
    return perf;
}

console.log(numAreaIsPerfect(1,30));

