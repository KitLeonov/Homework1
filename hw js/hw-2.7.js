//exersice 1

let greet = 'Привет, мир! ';
greet = greet.toUpperCase();
console.log(greet);

//exersice 2

function searchStart(array, string) {
    return array.filter(function (item) {
        return item.toLowerCase().startsWith(string.toLowerCase());
    });
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

//exersice 3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

//exersice 4

const numbers = [52, 53, 49, 77, 21, 32];
const maxNum = Math.max(...numbers);
const minNum = Math.min(...numbers);

console.log(` Максимальное - ${maxNum}, минимальное - ${minNum}`);

//exersice 5

console.log(Math.floor(Math.random() * 11));

//exersice 6

function getRandomNumbers(num) {
    let array = [];
    for (i = 0; i < num / 2; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
    return array;
}
console.log(getRandomNumbers(10));

//exersice 7 пока не понял как решать 




//exersice 8

let myDate = new Date();
console.log(myDate);


//exersice 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);




