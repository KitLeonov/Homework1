//exersice 1

// let greet = 'Привет, мир! ';
// greet = greet.toUpperCase();
// console.log(greet);

//exersice 2

// function searchStart(array, string) {
//     return array.filter(function (item) {
//         return item.toLowerCase().startsWith(string.toLowerCase());
//     });
// }

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

//exersice 3

// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));

//exersice 4

// const numbers = [52, 53, 49, 77, 21, 32];
// const maxNum = Math.max(...numbers);
// const minNum = Math.min(...numbers);

// console.log(` Максимальное - ${maxNum}, минимальное - ${minNum}`);

//exersice 5

// const getRandomInt = (max, min) => {
//     return Math.round(Math.random() * (max - min)) + min;
// }
// console.log(getRandomInt(1, 10));

//exersice 6

// function getRandomNumbers(num) {
//     let array = [];
//     for (i = 0; i < Math.floor(num / 2); i++) {
//         array.push(Math.floor(Math.random() * 10));
//     }
//     return array;
// }
// console.log(getRandomNumbers(7));

//exersice 7 есть сомнения по данной задаче

// function getRandomInte(num1, num2) {
//     return Math.round(Math.random() * (num1 - num2)) + num2;
// }
// console.log(getRandomInte(1, 5));



//exersice 8

// let myDate = new Date();
// console.log(myDate);


//exersice 9

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);


//exersice 10

function displayDate() {
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let myDate = new Date();
    if (myDate.getHours() < 10) {
        hour = '0' + hour;
    }
    if (myDate.getMinutes() < 10) {
        minute = '0' + minute;
    }
    if (myDate.getSeconds() < 10) {
        second = '0' + second;
    }

    let fullDate = `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}`
    let fullTime = `Время: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`

    console.log(fullDate + '\n' + fullTime);
}
displayDate()

//exersice 11


// function gameFruit() {

//     let arrayFruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

//     arrayFruit = arrayFruit.sort(() => Math.random() - 0.5);

//     alert(arrayFruit);

//     let userFirstQuestion = prompt('Чему равняется первый элемент массива?').toLowerCase();
//     let userLastQuestion = prompt('Чему равняется последний элемент массива?').toLowerCase();
//     if (userFirstQuestion === arrayFruit[0].toLowerCase() && userLastQuestion === arrayFruit[arrayFruit.length - 1].toLowerCase()) {
//         alert('Поздравляю, вы победили!');
//     } else if (userFirstQuestion === arrayFruit[0].toLowerCase() || userLastQuestion === arrayFruit[arrayFruit.length - 1].toLowerCase()) {
//         alert('Вы были близки к победе!');
//     } else {
//         alert('Вы ответили неверно');
//     }
// }
// gameFruit();


