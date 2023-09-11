
//exercise 1

//let arr = [1, 5, 4, 10, 0, 3];

//for (let elem of arr) {
//    console.log(elem);
//    if (elem === 10) {
//        break;
//    }
//}

//exercise 2

//let arr = [1, 5, 4, 10, 0, 3];

//console.log(arr.indexOf(4));


//exercise 3

//let arr = [1, 3, 5, 10, 20];

//console.log(arr.join([' ']));


//exercise 4


//let arr = [];

//for (let i = 0; i < 3; i++) {
//    arr[i] = [];

//    for (let j = 0; j < 3; j++) {
//        arr[i].push(1);
//    }
//}

//console.log(arr);

//exercise 5

//let arr = [1, 1, 1];

//arr.push(2, 2, 2);

//console.log(arr);


//exercise 6

//let arr = [9, 8, 7, 'a', 6, 5];

//arr = arr.sort();

//let last = arr.pop();

//console.log(arr);


//exercise 7

//недоработано
//let arr = [9, 8, 7, 6, 5];

//let n = Number(prompt('Угадайте число'));

//let value = arr.includes(n);

//if (value = true) {
//    alert('угадал');
//} else {
//    alert('не угадал');
//}



//exercise 8

//let arr = 'abcdef';

//let arrSpl = arr.split('');

//arrSpl = arrSpl.reverse();

//arrSpl = arrSpl.join('');

//console.log(arrSpl);

//exercise 9


//var arr = [
//    [1, 2, 3],
//    [4, 5, 6]
//];
//var arr2 = [];
//for (i = 0; i < arr.length; i++) {
//    for (j = 0; j < arr[i].length; j++) {
//        arr2.push(arr[i][j]);
//    }
//}

//console.log(arr2);


//exercise 10

//let res = 0;

//for (let i = 1; i <= 10; i++) {
//    res = res + i;
//}

//console.log(res);


//exersice 11

//const arr = [1, 2, 3, 4, 5];

//let result = arr.map(el => (el ** 2));

//console.log(result);


//exersice 12

//const getLengthWords = source => source.map(str => str.length);

//console.log(getLengthWords(['JavaScript', 'CSS', 'HTML', 'Leonov', 'Nikita']));

//exercise 13

//let arr = [-21, -5, 1, -44, -12, 123, 56, 41, -1110];

//let res = arr.filter(function (elem) {
//    if (elem < 0) {
//        return true;
//    } else {
//        return false;
//    }
//});

//console.log(res);


