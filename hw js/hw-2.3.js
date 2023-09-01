/*\

Задание 1
let password = 'пароль';
let enterPassword = prompt('Введите пароль');

if (enterPassword === 'пароль') {
    console.log('Введен верный пароль');
} else {
    console.log('Введен неверный пароль');
}

Задание 2

let c = prompt('Введите число');

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

Задание 3

let d = prompt('Введите первое число');
let e = prompt('Введите второе число');

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

Задание 4
1 Вариант

let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);

2 вариант

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

Задание 5

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1':
        console.log('Это месяц зимы');
        break;
    case '2':
        console.log('Это месяц зимы');
        break;
    case '12':
        console.log('Это месяц зимы');
        break;
    case '3':
        console.log('Это месяц весны');
        break;
    case '4':
        console.log('Это месяц весны');
        break;
    case '5':
        console.log('Это месяц весны');
        break;
    case '6':
        console.log('Это месяц лета');
        break;
    case '7':
        console.log('Это месяц лета');
        break;
    case '8':
        console.log('Это месяц лета');
        break;
    case '9':
        console.log('Это месяц осени');
        break;
    case '10':
        console.log('Это месяц осени');
        break;
    case '11':
        console.log('Это месяц осени');
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}

Задание 6
Верстка

Задание 7

let userNumber = prompt('Пожалуйста, ведите любое число');

if (isNaN(userNumber)) {
    alert('Это не число');
} else if ((userNumber % 2) === 0) {
    alert('Это число четное');
} else {
    alert('Это число нечетное');
}


Задание 8

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {

    alert("Вы используете мобильное устройство на ОС iOS. Скачайте наше приложение для iOS.")

} else if (/Android/i.test(navigator.userAgent)) {
    alert("Вы используете мобильное устройство на ОС Android. Скачайте наше приложение для Android.")

} else alert("Вы используете ПК.")

Задание 9

let clientDeviceYear = prompt('Введите год выпуска вашего устройства');

if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && clientDeviceYear >= 2015) {

    alert("Вы используете мобильное устройство на ОС iOS. Скачайте наше приложение для iOS.")

} else if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && clientDeviceYear < 2015) {

    alert("Вы используете мобильное устройство на ОС iOS до 2015 года выпуска. Скачайте наше облегченное приложение для iOS.")

} else if (/Android/i.test(navigator.userAgent) && clientDeviceYear >= 2015) {

    alert("Вы используете мобильное устройство на ОС Android. Скачайте наше приложение для Android.")

} else if (/Android/i.test(navigator.userAgent) && clientDeviceYear < 2015) {

    alert("Вы используете мобильное устройство на ОС Android до 2015 года выпуска. Скачайте наше облегченное приложение для Android.")

} else alert("Вы используете ПК.")
*/