//exercise 1

//function comparisonNumber(a, b) {
//    if (a >= b) {
//        return console.log(b);
//    } else {
//        return console.log(a);
//    }
//}

//comparisonNumber(6, 5);

//exercise 2

//function checkNumber(n) {
//    if (n % 2 === 0) {
//        return console.log('Четное число');
//    } else {
//        return console.log('Нечетное число');
//    }
//}

//checkNumber(1);

//exercise 3.1

//function squaringNumber(a) {
//    let squar = a ** 2;
//    console.log(squar);
//}

//squaringNumber(8);

//exercise 3.2

//function squaringNumber(a) {
//    return a ** 2;
//}

//let result = squaringNumber(2);
//console.log(result);

//exercise 4

//let age = prompt('Сколько вам лет?');

//function checkAge(age) {
//    if (age < 0) {
//        return alert('Вы ввели неправильное значение');
//    } else if (age >= 0 && age <= 12) {
//        return alert('Привет, друг!');
//    } else {
//        return alert('Добро пожаловать!');
//    }
//}

//checkAge(age);

//exercise 5

//let mult = (a, b) => {
//    if (isNaN(a, b)) {
//        return console.log('Одно или оба значения не являются числом');
//    } else {
//        return a * b;
//    }
//};

//console.log(mult(6, 2));

//exercise 6

//let n = prompt('Введите число');

//function cubeNumber(n) {
//    if (isNaN(n)) {
//        return console.log('Значение не является числом');
//    } else {
//        return n ** 3;
//    }
//}

//console.log(`${n} в кубе равняется ${cubeNumber(n)}`);
//cubeNumber(n);

//exercise 7

//function getRectangleArea() {
//    return 3.14 * this.radius ** 2;
//}
//function getRectanglePerimeter() {
//    return this.radius * 2 * 3.14;
//}

//const circle1 = {
//    radius: 2,

//    getArea: getRectangleArea,
//    getPerimeter: getRectanglePerimeter,
//};

//const circle2 = {
//    radius: 5,


//    getArea: getRectangleArea,
//    getPerimeter: getRectanglePerimeter,
//};

//console.log(circle1.getArea());
//console.log(circle1.getPerimeter());
//console.log(circle2.getArea());
//console.log(circle2.getPerimeter());

//exercise 8

let n = prompt('Введите номер месяца');

function monthNumber(n) {
    if (n == 1 || n == 2 || n == 12) {
        return console.log('Это месяц зимы');
    } else if (n == 3 || n == 4 || n == 5) {
        return console.log('Это месяц весны');
    } else if (n == 6 || n == 7 || n == 8) {
        return console.log('Это месяц лета');
    } else if (n == 9 || n == 10 || n == 11) {
        return console.log('Это месяц осени');
    } else {
        return console.log('Такого месяца не существует');
    }
}

monthNumber();